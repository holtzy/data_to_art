import path from 'path';
import fs from 'fs/promises';
import { promisify } from 'util';
import { pathToFileURL } from 'url';
import * as Log from '../output/log';
import globOriginal from 'next/dist/compiled/glob';
import { interopDefault } from '../../lib/interop-default';
import { RouteType } from '..';
import { isMiddlewareFilename } from '../utils';
import { normalizePagePath } from '../../shared/lib/page-path/normalize-page-path';
import { normalizeAppPath } from '../../shared/lib/router/utils/app-paths';
const glob = promisify(globOriginal);
export async function handleBuildComplete({ // dir,
distDir, tracingRoot, adapterPath, pageKeys, appPageKeys, hasNodeMiddleware, hasInstrumentationHook, requiredServerFiles, routesManifest, // prerenderManifest,
middlewareManifest }) {
    const adapterMod = interopDefault(await import(pathToFileURL(require.resolve(adapterPath)).href));
    if (typeof adapterMod.onBuildComplete === 'function') {
        Log.info(`Running onBuildComplete from ${adapterMod.name}`);
        try {
            const outputs = [];
            const staticFiles = await glob('**/*', {
                cwd: path.join(distDir, 'static')
            });
            for (const file of staticFiles){
                const pathname = path.posix.join('/_next/static', file);
                const filePath = path.join(distDir, 'static', file);
                outputs.push({
                    type: RouteType.STATIC_FILE,
                    id: path.join('static', file),
                    pathname,
                    filePath
                });
            }
            const sharedNodeAssets = {};
            for (const file of requiredServerFiles){
                // add to shared node assets
                const filePath = path.join(distDir, file);
                const fileOutputPath = path.relative(tracingRoot, filePath);
                sharedNodeAssets[fileOutputPath] = filePath;
            }
            if (hasInstrumentationHook) {
                const assets = await handleTraceFiles(path.join(distDir, 'server', 'instrumentation.js.nft.json'));
                const fileOutputPath = path.relative(tracingRoot, path.join(distDir, 'server', 'instrumentation.js'));
                sharedNodeAssets[fileOutputPath] = path.join(distDir, 'server', 'instrumentation.js');
                Object.assign(sharedNodeAssets, assets);
            }
            async function handleTraceFiles(traceFilePath) {
                const assets = Object.assign({}, sharedNodeAssets);
                const traceData = JSON.parse(await fs.readFile(traceFilePath, 'utf8'));
                const traceFileDir = path.dirname(traceFilePath);
                for (const relativeFile of traceData.files){
                    const tracedFilePath = path.join(traceFileDir, relativeFile);
                    const fileOutputPath = path.relative(tracingRoot, tracedFilePath);
                    assets[fileOutputPath] = tracedFilePath;
                }
                return assets;
            }
            async function handleEdgeFunction(page, isMiddleware = false) {
                let type = RouteType.PAGES;
                const isAppPrefix = page.page.startsWith('app/');
                const isAppPage = isAppPrefix && page.page.endsWith('/page');
                const isAppRoute = isAppPrefix && page.page.endsWith('/route');
                if (isMiddleware) {
                    type = RouteType.MIDDLEWARE;
                } else if (isAppPage) {
                    type = RouteType.APP_PAGE;
                } else if (isAppRoute) {
                    type = RouteType.APP_ROUTE;
                } else if (page.page.startsWith('/api')) {
                    type = RouteType.PAGES_API;
                }
                const output = {
                    id: page.name,
                    runtime: 'edge',
                    pathname: isAppPrefix ? normalizeAppPath(page.name) : page.name,
                    filePath: path.join(distDir, 'server', page.files.find((item)=>item.startsWith('server/app') || item.startsWith('server/pages')) || ''),
                    assets: {},
                    type
                };
                function handleFile(file) {
                    const originalPath = path.join(distDir, file);
                    const fileOutputPath = path.join(path.relative(tracingRoot, distDir), file);
                    if (!output.assets) {
                        output.assets = {};
                    }
                    output.assets[fileOutputPath] = originalPath;
                }
                for (const file of page.files){
                    handleFile(file);
                }
                for (const item of [
                    ...page.wasm || [],
                    ...page.assets || []
                ]){
                    handleFile(item.filePath);
                }
                outputs.push(output);
            }
            const edgeFunctionHandlers = [];
            for (const middleware of Object.values(middlewareManifest.middleware)){
                if (isMiddlewareFilename(middleware.name)) {
                    edgeFunctionHandlers.push(handleEdgeFunction(middleware, true));
                }
            }
            for (const page of Object.values(middlewareManifest.functions)){
                edgeFunctionHandlers.push(handleEdgeFunction(page));
            }
            for (const page of pageKeys){
                if (middlewareManifest.functions.hasOwnProperty(page)) {
                    continue;
                }
                const route = normalizePagePath(page);
                const pageFile = path.join(distDir, 'server', 'pages', `${normalizePagePath(page)}.js`);
                const pageTraceFile = `${pageFile}.nft.json`;
                const assets = await handleTraceFiles(pageTraceFile).catch((err)=>{
                    if (err.code !== 'ENOENT' || page !== '/404' && page !== '/500') {
                        Log.warn(`Failed to copy traced files for ${pageFile}`, err);
                    }
                    return {};
                });
                outputs.push({
                    id: route,
                    type: page.startsWith('/api') ? RouteType.PAGES_API : RouteType.PAGES,
                    filePath: pageTraceFile.replace(/\.nft\.json$/, ''),
                    pathname: route,
                    assets,
                    runtime: 'nodejs'
                });
            }
            if (hasNodeMiddleware) {
                const middlewareFile = path.join(distDir, 'server', 'middleware.js');
                const middlewareTrace = `${middlewareFile}.nft.json`;
                const assets = await handleTraceFiles(middlewareTrace);
                outputs.push({
                    pathname: '/_middleware',
                    id: '/_middleware',
                    assets,
                    type: RouteType.MIDDLEWARE,
                    runtime: 'nodejs',
                    filePath: middlewareFile
                });
            }
            if (appPageKeys) {
                for (const page of appPageKeys){
                    if (middlewareManifest.functions.hasOwnProperty(page)) {
                        continue;
                    }
                    const normalizedPage = normalizeAppPath(page);
                    const pageFile = path.join(distDir, 'server', 'app', `${page}.js`);
                    const pageTraceFile = `${pageFile}.nft.json`;
                    const assets = await handleTraceFiles(pageTraceFile).catch((err)=>{
                        Log.warn(`Failed to copy traced files for ${pageFile}`, err);
                        return {};
                    });
                    outputs.push({
                        pathname: normalizedPage,
                        id: normalizedPage,
                        assets,
                        type: page.endsWith('/route') ? RouteType.APP_ROUTE : RouteType.APP_PAGE,
                        runtime: 'nodejs',
                        filePath: pageFile
                    });
                }
            }
            // TODO: prerender assets
            await adapterMod.onBuildComplete({
                routes: {
                    dynamicRoutes: routesManifest.dynamicRoutes,
                    rewrites: routesManifest.rewrites,
                    redirects: routesManifest.redirects,
                    headers: routesManifest.headers
                },
                outputs
            });
        } catch (err) {
            Log.error(`Failed to run onBuildComplete from ${adapterMod.name}`);
            throw err;
        }
    }
}

//# sourceMappingURL=build-complete.js.map
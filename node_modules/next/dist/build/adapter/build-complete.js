"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleBuildComplete", {
    enumerable: true,
    get: function() {
        return handleBuildComplete;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _promises = /*#__PURE__*/ _interop_require_default(require("fs/promises"));
const _util = require("util");
const _url = require("url");
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../output/log"));
const _glob = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/glob"));
const _interopdefault = require("../../lib/interop-default");
const _ = require("..");
const _utils = require("../utils");
const _normalizepagepath = require("../../shared/lib/page-path/normalize-page-path");
const _apppaths = require("../../shared/lib/router/utils/app-paths");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const glob = (0, _util.promisify)(_glob.default);
async function handleBuildComplete({ // dir,
distDir, tracingRoot, adapterPath, pageKeys, appPageKeys, hasNodeMiddleware, hasInstrumentationHook, requiredServerFiles, routesManifest, // prerenderManifest,
middlewareManifest }) {
    const adapterMod = (0, _interopdefault.interopDefault)(await import((0, _url.pathToFileURL)(require.resolve(adapterPath)).href));
    if (typeof adapterMod.onBuildComplete === 'function') {
        _log.info(`Running onBuildComplete from ${adapterMod.name}`);
        try {
            const outputs = [];
            const staticFiles = await glob('**/*', {
                cwd: _path.default.join(distDir, 'static')
            });
            for (const file of staticFiles){
                const pathname = _path.default.posix.join('/_next/static', file);
                const filePath = _path.default.join(distDir, 'static', file);
                outputs.push({
                    type: _.RouteType.STATIC_FILE,
                    id: _path.default.join('static', file),
                    pathname,
                    filePath
                });
            }
            const sharedNodeAssets = {};
            for (const file of requiredServerFiles){
                // add to shared node assets
                const filePath = _path.default.join(distDir, file);
                const fileOutputPath = _path.default.relative(tracingRoot, filePath);
                sharedNodeAssets[fileOutputPath] = filePath;
            }
            if (hasInstrumentationHook) {
                const assets = await handleTraceFiles(_path.default.join(distDir, 'server', 'instrumentation.js.nft.json'));
                const fileOutputPath = _path.default.relative(tracingRoot, _path.default.join(distDir, 'server', 'instrumentation.js'));
                sharedNodeAssets[fileOutputPath] = _path.default.join(distDir, 'server', 'instrumentation.js');
                Object.assign(sharedNodeAssets, assets);
            }
            async function handleTraceFiles(traceFilePath) {
                const assets = Object.assign({}, sharedNodeAssets);
                const traceData = JSON.parse(await _promises.default.readFile(traceFilePath, 'utf8'));
                const traceFileDir = _path.default.dirname(traceFilePath);
                for (const relativeFile of traceData.files){
                    const tracedFilePath = _path.default.join(traceFileDir, relativeFile);
                    const fileOutputPath = _path.default.relative(tracingRoot, tracedFilePath);
                    assets[fileOutputPath] = tracedFilePath;
                }
                return assets;
            }
            async function handleEdgeFunction(page, isMiddleware = false) {
                let type = _.RouteType.PAGES;
                const isAppPrefix = page.page.startsWith('app/');
                const isAppPage = isAppPrefix && page.page.endsWith('/page');
                const isAppRoute = isAppPrefix && page.page.endsWith('/route');
                if (isMiddleware) {
                    type = _.RouteType.MIDDLEWARE;
                } else if (isAppPage) {
                    type = _.RouteType.APP_PAGE;
                } else if (isAppRoute) {
                    type = _.RouteType.APP_ROUTE;
                } else if (page.page.startsWith('/api')) {
                    type = _.RouteType.PAGES_API;
                }
                const output = {
                    id: page.name,
                    runtime: 'edge',
                    pathname: isAppPrefix ? (0, _apppaths.normalizeAppPath)(page.name) : page.name,
                    filePath: _path.default.join(distDir, 'server', page.files.find((item)=>item.startsWith('server/app') || item.startsWith('server/pages')) || ''),
                    assets: {},
                    type
                };
                function handleFile(file) {
                    const originalPath = _path.default.join(distDir, file);
                    const fileOutputPath = _path.default.join(_path.default.relative(tracingRoot, distDir), file);
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
                if ((0, _utils.isMiddlewareFilename)(middleware.name)) {
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
                const route = (0, _normalizepagepath.normalizePagePath)(page);
                const pageFile = _path.default.join(distDir, 'server', 'pages', `${(0, _normalizepagepath.normalizePagePath)(page)}.js`);
                const pageTraceFile = `${pageFile}.nft.json`;
                const assets = await handleTraceFiles(pageTraceFile).catch((err)=>{
                    if (err.code !== 'ENOENT' || page !== '/404' && page !== '/500') {
                        _log.warn(`Failed to copy traced files for ${pageFile}`, err);
                    }
                    return {};
                });
                outputs.push({
                    id: route,
                    type: page.startsWith('/api') ? _.RouteType.PAGES_API : _.RouteType.PAGES,
                    filePath: pageTraceFile.replace(/\.nft\.json$/, ''),
                    pathname: route,
                    assets,
                    runtime: 'nodejs'
                });
            }
            if (hasNodeMiddleware) {
                const middlewareFile = _path.default.join(distDir, 'server', 'middleware.js');
                const middlewareTrace = `${middlewareFile}.nft.json`;
                const assets = await handleTraceFiles(middlewareTrace);
                outputs.push({
                    pathname: '/_middleware',
                    id: '/_middleware',
                    assets,
                    type: _.RouteType.MIDDLEWARE,
                    runtime: 'nodejs',
                    filePath: middlewareFile
                });
            }
            if (appPageKeys) {
                for (const page of appPageKeys){
                    if (middlewareManifest.functions.hasOwnProperty(page)) {
                        continue;
                    }
                    const normalizedPage = (0, _apppaths.normalizeAppPath)(page);
                    const pageFile = _path.default.join(distDir, 'server', 'app', `${page}.js`);
                    const pageTraceFile = `${pageFile}.nft.json`;
                    const assets = await handleTraceFiles(pageTraceFile).catch((err)=>{
                        _log.warn(`Failed to copy traced files for ${pageFile}`, err);
                        return {};
                    });
                    outputs.push({
                        pathname: normalizedPage,
                        id: normalizedPage,
                        assets,
                        type: page.endsWith('/route') ? _.RouteType.APP_ROUTE : _.RouteType.APP_PAGE,
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
            _log.error(`Failed to run onBuildComplete from ${adapterMod.name}`);
            throw err;
        }
    }
}

//# sourceMappingURL=build-complete.js.map
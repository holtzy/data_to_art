import { type FunctionsConfigManifest, type PrerenderManifest, type RoutesManifest } from '..';
import type { MiddlewareManifest } from '../webpack/plugins/middleware-plugin';
export declare function handleBuildComplete({ distDir, tracingRoot, adapterPath, pageKeys, appPageKeys, hasNodeMiddleware, hasInstrumentationHook, requiredServerFiles, routesManifest, middlewareManifest, }: {
    dir: string;
    distDir: string;
    adapterPath: string;
    tracingRoot: string;
    hasNodeMiddleware: boolean;
    pageKeys: readonly string[];
    hasInstrumentationHook: boolean;
    appPageKeys?: readonly string[] | undefined;
    requiredServerFiles: string[];
    routesManifest: RoutesManifest;
    prerenderManifest: PrerenderManifest;
    middlewareManifest: MiddlewareManifest;
    functionsConfigManifest: FunctionsConfigManifest;
}): Promise<void>;

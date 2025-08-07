import type { Params } from '../../server/request/params';
import type { AppPageModule } from '../../server/route-modules/app-page/module';
import type { AppSegment } from '../segment-config/app/app-segments';
import type { PrerenderedRoute, StaticPathsResult } from './types';
import type { IncrementalCache } from '../../server/lib/incremental-cache';
import type { NextConfigComplete } from '../../server/config-shared';
/**
 * Filters out duplicate parameters from a list of parameters.
 * This function uses a Map to efficiently store and retrieve unique parameter combinations.
 *
 * @param routeParamKeys - The keys of the parameters. These should be sorted to ensure consistent key generation.
 * @param routeParams - The list of parameter objects to filter.
 * @returns A new array containing only the unique parameter combinations.
 */
export declare function filterUniqueParams(routeParamKeys: readonly string[], routeParams: readonly Params[]): Params[];
/**
 * Filters out all combinations of root params from a list of parameters.
 * This function extracts only the root parameters from each parameter object
 * and then filters out duplicate combinations using a Map for efficiency.
 *
 * Given the following root param ('lang'), and the following routeParams:
 *
 * ```
 * [
 *   { lang: 'en', region: 'US', slug: ['home'] },
 *   { lang: 'en', region: 'US', slug: ['about'] },
 *   { lang: 'fr', region: 'CA', slug: ['about'] },
 * ]
 * ```
 *
 * The result will be:
 *
 * ```
 * [
 *   { lang: 'en', region: 'US' },
 *   { lang: 'fr', region: 'CA' },
 * ]
 * ```
 *
 * @param rootParamKeys - The keys of the root params. These should be sorted
 *   to ensure consistent key generation for the internal Map.
 * @param routeParams - The list of parameter objects to filter.
 * @returns A new array containing only the unique combinations of root params.
 */
export declare function filterUniqueRootParamsCombinations(rootParamKeys: readonly string[], routeParams: readonly Params[]): Params[];
/**
 * Assigns the throwOnEmptyStaticShell property to each of the prerendered routes.
 * This function uses a Trie data structure to efficiently determine whether each route
 * should throw an error when its static shell is empty.
 *
 * A route should not throw on empty static shell if it has child routes in the Trie. For example,
 * if we have two routes, `/blog/first-post` and `/blog/[slug]`, the route for
 * `/blog/[slug]` should not throw because `/blog/first-post` is a more specific concrete route.
 *
 * @param prerenderedRoutes - The prerendered routes.
 * @param routeParamKeys - The keys of the route parameters.
 */
export declare function assignErrorIfEmpty(prerenderedRoutes: readonly PrerenderedRoute[], routeParamKeys: readonly string[]): void;
/**
 * Builds the static paths for an app using `generateStaticParams`.
 *
 * @param params - The parameters for the build.
 * @returns The static paths.
 */
export declare function buildAppStaticPaths({ dir, page, distDir, dynamicIO, authInterrupts, segments, isrFlushToDisk, cacheHandler, cacheLifeProfiles, requestHeaders, cacheHandlers, maxMemoryCacheSize, fetchCacheKeyPrefix, nextConfigOutput, ComponentMod, isRoutePPREnabled, buildId, rootParamKeys, }: {
    dir: string;
    page: string;
    dynamicIO: boolean;
    authInterrupts: boolean;
    segments: AppSegment[];
    distDir: string;
    isrFlushToDisk?: boolean;
    fetchCacheKeyPrefix?: string;
    cacheHandler?: string;
    cacheHandlers?: NextConfigComplete['experimental']['cacheHandlers'];
    cacheLifeProfiles?: {
        [profile: string]: import('../../server/use-cache/cache-life').CacheLife;
    };
    maxMemoryCacheSize?: number;
    requestHeaders: IncrementalCache['requestHeaders'];
    nextConfigOutput: 'standalone' | 'export' | undefined;
    ComponentMod: AppPageModule;
    isRoutePPREnabled: boolean;
    buildId: string;
    rootParamKeys: readonly string[];
}): Promise<StaticPathsResult>;

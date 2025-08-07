"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    config: null,
    default: null,
    getServerSideProps: null,
    getStaticPaths: null,
    getStaticProps: null,
    handler: null,
    reportWebVitals: null,
    routeModule: null,
    unstable_getServerProps: null,
    unstable_getServerSideProps: null,
    unstable_getStaticParams: null,
    unstable_getStaticPaths: null,
    unstable_getStaticProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    config: function() {
        return config;
    },
    // Re-export the component (should be the default export).
    default: function() {
        return _default;
    },
    getServerSideProps: function() {
        return getServerSideProps;
    },
    getStaticPaths: function() {
        return getStaticPaths;
    },
    getStaticProps: function() {
        return getStaticProps;
    },
    handler: function() {
        return handler;
    },
    reportWebVitals: function() {
        return reportWebVitals;
    },
    routeModule: function() {
        return routeModule;
    },
    unstable_getServerProps: function() {
        return unstable_getServerProps;
    },
    unstable_getServerSideProps: function() {
        return unstable_getServerSideProps;
    },
    unstable_getStaticParams: function() {
        return unstable_getStaticParams;
    },
    unstable_getStaticPaths: function() {
        return unstable_getStaticPaths;
    },
    unstable_getStaticProps: function() {
        return unstable_getStaticProps;
    }
});
const _modulecompiled = require("../../server/route-modules/pages/module.compiled");
const _routekind = require("../../server/route-kind");
const _constants = require("../../server/lib/trace/constants");
const _tracer = require("../../server/lib/trace/tracer");
const _formaturl = require("../../shared/lib/router/utils/format-url");
const _requestmeta = require("../../server/request-meta");
const _interopdefault = require("../../server/app-render/interop-default");
const _utils = require("../../server/instrumentation/utils");
const _normalizedatapath = require("../../shared/lib/page-path/normalize-data-path");
const _responsecache = require("../../server/response-cache");
const _helpers = require("./helpers");
const _VAR_MODULE_DOCUMENT = /*#__PURE__*/ _interop_require_wildcard(require("VAR_MODULE_DOCUMENT"));
const _VAR_MODULE_APP = /*#__PURE__*/ _interop_require_wildcard(require("VAR_MODULE_APP"));
const _VAR_USERLAND = /*#__PURE__*/ _interop_require_wildcard(require("VAR_USERLAND"));
const _cachecontrol = require("../../server/lib/cache-control");
const _utils1 = require("../../shared/lib/utils");
const _redirectstatus = require("../../lib/redirect-status");
const _constants1 = require("../../lib/constants");
const _sendpayload = require("../../server/send-payload");
const _renderresult = /*#__PURE__*/ _interop_require_default(require("../../server/render-result"));
const _utils2 = require("../../server/response-cache/utils");
const _nofallbackerrorexternal = require("../../shared/lib/no-fallback-error.external");
const _redirectstatuscode = require("../../client/components/redirect-status-code");
const _isbot = require("../../shared/lib/router/utils/is-bot");
const _addpathprefix = require("../../shared/lib/router/utils/add-path-prefix");
const _removetrailingslash = require("../../shared/lib/router/utils/remove-trailing-slash");
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
const _default = (0, _helpers.hoist)(_VAR_USERLAND, 'default');
const getStaticProps = (0, _helpers.hoist)(_VAR_USERLAND, 'getStaticProps');
const getStaticPaths = (0, _helpers.hoist)(_VAR_USERLAND, 'getStaticPaths');
const getServerSideProps = (0, _helpers.hoist)(_VAR_USERLAND, 'getServerSideProps');
const config = (0, _helpers.hoist)(_VAR_USERLAND, 'config');
const reportWebVitals = (0, _helpers.hoist)(_VAR_USERLAND, 'reportWebVitals');
const unstable_getStaticProps = (0, _helpers.hoist)(_VAR_USERLAND, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0, _helpers.hoist)(_VAR_USERLAND, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0, _helpers.hoist)(_VAR_USERLAND, 'unstable_getStaticParams');
const unstable_getServerProps = (0, _helpers.hoist)(_VAR_USERLAND, 'unstable_getServerProps');
const unstable_getServerSideProps = (0, _helpers.hoist)(_VAR_USERLAND, 'unstable_getServerSideProps');
const routeModule = new _modulecompiled.PagesRouteModule({
    definition: {
        kind: _routekind.RouteKind.PAGES,
        page: 'VAR_DEFINITION_PAGE',
        pathname: 'VAR_DEFINITION_PATHNAME',
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: process.env.__NEXT_RELATIVE_DIST_DIR || '',
    projectDir: process.env.__NEXT_RELATIVE_PROJECT_DIR || '',
    components: {
        // default export might not exist when optimized for data only
        App: _VAR_MODULE_APP.default,
        Document: _VAR_MODULE_DOCUMENT.default
    },
    userland: _VAR_USERLAND
});
async function handler(req, res, ctx) {
    var _serverFilesManifest_config_experimental, _serverFilesManifest_config;
    let srcPage = 'VAR_DEFINITION_PAGE';
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if (process.env.TURBOPACK) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = process.env.__NEXT_MULTI_ZONE_DRAFT_MODE;
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return;
    }
    const { buildId, query, params, parsedUrl, originalQuery, originalPathname, buildManifest, nextFontManifest, serverFilesManifest, reactLoadableManifest, prerenderManifest, isDraftMode, isOnDemandRevalidate, revalidateOnlyGenerated, locale, locales, defaultLocale, routerServerContext, nextConfig, resolvedPathname } = prepareResult;
    const isExperimentalCompile = serverFilesManifest == null ? void 0 : (_serverFilesManifest_config = serverFilesManifest.config) == null ? void 0 : (_serverFilesManifest_config_experimental = _serverFilesManifest_config.experimental) == null ? void 0 : _serverFilesManifest_config_experimental.isExperimentalCompile;
    const hasServerProps = Boolean(getServerSideProps);
    const hasStaticProps = Boolean(getStaticProps);
    const hasStaticPaths = Boolean(getStaticPaths);
    const hasGetInitialProps = Boolean((_VAR_USERLAND.default || _VAR_USERLAND).getInitialProps);
    const isAmp = query.amp && config.amp;
    let cacheKey = null;
    let isIsrFallback = false;
    let isNextDataRequest = prepareResult.isNextDataRequest && (hasStaticProps || hasServerProps);
    const is404Page = srcPage === '/404';
    const is500Page = srcPage === '/500';
    const isErrorPage = srcPage === '/_error';
    if (!routeModule.isDev && !isDraftMode && hasStaticProps) {
        cacheKey = `${locale ? `/${locale}` : ''}${(srcPage === '/' || resolvedPathname === '/') && locale ? '' : resolvedPathname}${isAmp ? '.amp' : ''}`;
        if (is404Page || is500Page || isErrorPage) {
            cacheKey = `${locale ? `/${locale}` : ''}${srcPage}${isAmp ? '.amp' : ''}`;
        }
        // ensure /index and / is normalized to one key
        cacheKey = cacheKey === '/index' ? '/' : cacheKey;
    }
    if (hasStaticPaths && !isDraftMode) {
        const decodedPathname = (0, _removetrailingslash.removeTrailingSlash)(locale ? (0, _addpathprefix.addPathPrefix)(resolvedPathname, `/${locale}`) : resolvedPathname);
        const isPrerendered = Boolean(prerenderManifest.routes[decodedPathname]) || prerenderManifest.notFoundRoutes.includes(decodedPathname);
        const prerenderInfo = prerenderManifest.dynamicRoutes[srcPage];
        if (prerenderInfo) {
            if (prerenderInfo.fallback === false && !isPrerendered) {
                throw new _nofallbackerrorexternal.NoFallbackError();
            }
            if (typeof prerenderInfo.fallback === 'string' && !isPrerendered && !isNextDataRequest) {
                isIsrFallback = true;
            }
        }
    }
    // When serving a bot request, we want to serve a blocking render and not
    // the prerendered page. This ensures that the correct content is served
    // to the bot in the head.
    if (isIsrFallback && (0, _isbot.isBot)(req.headers['user-agent'] || '') || (0, _requestmeta.getRequestMeta)(req, 'minimalMode')) {
        isIsrFallback = false;
    }
    const tracer = (0, _tracer.getTracer)();
    const activeSpan = tracer.getActiveScopeSpan();
    try {
        const method = req.method || 'GET';
        const resolvedUrl = (0, _formaturl.formatUrl)({
            pathname: nextConfig.trailingSlash ? parsedUrl.pathname : (0, _removetrailingslash.removeTrailingSlash)(parsedUrl.pathname || '/'),
            // make sure to only add query values from original URL
            query: hasStaticProps ? {} : originalQuery
        });
        const publicRuntimeConfig = (routerServerContext == null ? void 0 : routerServerContext.publicRuntimeConfig) || nextConfig.publicRuntimeConfig;
        const handleResponse = async (span)=>{
            const responseGenerator = async ({ previousCacheEntry })=>{
                var _previousCacheEntry_value;
                const doRender = async ()=>{
                    try {
                        var _nextConfig_i18n, _nextConfig_experimental_amp, _nextConfig_experimental_amp1;
                        return await routeModule.render(req, res, {
                            query: hasStaticProps && !isExperimentalCompile ? {
                                ...params,
                                ...isAmp ? {
                                    amp: query.amp
                                } : {}
                            } : {
                                ...query,
                                ...params
                            },
                            params,
                            page: srcPage,
                            renderContext: {
                                isDraftMode,
                                isFallback: isIsrFallback,
                                developmentNotFoundSourcePage: (0, _requestmeta.getRequestMeta)(req, 'developmentNotFoundSourcePage')
                            },
                            sharedContext: {
                                buildId,
                                customServer: Boolean(routerServerContext == null ? void 0 : routerServerContext.isCustomServer) || undefined,
                                deploymentId: process.env.NEXT_DEPLOYMENT_ID
                            },
                            renderOpts: {
                                params,
                                routeModule,
                                page: srcPage,
                                pageConfig: config || {},
                                Component: (0, _interopdefault.interopDefault)(_VAR_USERLAND),
                                ComponentMod: _VAR_USERLAND,
                                getStaticProps,
                                getStaticPaths,
                                getServerSideProps,
                                supportsDynamicResponse: !hasStaticProps,
                                buildManifest,
                                nextFontManifest,
                                reactLoadableManifest,
                                assetPrefix: nextConfig.assetPrefix,
                                strictNextHead: nextConfig.experimental.strictNextHead ?? true,
                                previewProps: prerenderManifest.preview,
                                images: nextConfig.images,
                                nextConfigOutput: nextConfig.output,
                                optimizeCss: Boolean(nextConfig.experimental.optimizeCss),
                                nextScriptWorkers: Boolean(nextConfig.experimental.nextScriptWorkers),
                                domainLocales: (_nextConfig_i18n = nextConfig.i18n) == null ? void 0 : _nextConfig_i18n.domains,
                                crossOrigin: nextConfig.crossOrigin,
                                multiZoneDraftMode,
                                basePath: nextConfig.basePath,
                                canonicalBase: nextConfig.amp.canonicalBase || '',
                                ampOptimizerConfig: (_nextConfig_experimental_amp = nextConfig.experimental.amp) == null ? void 0 : _nextConfig_experimental_amp.optimizer,
                                disableOptimizedLoading: nextConfig.experimental.disableOptimizedLoading,
                                largePageDataBytes: nextConfig.experimental.largePageDataBytes,
                                // Only the `publicRuntimeConfig` key is exposed to the client side
                                // It'll be rendered as part of __NEXT_DATA__ on the client side
                                runtimeConfig: Object.keys(publicRuntimeConfig).length > 0 ? publicRuntimeConfig : undefined,
                                isExperimentalCompile,
                                experimental: {
                                    clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || []
                                },
                                locale,
                                locales,
                                defaultLocale,
                                setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                                isNextDataRequest: isNextDataRequest && (hasServerProps || hasStaticProps),
                                resolvedUrl,
                                // For getServerSideProps and getInitialProps we need to ensure we use the original URL
                                // and not the resolved URL to prevent a hydration mismatch on
                                // asPath
                                resolvedAsPath: hasServerProps || hasGetInitialProps ? (0, _formaturl.formatUrl)({
                                    // we use the original URL pathname less the _next/data prefix if
                                    // present
                                    pathname: isNextDataRequest ? (0, _normalizedatapath.normalizeDataPath)(originalPathname) : originalPathname,
                                    query: originalQuery
                                }) : resolvedUrl,
                                isOnDemandRevalidate,
                                ErrorDebug: (0, _requestmeta.getRequestMeta)(req, 'PagesErrorDebug'),
                                err: (0, _requestmeta.getRequestMeta)(req, 'invokeError'),
                                dev: routeModule.isDev,
                                // needed for experimental.optimizeCss feature
                                distDir: `${routeModule.projectDir}/${routeModule.distDir}`,
                                ampSkipValidation: (_nextConfig_experimental_amp1 = nextConfig.experimental.amp) == null ? void 0 : _nextConfig_experimental_amp1.skipValidation,
                                ampValidator: (0, _requestmeta.getRequestMeta)(req, 'ampValidator')
                            }
                        }).then((renderResult)=>{
                            const { metadata } = renderResult;
                            let cacheControl = metadata.cacheControl;
                            if ('isNotFound' in metadata && metadata.isNotFound) {
                                return {
                                    value: null,
                                    cacheControl
                                };
                            }
                            // Handle `isRedirect`.
                            if (metadata.isRedirect) {
                                return {
                                    value: {
                                        kind: _responsecache.CachedRouteKind.REDIRECT,
                                        props: metadata.pageData ?? metadata.flightData
                                    },
                                    cacheControl
                                };
                            }
                            return {
                                value: {
                                    kind: _responsecache.CachedRouteKind.PAGES,
                                    html: renderResult,
                                    pageData: renderResult.metadata.pageData,
                                    headers: renderResult.metadata.headers,
                                    status: renderResult.metadata.statusCode
                                },
                                cacheControl
                            };
                        }).finally(()=>{
                            if (!span) return;
                            span.setAttributes({
                                'http.status_code': res.statusCode,
                                'next.rsc': false
                            });
                            const rootSpanAttributes = tracer.getRootSpanAttributes();
                            // We were unable to get attributes, probably OTEL is not enabled
                            if (!rootSpanAttributes) {
                                return;
                            }
                            if (rootSpanAttributes.get('next.span_type') !== _constants.BaseServerSpan.handleRequest) {
                                console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                                return;
                            }
                            const route = rootSpanAttributes.get('next.route');
                            if (route) {
                                const name = `${method} ${route}`;
                                span.setAttributes({
                                    'next.route': route,
                                    'http.route': route,
                                    'next.span_name': name
                                });
                                span.updateName(name);
                            } else {
                                span.updateName(`${method} ${req.url}`);
                            }
                        });
                    } catch (err) {
                        // if this is a background revalidate we need to report
                        // the request error here as it won't be bubbled
                        if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {
                            await routeModule.onRequestError(req, err, {
                                routerKind: 'Pages Router',
                                routePath: srcPage,
                                routeType: 'render',
                                revalidateReason: (0, _utils.getRevalidateReason)({
                                    isRevalidate: hasStaticProps,
                                    isOnDemandRevalidate
                                })
                            }, routerServerContext);
                        }
                        throw err;
                    }
                };
                // if we've already generated this page we no longer
                // serve the fallback
                if (previousCacheEntry) {
                    isIsrFallback = false;
                }
                if (isIsrFallback) {
                    const fallbackResponse = await routeModule.getResponseCache(req).get(routeModule.isDev ? null : locale ? `/${locale}${srcPage}` : srcPage, async ({ previousCacheEntry: previousFallbackCacheEntry = null })=>{
                        if (!routeModule.isDev) {
                            return (0, _utils2.toResponseCacheEntry)(previousFallbackCacheEntry);
                        }
                        return doRender();
                    }, {
                        routeKind: _routekind.RouteKind.PAGES,
                        isFallback: true,
                        isRoutePPREnabled: false,
                        isOnDemandRevalidate: false,
                        incrementalCache: await routeModule.getIncrementalCache(req, nextConfig, prerenderManifest),
                        waitUntil: ctx.waitUntil
                    });
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        fallbackResponse.isMiss = true;
                        return fallbackResponse;
                    }
                }
                if (!(0, _requestmeta.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {
                    res.statusCode = 404;
                    // on-demand revalidate always sets this header
                    res.setHeader('x-nextjs-cache', 'REVALIDATED');
                    res.end('This page could not be found');
                    return null;
                }
                if (isIsrFallback && (previousCacheEntry == null ? void 0 : (_previousCacheEntry_value = previousCacheEntry.value) == null ? void 0 : _previousCacheEntry_value.kind) === _responsecache.CachedRouteKind.PAGES) {
                    return {
                        value: {
                            kind: _responsecache.CachedRouteKind.PAGES,
                            html: new _renderresult.default(Buffer.from(previousCacheEntry.value.html), {
                                contentType: 'text/html;utf-8',
                                metadata: {
                                    statusCode: previousCacheEntry.value.status,
                                    headers: previousCacheEntry.value.headers
                                }
                            }),
                            pageData: {},
                            status: previousCacheEntry.value.status,
                            headers: previousCacheEntry.value.headers
                        },
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    };
                }
                return doRender();
            };
            const result = await routeModule.handleResponse({
                cacheKey,
                req,
                nextConfig,
                routeKind: _routekind.RouteKind.PAGES,
                isOnDemandRevalidate,
                revalidateOnlyGenerated,
                waitUntil: ctx.waitUntil,
                responseGenerator: responseGenerator,
                prerenderManifest
            });
            // if we got a cache hit this wasn't an ISR fallback
            // but it wasn't generated during build so isn't in the
            // prerender-manifest
            if (isIsrFallback && !(result == null ? void 0 : result.isMiss)) {
                isIsrFallback = false;
            }
            // response is finished is no cache entry
            if (!result) {
                return;
            }
            if (hasStaticProps && !(0, _requestmeta.getRequestMeta)(req, 'minimalMode')) {
                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : result.isMiss ? 'MISS' : result.isStale ? 'STALE' : 'HIT');
            }
            let cacheControl;
            if (!hasStaticProps || isIsrFallback) {
                if (!res.getHeader('Cache-Control')) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                }
            } else if (is404Page) {
                const notFoundRevalidate = (0, _requestmeta.getRequestMeta)(req, 'notFoundRevalidate');
                cacheControl = {
                    revalidate: typeof notFoundRevalidate === 'undefined' ? 0 : notFoundRevalidate,
                    expire: undefined
                };
            } else if (is500Page) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (result.cacheControl) {
                // If the cache entry has a cache control with a revalidate value that's
                // a number, use it.
                if (typeof result.cacheControl.revalidate === 'number') {
                    var _result_cacheControl;
                    if (result.cacheControl.revalidate < 1) {
                        throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${result.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                            value: "E22",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    cacheControl = {
                        revalidate: result.cacheControl.revalidate,
                        expire: ((_result_cacheControl = result.cacheControl) == null ? void 0 : _result_cacheControl.expire) ?? nextConfig.expireTime
                    };
                } else {
                    // revalidate: false
                    cacheControl = {
                        revalidate: _constants1.CACHE_ONE_YEAR,
                        expire: undefined
                    };
                }
            }
            // If cache control is already set on the response we don't
            // override it to allow users to customize it via next.config
            if (cacheControl && !res.getHeader('Cache-Control')) {
                res.setHeader('Cache-Control', (0, _cachecontrol.getCacheControlHeader)(cacheControl));
            }
            // notFound: true case
            if (!result.value) {
                var _result_cacheControl1;
                // add revalidate metadata before rendering 404 page
                // so that we can use this as source of truth for the
                // cache-control header instead of what the 404 page returns
                // for the revalidate value
                (0, _requestmeta.addRequestMeta)(req, 'notFoundRevalidate', (_result_cacheControl1 = result.cacheControl) == null ? void 0 : _result_cacheControl1.revalidate);
                res.statusCode = 404;
                if (isNextDataRequest) {
                    res.end('{"notFound":true}');
                    return;
                }
                // TODO: should route-module itself handle rendering the 404
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res, parsedUrl, false);
                } else {
                    res.end('This page could not be found');
                }
                return;
            }
            if (result.value.kind === _responsecache.CachedRouteKind.REDIRECT) {
                if (isNextDataRequest) {
                    res.setHeader('content-type', 'application/json');
                    res.end(JSON.stringify(result.value.props));
                    return;
                } else {
                    const handleRedirect = (pageData)=>{
                        const redirect = {
                            destination: pageData.pageProps.__N_REDIRECT,
                            statusCode: pageData.pageProps.__N_REDIRECT_STATUS,
                            basePath: pageData.pageProps.__N_REDIRECT_BASE_PATH
                        };
                        const statusCode = (0, _redirectstatus.getRedirectStatus)(redirect);
                        const { basePath } = nextConfig;
                        if (basePath && redirect.basePath !== false && redirect.destination.startsWith('/')) {
                            redirect.destination = `${basePath}${redirect.destination}`;
                        }
                        if (redirect.destination.startsWith('/')) {
                            redirect.destination = (0, _utils1.normalizeRepeatedSlashes)(redirect.destination);
                        }
                        res.statusCode = statusCode;
                        res.setHeader('Location', redirect.destination);
                        if (statusCode === _redirectstatuscode.RedirectStatusCode.PermanentRedirect) {
                            res.setHeader('Refresh', `0;url=${redirect.destination}`);
                        }
                        res.end(redirect.destination);
                    };
                    await handleRedirect(result.value.props);
                    return null;
                }
            }
            if (result.value.kind !== _responsecache.CachedRouteKind.PAGES) {
                throw Object.defineProperty(new Error(`Invariant: received non-pages cache entry in pages handler`), "__NEXT_ERROR_CODE", {
                    value: "E695",
                    enumerable: false,
                    configurable: true
                });
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            // Draft mode should never be cached
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // when invoking _error before pages/500 we don't actually
            // send the _error response
            if ((0, _requestmeta.getRequestMeta)(req, 'customErrorRender') || isErrorPage && (0, _requestmeta.getRequestMeta)(req, 'minimalMode') && res.statusCode === 500) {
                return null;
            }
            await (0, _sendpayload.sendRenderResult)({
                req,
                res,
                // If we are rendering the error page it's not a data request
                // anymore
                result: isNextDataRequest && !isErrorPage && !is500Page ? new _renderresult.default(Buffer.from(JSON.stringify(result.value.pageData)), {
                    contentType: 'application/json',
                    metadata: result.value.html.metadata
                }) : result.value.html,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                cacheControl: routeModule.isDev ? undefined : cacheControl,
                type: isNextDataRequest ? 'json' : 'html'
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse();
        } else {
            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(_constants.BaseServerSpan.handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: _tracer.SpanKind.SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof _nofallbackerrorexternal.NoFallbackError)) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'Pages Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, _utils.getRevalidateReason)({
                    isRevalidate: hasStaticProps,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}

//# sourceMappingURL=pages.js.map
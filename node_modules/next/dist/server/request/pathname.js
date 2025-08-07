"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createServerPathnameForMetadata", {
    enumerable: true,
    get: function() {
        return createServerPathnameForMetadata;
    }
});
const _dynamicrendering = require("../app-render/dynamic-rendering");
const _workunitasyncstorageexternal = require("../app-render/work-unit-async-storage.external");
const _dynamicrenderingutils = require("../dynamic-rendering-utils");
const _invarianterror = require("../../shared/lib/invariant-error");
function createServerPathnameForMetadata(underlyingPathname, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                {
                    return createPrerenderPathname(underlyingPathname, workStore, workUnitStore);
                }
            default:
        }
    }
    return createRenderPathname(underlyingPathname);
}
function createPrerenderPathname(underlyingPathname, workStore, prerenderStore) {
    const fallbackParams = workStore.fallbackRouteParams;
    if (fallbackParams && fallbackParams.size > 0) {
        switch(prerenderStore.type){
            case 'prerender':
                return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`pathname`');
            case 'prerender-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderPathname was called inside a client component scope.'), "__NEXT_ERROR_CODE", {
                    value: "E694",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
                return makeErroringPathname(workStore, prerenderStore.dynamicTracking);
                break;
            default:
                return makeErroringPathname(workStore, null);
        }
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return Promise.resolve(underlyingPathname);
}
function makeErroringPathname(workStore, dynamicTracking) {
    let reject = null;
    const promise = new Promise((_, re)=>{
        reject = re;
    });
    const originalThen = promise.then.bind(promise);
    // We instrument .then so that we can generate a tracking event only if you actually
    // await this promise, not just that it is created.
    promise.then = (onfulfilled, onrejected)=>{
        if (reject) {
            try {
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, 'metadata relative url resolving', dynamicTracking);
            } catch (error) {
                reject(error);
                reject = null;
            }
        }
        return originalThen(onfulfilled, onrejected);
    };
    // We wrap in a noop proxy to trick the runtime into thinking it
    // isn't a native promise (it's not really). This is so that awaiting
    // the promise will call the `then` property triggering the lazy postpone
    return new Proxy(promise, {});
}
function createRenderPathname(underlyingPathname) {
    return Promise.resolve(underlyingPathname);
}

//# sourceMappingURL=pathname.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    findRootDir: null,
    findRootLockFile: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    findRootDir: function() {
        return findRootDir;
    },
    findRootLockFile: function() {
        return findRootLockFile;
    }
});
const _path = require("path");
const _findup = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/find-up"));
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../build/output/log"));
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
function findRootLockFile(cwd) {
    return _findup.default.sync([
        'pnpm-lock.yaml',
        'package-lock.json',
        'yarn.lock',
        'bun.lock',
        'bun.lockb'
    ], {
        cwd
    });
}
function findRootDir(cwd) {
    const lockFile = findRootLockFile(cwd);
    if (!lockFile) return undefined;
    const lockFiles = [
        lockFile
    ];
    while(true){
        const nextDir = (0, _path.dirname)((0, _path.dirname)(lockFiles[lockFiles.length - 1]));
        const newLockFile = findRootLockFile(nextDir);
        if (newLockFile) {
            lockFiles.push(newLockFile);
        } else {
            break;
        }
    }
    // Only warn if not in a build worker to avoid duplicate warnings
    if (typeof process.send !== 'function' && lockFiles.length > 1) {
        _log.warnOnce(`Warning: Found multiple lockfiles. Selecting ${lockFiles[lockFiles.length - 1]}.\n   Consider removing the lockfiles at:${lockFiles.slice(0, -1).map((str)=>'\n   * ' + str).join('')}\n`);
    }
    return (0, _path.dirname)(lockFile);
}

//# sourceMappingURL=find-root.js.map
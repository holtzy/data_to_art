"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getOriginalCodeFrame: null,
    ignoreListAnonymousStackFramesIfSandwiched: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getOriginalCodeFrame: function() {
        return getOriginalCodeFrame;
    },
    ignoreListAnonymousStackFramesIfSandwiched: function() {
        return ignoreListAnonymousStackFramesIfSandwiched;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _codeframe = require("next/dist/compiled/babel/code-frame");
const _isinternal = /*#__PURE__*/ _interop_require_default._(require("../../shared/lib/is-internal"));
const _sourcemaps = require("../../server/lib/source-maps");
function ignoreListAnonymousStackFramesIfSandwiched(responses) {
    (0, _sourcemaps.ignoreListAnonymousStackFramesIfSandwiched)(responses, (response)=>{
        return response.status === 'fulfilled' && response.value.originalStackFrame !== null && response.value.originalStackFrame.file === '<anonymous>';
    }, (response)=>{
        return response.status === 'fulfilled' && response.value.originalStackFrame !== null && response.value.originalStackFrame.ignored === true;
    }, (response)=>{
        return response.status === 'fulfilled' && response.value.originalStackFrame !== null ? response.value.originalStackFrame.methodName : '';
    }, (response)=>{
        ;
        response.value.originalStackFrame.ignored = true;
    });
}
function getOriginalCodeFrame(frame, source, colors) {
    if (colors === void 0) colors = process.stdout.isTTY;
    if (!source || (0, _isinternal.default)(frame.file)) {
        return null;
    }
    var _frame_lineNumber, _frame_column;
    return (0, _codeframe.codeFrameColumns)(source, {
        start: {
            // 1-based, but -1 means start line without highlighting
            line: (_frame_lineNumber = frame.lineNumber) != null ? _frame_lineNumber : -1,
            // 1-based, but 0 means whole line without column highlighting
            column: (_frame_column = frame.column) != null ? _frame_column : 0
        }
    }, {
        forceColor: colors
    });
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=shared.js.map
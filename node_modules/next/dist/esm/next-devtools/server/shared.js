import { codeFrameColumns } from 'next/dist/compiled/babel/code-frame';
import isInternal from '../../shared/lib/is-internal';
import { ignoreListAnonymousStackFramesIfSandwiched as ignoreListAnonymousStackFramesIfSandwichedGeneric } from '../../server/lib/source-maps';
export function ignoreListAnonymousStackFramesIfSandwiched(responses) {
    ignoreListAnonymousStackFramesIfSandwichedGeneric(responses, (response)=>{
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
/**
 * It looks up the code frame of the traced source.
 * @note It ignores Next.js/React internals, as these can often be huge bundled files.
 */ export function getOriginalCodeFrame(frame, source, colors) {
    if (colors === void 0) colors = process.stdout.isTTY;
    if (!source || isInternal(frame.file)) {
        return null;
    }
    var _frame_lineNumber, _frame_column;
    return codeFrameColumns(source, {
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

//# sourceMappingURL=shared.js.map
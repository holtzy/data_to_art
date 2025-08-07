import type { OverlayState } from '../../../../shared';
import type { ReadyRuntimeError } from '../../../../utils/get-error-by-type';
import type { DebugInfo } from '../../../../../shared/types';
import type { ErrorType } from '../../../errors/error-type-label/error-type-label';
export declare function IssuesTabContent({ notes, buildError, hydrationWarning, errorDetails, activeError, errorType, debugInfo, errorCode, }: {
    notes: string | null;
    buildError: OverlayState['buildError'];
    hydrationWarning: string | null;
    errorDetails: {
        hydrationWarning: string | null;
        notes: string | null;
        reactOutputComponentDiff: string | null;
    } | null;
    activeError: ReadyRuntimeError | null;
    errorType: ErrorType | null;
    debugInfo: DebugInfo;
    errorCode: string | null | undefined;
}): import("react/jsx-runtime").JSX.Element;
export declare const DEVTOOLS_PANEL_TAB_ISSUES_CONTENT_STYLES: string;

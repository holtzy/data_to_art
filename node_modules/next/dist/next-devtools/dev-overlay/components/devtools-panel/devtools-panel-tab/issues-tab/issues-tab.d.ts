import type { OverlayState } from '../../../../shared';
import type { DebugInfo } from '../../../../../shared/types';
import type { ReadyRuntimeError } from '../../../../utils/get-error-by-type';
import type { HydrationErrorState } from '../../../../../shared/hydration-error';
export declare function IssuesTab({ debugInfo, runtimeErrors, getSquashedHydrationErrorDetails, buildError, }: {
    debugInfo: DebugInfo;
    runtimeErrors: ReadyRuntimeError[];
    getSquashedHydrationErrorDetails: (error: Error) => HydrationErrorState | null;
    buildError: OverlayState['buildError'];
}): import("react/jsx-runtime").JSX.Element;
export declare const DEVTOOLS_PANEL_TAB_ISSUES_STYLES: string;

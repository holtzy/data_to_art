import type { DebugInfo } from '../../../../../shared/types';
import type { ErrorType } from '../../../errors/error-type-label/error-type-label';
export declare function IssuesTabContentLayout({ error, errorType, message, debugInfo, children, errorCode, environmentName, }: {
    error: Error & {
        environmentName?: string;
    };
    errorType: ErrorType;
    message: string;
    debugInfo: DebugInfo;
    children: React.ReactNode;
    errorCode?: string | null;
    environmentName?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const DEVTOOLS_PANEL_TAB_ISSUES_CONTENT_LAYOUT_STYLES: string;

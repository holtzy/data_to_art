import type { ReadyRuntimeError } from '../../../../utils/get-error-by-type';
export declare function IssuesTabSidebar({ runtimeErrors, activeIdx, setActiveIndex, }: {
    runtimeErrors: ReadyRuntimeError[];
    errorType: string | null;
    activeIdx: number;
    setActiveIndex: (idx: number) => void;
}): import("react/jsx-runtime").JSX.Element | null;
export declare const DEVTOOLS_PANEL_TAB_ISSUES_SIDEBAR_STYLES: string;

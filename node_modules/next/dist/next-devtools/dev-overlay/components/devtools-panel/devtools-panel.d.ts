import type { OverlayDispatch, OverlayState } from '../../shared';
import type { ReadyRuntimeError } from '../../utils/get-error-by-type';
import type { HydrationErrorState } from '../../../shared/hydration-error';
export type DevToolsPanelTabType = 'issues' | 'route' | 'settings';
export declare function DevToolsPanel({ state, dispatch, issueCount, runtimeErrors, getSquashedHydrationErrorDetails, }: {
    state: OverlayState;
    dispatch: OverlayDispatch;
    issueCount: number;
    runtimeErrors: ReadyRuntimeError[];
    getSquashedHydrationErrorDetails: (error: Error) => HydrationErrorState | null;
}): import("react/jsx-runtime").JSX.Element;
export declare const DEVTOOLS_PANEL_STYLES: string;

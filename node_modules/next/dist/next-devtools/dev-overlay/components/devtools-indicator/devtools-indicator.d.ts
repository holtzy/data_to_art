import type { OverlayState, OverlayDispatch } from '../../shared';
export declare const INDICATOR_PADDING = 20;
export declare function DevToolsIndicator({ state, dispatch, errorCount, isBuildError, }: {
    state: OverlayState;
    dispatch: OverlayDispatch;
    errorCount: number;
    isBuildError: boolean;
}): import("react/jsx-runtime").JSX.Element;

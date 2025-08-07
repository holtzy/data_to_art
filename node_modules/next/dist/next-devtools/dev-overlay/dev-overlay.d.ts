import { type OverlayDispatch, type OverlayState } from './shared';
import type { HydrationErrorState } from '../shared/hydration-error';
export declare function DevOverlay({ state, dispatch, getSquashedHydrationErrorDetails, }: {
    state: OverlayState;
    dispatch: OverlayDispatch;
    getSquashedHydrationErrorDetails: (error: Error) => HydrationErrorState | null;
}): import("react/jsx-runtime").JSX.Element;

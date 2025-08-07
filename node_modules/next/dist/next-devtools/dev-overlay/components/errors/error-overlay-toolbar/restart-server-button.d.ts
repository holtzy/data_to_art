import { type OverlayDispatch } from '../../../shared';
import type { SupportedErrorEvent } from '../../../container/runtime-error/render-error';
/**
 * When the Turbopack persistent cache is enabled, and the user reloads on a
 * specific error and that error persists, we show the restart server button as
 * an option. This is because some errors are recoverable by clearing the
 * bundler cache, but we want to provide a shortcut to do this and collect
 * telemetry on how often this is used.
 */
export declare function RestartServerButton({ showButton }: {
    showButton: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
/**
 * Sets up a beforeunload listener to show the restart server button
 * if the developer reloads on a specific error and that error persists with Turbopack + Persistent Cache.
 */
export declare function usePersistentCacheErrorDetection({ errors, dispatch, }: {
    errors: SupportedErrorEvent[];
    dispatch: OverlayDispatch;
}): void;
export declare const RESTART_SERVER_BUTTON_STYLES = "\n  .restart-dev-server-button {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n    margin: 0 12px;\n\n    height: var(--size-26);\n    padding: 6px 8px 6px 6px;\n    background: var(--color-amber-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    color: var(--color-amber-900);\n    font-size: var(--size-12);\n    font-weight: 500;\n    line-height: var(--size-16);\n  }\n";

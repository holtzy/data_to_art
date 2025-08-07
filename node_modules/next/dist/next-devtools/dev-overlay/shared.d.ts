import type { VersionInfo } from '../../server/dev/parse-version-info';
import type { SupportedErrorEvent } from './container/runtime-error/render-error';
import type { DebugInfo } from '../shared/types';
import type { DevIndicatorServerState } from '../../server/dev/dev-indicator-server-state';
export type Corners = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare const NEXT_DEV_TOOLS_SCALE: {
    Small: number;
    Medium: number;
    Large: number;
};
type FastRefreshState = 
/** No refresh in progress. */
{
    type: 'idle';
}
/** The refresh process has been triggered, but the new code has not been executed yet. */
 | {
    type: 'pending';
    errors: SupportedErrorEvent[];
};
export interface OverlayState {
    nextId: number;
    buildError: string | null;
    errors: SupportedErrorEvent[];
    refreshState: FastRefreshState;
    versionInfo: VersionInfo;
    notFound: boolean;
    buildingIndicator: boolean;
    renderingIndicator: boolean;
    staticIndicator: boolean;
    showIndicator: boolean;
    disableDevIndicator: boolean;
    /** Whether to show the restart server button in the panel UI. Currently
     *  only used when Turbopack + Persistent Cache is enabled.
     */
    showRestartServerButton: boolean;
    debugInfo: DebugInfo;
    routerType: 'pages' | 'app';
    /** This flag is used to handle the Error Overlay state in the "old" overlay.
     *  In the DevTools panel, this value will used for the "Error Overlay Mode"
     *  which is viewing the "Issues Tab" as a fullscreen.
     */
    isErrorOverlayOpen: boolean;
    isDevToolsPanelOpen: boolean;
    devToolsPosition: Corners;
    scale: number;
    page: string;
}
export type OverlayDispatch = React.Dispatch<DispatcherEvent>;
export declare const ACTION_STATIC_INDICATOR = "static-indicator";
export declare const ACTION_BUILD_OK = "build-ok";
export declare const ACTION_BUILD_ERROR = "build-error";
export declare const ACTION_BEFORE_REFRESH = "before-fast-refresh";
export declare const ACTION_REFRESH = "fast-refresh";
export declare const ACTION_VERSION_INFO = "version-info";
export declare const ACTION_UNHANDLED_ERROR = "unhandled-error";
export declare const ACTION_UNHANDLED_REJECTION = "unhandled-rejection";
export declare const ACTION_DEBUG_INFO = "debug-info";
export declare const ACTION_DEV_INDICATOR = "dev-indicator";
export declare const ACTION_ERROR_OVERLAY_OPEN = "error-overlay-open";
export declare const ACTION_ERROR_OVERLAY_CLOSE = "error-overlay-close";
export declare const ACTION_ERROR_OVERLAY_TOGGLE = "error-overlay-toggle";
export declare const ACTION_BUILDING_INDICATOR_SHOW = "building-indicator-show";
export declare const ACTION_BUILDING_INDICATOR_HIDE = "building-indicator-hide";
export declare const ACTION_RENDERING_INDICATOR_SHOW = "rendering-indicator-show";
export declare const ACTION_RENDERING_INDICATOR_HIDE = "rendering-indicator-hide";
export declare const ACTION_DEVTOOLS_PANEL_OPEN = "devtools-panel-open";
export declare const ACTION_DEVTOOLS_PANEL_CLOSE = "devtools-panel-close";
export declare const ACTION_DEVTOOLS_PANEL_TOGGLE = "devtools-panel-toggle";
export declare const ACTION_DEVTOOLS_POSITION = "devtools-position";
export declare const ACTION_DEVTOOLS_SCALE = "devtools-scale";
export declare const ACTION_RESTART_SERVER_BUTTON = "restart-server-button";
export declare const STORAGE_KEY_THEME = "__nextjs-dev-tools-theme";
export declare const STORAGE_KEY_POSITION = "__nextjs-dev-tools-position";
export declare const STORAGE_KEY_SCALE = "__nextjs-dev-tools-scale";
export declare const STORAGE_KEY_ACTIVE_TAB = "__nextjs-devtools-active-tab";
export declare const ACTION_DEVTOOL_UPDATE_ROUTE_STATE = "segment-explorer-update-route-state";
interface StaticIndicatorAction {
    type: typeof ACTION_STATIC_INDICATOR;
    staticIndicator: boolean;
}
interface BuildOkAction {
    type: typeof ACTION_BUILD_OK;
}
interface BuildErrorAction {
    type: typeof ACTION_BUILD_ERROR;
    message: string;
}
interface BeforeFastRefreshAction {
    type: typeof ACTION_BEFORE_REFRESH;
}
interface FastRefreshAction {
    type: typeof ACTION_REFRESH;
}
export interface UnhandledErrorAction {
    type: typeof ACTION_UNHANDLED_ERROR;
    reason: Error;
}
export interface UnhandledRejectionAction {
    type: typeof ACTION_UNHANDLED_REJECTION;
    reason: Error;
}
export interface DebugInfoAction {
    type: typeof ACTION_DEBUG_INFO;
    debugInfo: any;
}
interface VersionInfoAction {
    type: typeof ACTION_VERSION_INFO;
    versionInfo: VersionInfo;
}
interface DevIndicatorAction {
    type: typeof ACTION_DEV_INDICATOR;
    devIndicator: DevIndicatorServerState;
}
export interface ErrorOverlayOpenAction {
    type: typeof ACTION_ERROR_OVERLAY_OPEN;
}
export interface ErrorOverlayCloseAction {
    type: typeof ACTION_ERROR_OVERLAY_CLOSE;
}
export interface ErrorOverlayToggleAction {
    type: typeof ACTION_ERROR_OVERLAY_TOGGLE;
}
export interface BuildingIndicatorShowAction {
    type: typeof ACTION_BUILDING_INDICATOR_SHOW;
}
export interface BuildingIndicatorHideAction {
    type: typeof ACTION_BUILDING_INDICATOR_HIDE;
}
export interface RenderingIndicatorShowAction {
    type: typeof ACTION_RENDERING_INDICATOR_SHOW;
}
export interface RenderingIndicatorHideAction {
    type: typeof ACTION_RENDERING_INDICATOR_HIDE;
}
export interface DevToolsPanelOpenAction {
    type: typeof ACTION_DEVTOOLS_PANEL_OPEN;
}
export interface DevToolsPanelCloseAction {
    type: typeof ACTION_DEVTOOLS_PANEL_CLOSE;
}
export interface DevToolsPanelToggleAction {
    type: typeof ACTION_DEVTOOLS_PANEL_TOGGLE;
}
export interface DevToolsIndicatorPositionAction {
    type: typeof ACTION_DEVTOOLS_POSITION;
    devToolsPosition: Corners;
}
export interface DevToolsScaleAction {
    type: typeof ACTION_DEVTOOLS_SCALE;
    scale: number;
}
export interface DevToolUpdateRouteStateAction {
    type: typeof ACTION_DEVTOOL_UPDATE_ROUTE_STATE;
    page: string;
}
export interface RestartServerButtonAction {
    type: typeof ACTION_RESTART_SERVER_BUTTON;
    showRestartServerButton: boolean;
}
export type DispatcherEvent = BuildOkAction | BuildErrorAction | BeforeFastRefreshAction | FastRefreshAction | UnhandledErrorAction | UnhandledRejectionAction | VersionInfoAction | StaticIndicatorAction | DebugInfoAction | DevIndicatorAction | ErrorOverlayOpenAction | ErrorOverlayCloseAction | ErrorOverlayToggleAction | BuildingIndicatorShowAction | BuildingIndicatorHideAction | RenderingIndicatorShowAction | RenderingIndicatorHideAction | DevToolsPanelOpenAction | DevToolsPanelCloseAction | DevToolsPanelToggleAction | DevToolsIndicatorPositionAction | DevToolsScaleAction | DevToolUpdateRouteStateAction | RestartServerButtonAction;
export declare const INITIAL_OVERLAY_STATE: Omit<OverlayState, 'isErrorOverlayOpen' | 'routerType'>;
export declare function useErrorOverlayReducer(routerType: 'pages' | 'app', getComponentStack: (error: Error) => string | undefined, getOwnerStack: (error: Error) => string | null | undefined, isRecoverableError: (error: Error) => boolean): [OverlayState & {
    routerType: "pages" | "app";
}, import("react").ActionDispatch<[action: DispatcherEvent]>];
export {};

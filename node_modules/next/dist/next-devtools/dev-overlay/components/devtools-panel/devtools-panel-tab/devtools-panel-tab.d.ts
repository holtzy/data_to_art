import type { DevToolsPanelTabType } from '../devtools-panel';
import type { Corners, OverlayState } from '../../../shared';
import type { DebugInfo } from '../../../../shared/types';
import type { ReadyRuntimeError } from '../../../utils/get-error-by-type';
import type { HydrationErrorState } from '../../../../shared/hydration-error';
export declare function DevToolsPanelTab({ activeTab, devToolsPosition, scale, routerType, handlePositionChange, handleScaleChange, debugInfo, runtimeErrors, getSquashedHydrationErrorDetails, buildError, page, }: {
    activeTab: DevToolsPanelTabType;
    devToolsPosition: Corners;
    routerType: 'app' | 'pages';
    scale: number;
    handlePositionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleScaleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    debugInfo: DebugInfo;
    runtimeErrors: ReadyRuntimeError[];
    getSquashedHydrationErrorDetails: (error: Error) => HydrationErrorState | null;
    buildError: OverlayState['buildError'];
    page: string;
}): import("react/jsx-runtime").JSX.Element | null;

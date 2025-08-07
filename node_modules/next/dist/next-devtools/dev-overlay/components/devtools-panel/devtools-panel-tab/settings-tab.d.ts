import type { Corners } from '../../../shared';
export declare function SettingsTab({ devToolsPosition, scale, handlePositionChange, handleScaleChange, }: {
    devToolsPosition: Corners;
    scale: number;
    handlePositionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleScaleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare const DEVTOOLS_PANEL_TAB_SETTINGS_STYLES: string;

import { NEXT_DEV_TOOLS_SCALE } from '../../../../shared';
declare const INDICATOR_POSITION: "top-left" | "top-right" | "bottom-left" | "bottom-right";
export declare const STORAGE_KEY_HIDE_SHORTCUT = "__nextjs_hide_shortcut";
export type DevToolsIndicatorPosition = typeof INDICATOR_POSITION;
export declare function getInitialPosition(): "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type DevToolsScale = (typeof NEXT_DEV_TOOLS_SCALE)[keyof typeof NEXT_DEV_TOOLS_SCALE];
export declare function useDevToolsScale(): [
    DevToolsScale,
    (value: DevToolsScale) => void
];
export declare function getInitialTheme(): "dark" | "light" | "system";
export declare function getInitialHideShortcut(): string | null;
export declare function useHideShortcutStorage(): [
    string | null,
    (value: string | null) => void
];
export {};

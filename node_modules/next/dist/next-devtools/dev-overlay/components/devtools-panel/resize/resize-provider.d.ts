import { type RefObject } from 'react';
import type { Corners } from '../../../shared';
export type ResizeDirection = 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface ResizeContextValue {
    resizeRef: RefObject<HTMLElement | null>;
    minWidth: number;
    minHeight: number;
    devToolsPosition: Corners;
    draggingDirection: ResizeDirection | null;
    setDraggingDirection: (direction: ResizeDirection | null) => void;
}
interface ResizeProviderProps {
    value: {
        resizeRef: RefObject<HTMLElement | null>;
        minWidth?: number;
        minHeight?: number;
        devToolsPosition: Corners;
    };
    children: React.ReactNode;
}
export declare const ResizeProvider: ({ value, children }: ResizeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useResize: () => ResizeContextValue;
export {};

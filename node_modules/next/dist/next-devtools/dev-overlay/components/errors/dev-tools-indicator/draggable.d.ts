import type { Corners } from '../../../shared';
interface Point {
    x: number;
    y: number;
}
interface Corner {
    corner: Corners;
    translation: Point;
}
export declare function Draggable({ children, padding, position: currentCorner, setPosition: setCurrentCorner, onDragStart, dragHandleSelector, disableDrag, ...props }: {
    children: React.ReactElement;
    position: Corners;
    padding: number;
    setPosition: (position: Corners) => void;
    onDragStart?: () => void;
    dragHandleSelector?: string;
    disableDrag?: boolean;
}): import("react/jsx-runtime").JSX.Element;
interface UseDragOptions {
    disabled: boolean;
    onDragStart?: () => void;
    onDrag?: (translation: Point) => void;
    onDragEnd?: (translation: Point, velocity: Point) => void;
    onAnimationEnd?: (corner: Corner) => void;
    threshold: number;
    dragHandleSelector?: string;
}
export declare function useDrag(options: UseDragOptions): {
    ref: import("react").RefObject<HTMLDivElement | null>;
    onPointerDown: (e: React.PointerEvent) => void;
    animate: (corner: Corner) => void;
};
export {};

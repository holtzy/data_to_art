import type { OriginalStackFrame } from '../../../../shared/stack-frame';
interface CallStackProps {
    frames: OriginalStackFrame[];
    dialogResizerRef: React.RefObject<HTMLDivElement | null>;
}
export declare function ErrorOverlayCallStack({ frames, dialogResizerRef, }: CallStackProps): import("react/jsx-runtime").JSX.Element;
export {};

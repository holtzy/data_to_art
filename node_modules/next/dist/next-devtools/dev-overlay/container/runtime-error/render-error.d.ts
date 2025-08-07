import type { OverlayState } from '../../shared';
import type { OverlayDispatch } from '../../shared';
import { type ReadyRuntimeError } from '../../utils/get-error-by-type';
import type { StackFrame } from 'next/dist/compiled/stacktrace-parser';
import type { ComponentStackFrame } from '../../utils/parse-component-stack';
export type SupportedErrorEvent = {
    id: number;
    error: Error;
    frames: StackFrame[];
    componentStackFrames?: ComponentStackFrame[];
    type: 'runtime' | 'recoverable' | 'console';
};
type Props = {
    children: (params: {
        runtimeErrors: ReadyRuntimeError[];
        totalErrorCount: number;
    }) => React.ReactNode;
    state: OverlayState;
    isAppDir: boolean;
    dispatch: OverlayDispatch;
};
export declare const RenderError: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};

import type { SupportedErrorEvent } from '../container/runtime-error/render-error';
import type { OriginalStackFrame } from '../../shared/stack-frame';
import type { ComponentStackFrame } from './parse-component-stack';
export type ReadyRuntimeError = {
    id: number;
    runtime: true;
    error: Error & {
        environmentName?: string;
    };
    frames: OriginalStackFrame[] | (() => Promise<OriginalStackFrame[]>);
    componentStackFrames?: ComponentStackFrame[];
    type: 'runtime' | 'console' | 'recoverable';
};
export declare const useFrames: (error: ReadyRuntimeError) => OriginalStackFrame[];
export declare function getErrorByType(event: SupportedErrorEvent, isAppDir: boolean): Promise<ReadyRuntimeError>;

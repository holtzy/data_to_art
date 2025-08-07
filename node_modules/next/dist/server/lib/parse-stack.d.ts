import type { StackFrame } from 'next/dist/compiled/stacktrace-parser';
export declare function parseStack(stack: string, distDir?: string | undefined): StackFrame[];

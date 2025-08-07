import './segment-boundary-trigger.css';
import type { SegmentNodeState } from '../../../userspace/app/segment-explorer-node';
export declare function SegmentBoundaryTrigger({ nodeState, boundaries, }: {
    nodeState: SegmentNodeState;
    boundaries: Record<'not-found' | 'loading' | 'error', string | null>;
}): import("react/jsx-runtime").JSX.Element;

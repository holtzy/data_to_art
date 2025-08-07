import type { ReactNode } from 'react';
export declare const SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = "NEXT_DEVTOOLS_SIMULATED_ERROR";
export type SegmentNodeState = {
    type: string;
    pagePath: string;
    boundaryType: string | null;
    setBoundaryType: (type: 'error' | 'not-found' | 'loading' | null) => void;
};
export declare function SegmentViewStateNode({ page }: {
    page: string;
}): null;
export declare function SegmentBoundaryTriggerNode(): import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | null;
export declare function SegmentViewNode({ type, pagePath, children, }: {
    type: string;
    pagePath: string;
    children?: ReactNode;
}): React.ReactNode;
export declare function SegmentStateProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useSegmentState(): {
    boundaryType: "not-found" | "error" | "loading" | null;
    setBoundaryType: (type: "not-found" | "error" | "loading" | null) => void;
};

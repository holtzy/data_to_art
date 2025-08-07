import type { DevToolsScale } from '../errors/dev-tools-indicator/dev-tools-info/preferences';
interface Props extends React.ComponentProps<'button'> {
    issueCount: number;
    isDevBuilding: boolean;
    isDevRendering: boolean;
    isBuildError: boolean;
    onTriggerClick: () => void;
    toggleErrorOverlay: () => void;
    scale: DevToolsScale;
}
export declare function NextLogo({ disabled, issueCount, isDevBuilding, isDevRendering, isBuildError, onTriggerClick, toggleErrorOverlay, scale, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};

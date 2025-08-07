import * as React from 'react';
export declare function CopyButton({ actionLabel, successLabel, content, icon, disabled, ...props }: React.HTMLProps<HTMLButtonElement> & {
    actionLabel: string;
    successLabel: string;
    content: string;
    icon?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const COPY_BUTTON_STYLES = "\n  .nextjs-data-copy-button {\n    color: inherit;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n  .nextjs-data-copy-button:disabled {\n    background-color: var(--color-gray-100);\n    cursor: not-allowed;\n  }\n  .nextjs-data-copy-button--initial:hover:not(:disabled) {\n    cursor: pointer;\n  }\n  .nextjs-data-copy-button--error:not(:disabled),\n  .nextjs-data-copy-button--error:hover:not(:disabled) {\n    color: var(--color-ansi-red);\n  }\n  .nextjs-data-copy-button--success:not(:disabled) {\n    color: var(--color-ansi-green);\n  }\n";

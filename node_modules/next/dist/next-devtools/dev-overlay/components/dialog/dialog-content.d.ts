import * as React from 'react';
export type DialogContentProps = {
    children?: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const DialogContent: React.FC<DialogContentProps>;
export { DialogContent };

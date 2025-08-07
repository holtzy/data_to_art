export declare function escapeApplescriptStringFragment(input: string): string;
export declare function launchEditor(fileName: string, lineNumber: number, colNumber: number): void;
export declare function openFileInEditor(filePath: string, line: number, col: number): Promise<{
    found: boolean;
    error: Error | null;
}>;

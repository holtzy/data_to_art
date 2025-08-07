export const BUILTIN_PREFIX = '__next_builtin__';
export function normalizeConventionFilePath(projectDir, conventionPath) {
    const cwd = process.env.NEXT_RUNTIME === 'edge' ? '' : process.cwd();
    const nextInternalPrefixRegex = /^(.*[\\/])?next[\\/]dist[\\/]client[\\/]components[\\/]builtin[\\/]/;
    let relativePath = (conventionPath || '')// remove turbopack [project] prefix
    .replace(/^\[project\][\\/]/, '')// remove the project root from the path
    .replace(projectDir, '')// remove cwd prefix
    .replace(cwd, '')// remove /(src/)?app/ dir prefix
    .replace(/^([\\/])*(src[\\/])?app[\\/]/, '');
    // If it's internal file only keep the filename, strip nextjs internal prefix
    if (nextInternalPrefixRegex.test(relativePath)) {
        relativePath = relativePath.replace(nextInternalPrefixRegex, '');
        // Add a special prefix to let segment explorer know it's a built-in component
        relativePath = `${BUILTIN_PREFIX}${relativePath}`;
    }
    return relativePath;
}
export const BOUNDARY_SUFFIX = '@boundary';
export function normalizeBoundaryFilename(filename) {
    return filename.replace(new RegExp(`^${BUILTIN_PREFIX}`), '').replace(new RegExp(`${BOUNDARY_SUFFIX}$`), '');
}
export const BOUNDARY_PREFIX = 'boundary:';
export function isBoundaryFile(fileType) {
    return fileType.startsWith(BOUNDARY_PREFIX);
}
export function getBoundaryOriginFileType(fileType) {
    return fileType.replace(BOUNDARY_PREFIX, '');
}
export function getConventionPathByType(tree, dir, conventionType) {
    const modules = tree[2];
    const conventionPath = modules[conventionType] ? modules[conventionType][1] : undefined;
    if (conventionPath) {
        return normalizeConventionFilePath(dir, conventionPath);
    }
    return undefined;
}

//# sourceMappingURL=segment-explorer-path.js.map
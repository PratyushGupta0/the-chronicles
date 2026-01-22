export function getAssetPath(path: string): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // On the client, we can check the window location to see if we are in a subpath
    // This is helpful if NODE_ENV is not set correctly in the build environment
    if (typeof window !== 'undefined') {
        const isSubpath = window.location.pathname.startsWith('/the-chronicles');
        if (isSubpath && !normalizedPath.startsWith('/the-chronicles')) {
            return `/the-chronicles${normalizedPath}`;
        }
    }

    // Default to handling via process.env for SSR or if window checks fail
    const basePath = process.env.NODE_ENV === 'production' ? '/the-chronicles' : '';
    if (basePath && !normalizedPath.startsWith(basePath)) {
        return `${basePath}${normalizedPath}`;
    }

    return normalizedPath;
}

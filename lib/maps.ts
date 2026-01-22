import { getAllContent, getContentBySlug, getContentSlugs, ContentItem } from './content';

export interface MapEntry {
    slug: string;
    title: string;
    description: string;
    order: number;
    content: string;
}

function mapContentToMap(item: ContentItem): MapEntry {
    return {
        slug: item.slug,
        title: item.metadata.title || "Untitled Map",
        description: item.metadata.description || "",
        order: item.metadata.order || 0,
        content: item.content,
    };
}

export function getMapSlugs() {
    return getContentSlugs('maps');
}

export function getMapBySlug(slug: string): MapEntry | null {
    const item = getContentBySlug('maps', slug);
    if (!item) return null;
    return mapContentToMap(item);
}

export function getAllMaps(): MapEntry[] {
    const items = getAllContent('maps');
    return items.map(mapContentToMap);
}

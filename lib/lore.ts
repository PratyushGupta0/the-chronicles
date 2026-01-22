import { getAllContent, getContentBySlug, getContentSlugs, ContentItem } from './content';

export interface LoreEntry {
    slug: string;
    title: string;
    description: string;
    image?: string;
    order: number;
    content: string;
}

function mapContentToLore(item: ContentItem): LoreEntry {
    return {
        slug: item.slug,
        title: item.metadata.title || "Untitled Entry",
        description: item.metadata.description || "",
        image: item.metadata.image,
        order: item.metadata.order || 0,
        content: item.content,
    };
}

export function getLoreSlugs() {
    return getContentSlugs('lore');
}

export function getLoreBySlug(slug: string): LoreEntry | null {
    const item = getContentBySlug('lore', slug);
    if (!item) return null;
    return mapContentToLore(item);
}

export function getAllLore(): LoreEntry[] {
    const items = getAllContent('lore');
    return items.map(mapContentToLore);
}

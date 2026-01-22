import { getAllContent, getContentBySlug, getContentSlugs, ContentItem } from './content';

export interface Chapter {
    slug: string;
    title: string;
    chapter: number;
    description: string;
    content: string;
}

function mapContentToChapter(item: ContentItem): Chapter {
    return {
        slug: item.slug,
        title: item.metadata.title || "Untitled Chapter",
        chapter: item.metadata.chapter || 0,
        description: item.metadata.description || "",
        content: item.content,
    };
}

export function getChapterSlugs() {
    return getContentSlugs('chapters');
}

export function getChapterBySlug(slug: string): Chapter | null {
    const item = getContentBySlug('chapters', slug);
    if (!item) return null;
    return mapContentToChapter(item);
}

export function getAllChapters(): Chapter[] {
    const items = getAllContent('chapters', (a, b) =>
        (a.metadata.chapter || 0) - (b.metadata.chapter || 0)
    );
    return items.map(mapContentToChapter);
}

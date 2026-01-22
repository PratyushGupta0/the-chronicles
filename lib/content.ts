import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentMetadata {
    title: string;
    description?: string;
    order?: number;
    [key: string]: any;
}

export interface ContentItem<T = ContentMetadata> {
    slug: string;
    metadata: T;
    content: string;
}

export function getContentSlugs(collection: string) {
    const contentDirectory = path.join(process.cwd(), 'content', collection);
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getContentBySlug<T = ContentMetadata>(collection: string, slug: string): ContentItem<T> | null {
    const contentDirectory = path.join(process.cwd(), 'content', collection);
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    try {
        if (!fs.existsSync(fullPath)) return null;
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            metadata: data as T,
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllContent<T extends ContentMetadata = ContentMetadata>(
    collection: string,
    sortFn?: (a: ContentItem<T>, b: ContentItem<T>) => number
): ContentItem<T>[] {
    const slugs = getContentSlugs(collection);
    const items = slugs
        .map((slug) => getContentBySlug<T>(collection, slug))
        .filter((item): item is ContentItem<T> => item !== null);

    if (sortFn) {
        return items.sort(sortFn);
    }

    // Default sort by 'order' metadata if it exists, otherwise alpha by title
    return items.sort((a, b) => {
        const orderA = a.metadata.order;
        const orderB = b.metadata.order;

        if (orderA !== undefined && orderB !== undefined) {
            return orderA - orderB;
        }
        return (a.metadata.title || "").localeCompare(b.metadata.title || "");
    });
}

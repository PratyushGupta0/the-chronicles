import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/chapters');

export interface Chapter {
    slug: string;
    title: string;
    chapter: number;
    description: string;
    content: string;
}

export function getChapterSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getChapterBySlug(slug: string): Chapter | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            title: data.title,
            chapter: data.chapter,
            description: data.description,
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllChapters(): Chapter[] {
    const slugs = getChapterSlugs();
    const chapters = slugs
        .map((slug) => getChapterBySlug(slug))
        .filter((chapter): chapter is Chapter => chapter !== null)
        .sort((a, b) => a.chapter - b.chapter);

    return chapters;
}

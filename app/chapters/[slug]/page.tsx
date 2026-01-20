import { getChapterBySlug, getAllChapters } from '@/lib/chapters';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import FlourishDivider from '@/components/ui/FlourishDivider';

import ReaderWrapper from '@/components/chapter/ReaderWrapper';

// Components available in MDX files
const components = {
    // Add custom components here if needed in the future
};

export async function generateStaticParams() {
    const chapters = getAllChapters();
    return chapters.map((chapter) => ({
        slug: chapter.slug,
    }));
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const chapter = getChapterBySlug(resolvedParams.slug);

    if (!chapter) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12">
            {/* Chapter Navigation / Header */}
            <div className="mb-16 text-center">
                <span className="block text-sm font-bold uppercase tracking-[0.2em] text-amber-900/60 mb-4">
                    Chapter {chapter.chapter}
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-950 mb-8 leading-tight">
                    {chapter.title}
                </h1>
                <div className="h-1 w-24 bg-amber-950/40 mx-auto rounded-full"></div>
            </div>

            {/* Main Content with Reader Controls */}
            <ReaderWrapper>
                <div className="prose prose-slate max-w-none prose-p:font-inherit prose-headings:font-serif prose-blockquote:border-amber-900/40 prose-blockquote:bg-amber-50/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg">
                    <MDXRemote source={chapter.content} components={components} />
                </div>
            </ReaderWrapper>

            {/* Footer Navigation */}
            <FlourishDivider className="my-24 opacity-40" />

            <div className="flex justify-between font-serif text-lg font-medium text-amber-900/80">
                <Link href="/chapters" className="hover:text-amber-950 hover:underline decoration-1 underline-offset-4">
                    ← Table of Contents
                </Link>
                {/* We could add Next/Prev logic here later */}
            </div>
        </article>
    );
}

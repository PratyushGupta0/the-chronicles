import { getLoreBySlug, getAllLore } from '@/lib/lore';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import FlourishDivider from '@/components/ui/FlourishDivider';
import ReaderWrapper from '@/components/chapter/ReaderWrapper';

const components = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props} className="mb-10 leading-relaxed text-slate-900" />
    ),
};

export async function generateStaticParams() {
    const lore = getAllLore();
    return lore.map((entry) => ({
        slug: entry.slug,
    }));
}

export default async function LorePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const entry = getLoreBySlug(slug);

    if (!entry) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12 px-4 md:px-0">
            <div className="mb-16 text-center">
                <span className="block text-sm font-bold uppercase tracking-[0.2em] text-amber-900/60 mb-4">
                    Lore Entry
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-950 mb-8 leading-tight">
                    {entry.title}
                </h1>
                <div className="h-1 w-24 bg-amber-950/40 mx-auto rounded-full"></div>
            </div>

            <ReaderWrapper>
                <MDXRemote source={entry.content} components={components} />
            </ReaderWrapper>

            <FlourishDivider className="my-24 opacity-40" />

            <div className="flex justify-between font-serif text-lg font-medium text-amber-900/80">
                <Link href="/lore" className="hover:text-amber-950 hover:underline decoration-1 underline-offset-4">
                    ← Back to Lore
                </Link>
            </div>
        </article>
    );
}

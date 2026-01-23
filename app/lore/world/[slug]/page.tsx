import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getWorldEntity } from '@/lib/world';
import { getAssetPath } from '@/lib/utils';
import FlourishDivider from '@/components/ui/FlourishDivider';
import ArchivalInfobox from '@/components/ui/ArchivalInfobox';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function WorldEntityPage({ params }: PageProps) {
    const { slug } = await params;
    const entity = getWorldEntity(slug);

    if (!entity) {
        notFound();
    }

    return (
        <main className="max-w-5xl mx-auto py-12 px-4 md:px-8 animate-in fade-in duration-700">
            {/* The Vellum Sheet - With organic border and soft transition */}
            <div className="relative group">
                {/* Decorative Outer Shadow/Glow to blend with parchment */}
                <div className="absolute -inset-1 bg-amber-900/5 blur-xl rounded-[2.5rem] pointer-events-none"></div>

                <div className="bg-white/75 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)] rounded-[2rem] border-2 border-amber-900/10 overflow-hidden relative z-10">
                    {/* Inner Decorative Border */}
                    <div className="absolute inset-2 border border-amber-900/5 rounded-[1.7rem] pointer-events-none"></div>

                    {/* Heraldry / Flag Section - Full width within the sheet */}
                    <div className="relative w-full aspect-[21/9] border-b border-amber-900/10 shadow-inner bg-black flex items-center justify-center group">
                        <Image
                            src={getAssetPath(entity.bannerImage)}
                            alt={`${entity.title} Banner`}
                            fill
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
                    </div>

                    <div className="py-16 px-8 md:px-20">
                        {/* Title & Motto Section */}
                        <div className="text-center mb-16 px-4">
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-950 mb-6 tracking-tight">
                                {entity.title}
                            </h1>

                            {entity.motto && (
                                <div className="relative inline-block px-12 py-3">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-amber-900/30"></div>
                                    <p className="font-serif text-2xl md:text-3xl italic text-amber-900 font-medium">
                                        "{entity.motto}"
                                    </p>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-amber-900/30"></div>
                                </div>
                            )}
                        </div>

                        <FlourishDivider />

                        {/* Content Container */}
                        <div className="mt-16 relative">
                            {/* Archival Infobox */}
                            <ArchivalInfobox stats={entity.stats} title={entity.title} />

                            {/* Standard Template Sections */}
                            <div className="space-y-16 pb-24">
                                {Object.entries({
                                    overview: "Overview",
                                    etymology: "Etymology",
                                    history: "History",
                                    geography: "Geography",
                                    government: "Government and Politics",
                                    economy: "Economy",
                                    demographics: "Demographics",
                                    culture: "Culture",
                                    military: "Military"
                                }).map(([key, title]) => {
                                    const content = entity.sections[key as keyof typeof entity.sections];
                                    if (!content || content.includes("Lorem ipsum")) return null;

                                    return (
                                        <section id={key} key={key} className="prose prose-slate prose-xl max-w-none">
                                            <h2 className="font-serif font-bold text-4xl text-slate-950 border-b border-amber-900/20 pb-4 mb-8">
                                                {title}
                                            </h2>
                                            {content.split('\n\n').filter(p => p.trim()).map((block, i) => {
                                                const trimmed = block.trim();

                                                // Handle Subheadings
                                                if (trimmed.startsWith('### ')) {
                                                    return (
                                                        <h3 key={i} className="font-serif font-bold text-2xl text-slate-900 mt-12 mb-6">
                                                            {trimmed.replace('### ', '')}
                                                        </h3>
                                                    );
                                                }

                                                // Handle Lists
                                                if (trimmed.includes('* ')) {
                                                    const lines = trimmed.split('\n').filter(l => l.trim());
                                                    return (
                                                        <ul key={i} className="space-y-4 my-8 list-none">
                                                            {lines.map((line, j) => {
                                                                const itemBlock = line.trim().replace(/^\* \s*/, '');
                                                                const [rawLabel, ...rest] = itemBlock.split(': ');
                                                                const label = rawLabel.replace(/^\*\*|\*\*$/g, '');
                                                                return (
                                                                    <li key={j} className="flex items-baseline gap-3 font-serif text-lg text-slate-900">
                                                                        <span className="text-amber-900/40 text-sm italic">❦</span>
                                                                        <span>
                                                                            <strong className="text-slate-950 font-bold">{label}</strong>
                                                                            {rest.length > 0 && `: ${rest.join(': ')}`}
                                                                        </span>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    );
                                                }

                                                // Standard Paragraph
                                                const isFirstInOverview = key === 'overview' && i === 0;
                                                return (
                                                    <p
                                                        key={i}
                                                        className={`font-serif text-lg text-slate-900 leading-relaxed ${isFirstInOverview
                                                            ? 'indent-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-amber-950'
                                                            : 'mt-6'
                                                            }`}
                                                    >
                                                        {trimmed}
                                                    </p>
                                                );
                                            })}
                                        </section>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const { getAllWorldEntities } = await import('@/lib/world');
    const entities = getAllWorldEntities();
    return entities.map((entity) => ({
        slug: entity.slug,
    }));
}

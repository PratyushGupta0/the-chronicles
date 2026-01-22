import Link from 'next/link';
import Image from 'next/image';

interface CardItem {
    slug: string;
    title: string;
    description: string;
    image?: string;
    href?: string;
}

interface DiscoveryGridProps {
    title: string;
    items: CardItem[];
    tagLabel?: string;
}

export default function DiscoveryGrid({ title, items, tagLabel = 'Discovery' }: DiscoveryGridProps) {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-950 mb-4 px-4">
                    {title}
                </h1>
                <div className="h-1.5 w-32 bg-amber-900/20 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
                {items.map((item) => (
                    <Link
                        key={item.slug}
                        href={item.href || `/lore/${item.slug}`}
                        className="group flex flex-col bg-white/40 border border-amber-900/10 rounded-2xl overflow-hidden hover:bg-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1.5rem)] lg:max-w-md xl:max-w-lg"
                    >
                        {/* Image Placeholder Container */}
                        <div className="relative h-72 md:h-80 w-full overflow-hidden border-b border-amber-900/10">
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                    <span className="text-4xl opacity-20 text-slate-900">❦</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="p-8 md:p-10 flex-1 flex flex-col">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-900/50">
                                    {tagLabel}
                                </span>
                                <span className="h-px w-8 bg-amber-900/20"></span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-5 group-hover:text-amber-950 transition-colors">
                                {item.title}
                            </h2>

                            <p className="font-serif text-lg md:text-xl text-slate-700 italic leading-relaxed mb-8 line-clamp-4">
                                {item.description}
                            </p>

                            <div className="mt-auto flex items-center text-amber-900 font-bold text-base uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                                Explore Chronicle <span className="ml-3">→</span>
                            </div>
                        </div>
                    </Link>
                ))}

                {items.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-slate-500 italic font-serif text-2xl">
                            The archives are currently empty.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

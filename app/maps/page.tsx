import Link from 'next/link';
import { getAllMaps } from '@/lib/maps';

export default async function MapsIndex() {
    const maps = getAllMaps();

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
            <h1 className="text-5xl font-serif font-bold text-slate-950 mb-12 border-b-2 border-amber-900/10 pb-6 text-center md:text-left">
                Cartographic Records
            </h1>

            <div className="grid gap-8">
                {maps.map((map) => (
                    <Link
                        key={map.slug}
                        href={`/maps/${map.slug}`}
                        className="group block p-8 bg-white/40 border border-amber-900/10 rounded-xl hover:bg-white/60 hover:shadow-md transition-all"
                    >
                        <div className="flex items-baseline justify-between mb-2">
                            <span className="text-sm font-bold uppercase tracking-widest text-amber-900/60 group-hover:text-amber-800">
                                Map Entry
                            </span>
                            <span className="text-2xl font-serif text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                🗺️
                            </span>
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-950">
                            {map.title}
                        </h2>

                        <p className="font-serif text-lg text-slate-600 italic">
                            {map.description}
                        </p>
                    </Link>
                ))}

                {maps.length === 0 && (
                    <p className="text-slate-500 italic font-serif text-xl border-l-4 border-amber-900/20 pl-4 py-2">
                        No maps have been charted for this region yet.
                    </p>
                )}
            </div>
        </div>
    );
}

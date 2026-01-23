import { WorldEntity } from "@/lib/world";

interface ArchivalInfoboxProps {
    stats: WorldEntity['stats'];
    title: string;
}

export default function ArchivalInfobox({ stats, title }: ArchivalInfoboxProps) {
    const rows = [
        { label: "Capital", value: stats.capital },
        { label: "Ruler", value: stats.ruler },
        { label: "Government", value: stats.governmentType },
        { label: "Population", value: stats.population },
        { label: "Language", value: stats.primaryLanguage },
        { label: "Religion", value: stats.religion },
    ];

    return (
        <aside className="w-full lg:w-80 float-none lg:float-right lg:ml-12 mb-12 lg:mb-8 border-2 border-amber-900/20 bg-amber-50/50 backdrop-blur-sm shadow-xl p-1 rounded-sm rotate-1">
            <div className="border border-amber-900/10 p-6 flex flex-col items-center">
                <h3 className="font-serif font-extrabold text-2xl text-slate-900 mb-6 text-center border-b border-amber-900/20 pb-4 w-full tracking-tight">
                    {title}
                </h3>

                <div className="w-full space-y-4">
                    {rows.map((row) => (
                        <div key={row.label} className="flex flex-col border-b border-amber-900/5 pb-2 last:border-0">
                            <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-amber-900/60 font-bold mb-1">
                                {row.label}
                            </span>
                            <span className="font-serif text-lg text-slate-800 font-medium leading-tight">
                                {row.value}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-amber-900/10 w-full text-center">
                    <span className="font-serif text-[10px] italic text-slate-400">
                        By The Archivist • Vol. IV
                    </span>
                </div>
            </div>

            {/* Decorative "Paper" effect */}
            <div className="absolute -z-10 inset-0 -rotate-1 bg-amber-100/30 border border-amber-950/5 pointer-events-none"></div>
        </aside>
    );
}

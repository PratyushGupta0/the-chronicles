const WhoAmI = () => {
    return (
        <div className="mt-12 lg:mt-0 lg:h-full lg:min-h-[80vh]">
            <div className="bg-amber-50/60 p-12 md:p-16 rounded-3xl border border-amber-900/10 backdrop-blur-md shadow-lg sticky top-8 h-full flex flex-col justify-center">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-amber-950 border-b-2 border-amber-900/10 pb-8 mb-10">
                    Who Am I?
                </h3>

                {/* The Archivist Persona */}
                <div className="prose prose-slate prose-xl md:prose-2xl leading-relaxed mb-12">
                    <p className="font-serif text-slate-900 font-medium italic">
                        "I am an Archivist. I have spent my years travelling across our broken world with quill in hand. I have seen the good, the bad, and the ugly. The glorious, the great, the raw, the pure, the defiled, and I have written it all."
                    </p>
                </div>

                <div className="flex items-center justify-center space-x-4 opacity-50 mb-12">
                    <span className="text-3xl text-amber-950 font-serif">~ ❦ ~</span>
                </div>

                {/* The Author Persona */}
                <div className="bg-white/40 p-8 rounded-2xl border border-amber-900/5">
                    <p className="font-serif text-lg md:text-xl text-slate-800 leading-relaxed mb-4">
                        Hi, I am <span className="font-bold text-amber-950">Pratyush</span>.
                    </p>
                    <p className="font-sans text-base md:text-lg text-slate-700 mb-6">
                        I do Machine Learning as a <span className="font-mono text-xs bg-amber-100 px-1 py-0.5 rounded text-amber-900">$dayjob$</span>, but I enjoy world building and writing.
                    </p>
                    <a
                        href="mailto:pratyushgupta102@gmail.com"
                        className="inline-flex items-center text-amber-900 hover:text-amber-700 font-medium transition-colors border-b border-amber-900/20 hover:border-amber-900"
                    >
                        pratyushgupta102@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;

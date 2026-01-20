const HeroSection = () => {
    return (
        <div className="space-y-20 lg:pr-12 pt-12">
            {/* Header */}
            <div className="text-left">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-slate-950 mb-8 tracking-tighter leading-none">
                    The Chronicles
                </h1>
                <div className="h-2 w-48 bg-amber-950/60 rounded-full shadow-sm"></div>
            </div>

            {/* Intro Text */}
            <div className="space-y-10">
                <p className="font-serif text-3xl md:text-4xl italic text-slate-900 font-medium leading-normal">
                    An era of bloodshed. An era of upheaval, of betrayal, of politics, of war, and of discovery.
                </p>
                <p className="font-serif text-2xl text-slate-800 font-medium uppercase tracking-widest border-b-2 border-amber-900/10 pb-4 inline-block">
                    The Age of Iron & Gunpowder
                </p>
            </div>

            {/* Amethyst Section */}
            <div className="pt-8">
                <p className="text-3xl text-slate-900 font-serif mb-6">
                    And above it all...
                </p>
                <h2 className="text-5xl md:text-7xl font-bold font-serif text-indigo-950 drop-shadow-sm decoration-amber-900/30 underline-offset-8">
                    The Shadow of the <br />
                    <span className="text-purple-950/90">Black Amethyst of Arkarath</span>
                </h2>
            </div>
        </div>
    );
};

export default HeroSection;

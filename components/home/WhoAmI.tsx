const WhoAmI = () => {
    return (
        <div className="mt-12 lg:mt-0 lg:h-full lg:min-h-[80vh]">
            <div className="bg-amber-50/60 p-12 md:p-16 rounded-3xl border border-amber-900/10 backdrop-blur-md shadow-lg sticky top-8 h-full flex flex-col justify-center">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-amber-950 border-b-2 border-amber-900/10 pb-8 mb-10">
                    Who Am I?
                </h3>
                <div className="prose prose-slate prose-xl md:prose-2xl leading-relaxed">
                    <p className="font-serif text-slate-800 mb-8 font-medium">
                        I am the Archivist. I wander the ruins of the Old Empires, collecting the scraps of history before they turn to dust.
                    </p>
                    <p className="font-serif text-slate-800 font-medium">
                        This site is a catalog of the events that shaped our broken world—a testament to the heroes who fought, and the tyrants who fell.
                    </p>
                </div>
                <div className="pt-16 flex items-center space-x-4 opacity-70">
                    <span className="text-5xl text-amber-950 font-serif">❦</span>
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;

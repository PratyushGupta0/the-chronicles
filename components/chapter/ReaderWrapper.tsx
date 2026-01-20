'use client';

import { useState } from 'react';

interface ReaderWrapperProps {
    children: React.ReactNode;
}

export default function ReaderWrapper({ children }: ReaderWrapperProps) {
    const [fontSize, setFontSize] = useState(18);
    const [lineHeight, setLineHeight] = useState(1.8);
    const [fontFamily, setFontFamily] = useState<'serif' | 'sans' | 'mono'>('serif');

    const toggleFont = () => {
        if (fontFamily === 'serif') setFontFamily('sans');
        else if (fontFamily === 'sans') setFontFamily('mono');
        else setFontFamily('serif');
    };

    const getFontClass = () => {
        if (fontFamily === 'sans') return 'font-sans';
        if (fontFamily === 'mono') return 'font-mono';
        return 'font-serif';
    };

    return (
        <div className="relative min-h-screen pb-20">
            {/* Controls - Sticky Header */}
            <div className="sticky top-4 flex justify-end px-4 mb-8 z-50 pointer-events-none">
                <div className="bg-amber-50/90 border border-amber-900/10 backdrop-blur shadow-md rounded-full p-2 flex items-center gap-4 pointer-events-auto">
                    <button
                        onClick={toggleFont}
                        className="w-8 h-8 font-bold text-amber-950 hover:bg-amber-100 rounded-full transition-colors flex items-center justify-center font-serif"
                        title="Toggle Font Family"
                    >
                        {fontFamily === 'serif' && <span className="font-serif">Ag</span>}
                        {fontFamily === 'sans' && <span className="font-sans">Ag</span>}
                        {fontFamily === 'mono' && <span className="font-mono text-sm">Ag</span>}
                    </button>
                    <div className="w-px h-4 bg-amber-900/20"></div>
                    <button onClick={() => setFontSize(s => Math.max(14, s - 2))} className="w-8 h-8 font-bold text-amber-950 hover:bg-amber-100 rounded-full transition-colors flex items-center justify-center">
                        <span className="text-xs">A</span>
                    </button>
                    <button onClick={() => setFontSize(s => Math.min(32, s + 2))} className="w-8 h-8 font-bold text-amber-950 hover:bg-amber-100 rounded-full transition-colors flex items-center justify-center">
                        <span className="text-lg">A</span>
                    </button>
                </div>
            </div>

            {/* Content Container (The Page) */}
            <div
                className={`
            bg-white/20 backdrop-blur-md 
            p-8 md:p-16 md:py-20
            rounded-xl border border-amber-900/10 shadow-sm 
            mx-auto max-w-3xl 
            transition-all duration-200 ease-in-out 
            ${getFontClass()}
        `}
                style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: lineHeight
                }}
            >
                <div className="prose prose-slate max-w-none prose-p:mb-10 prose-p:indent-8 prose-headings:font-serif prose-headings:text-amber-950">
                    {children}
                </div>
            </div>
        </div>
    );
}

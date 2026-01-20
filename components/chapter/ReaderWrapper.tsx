'use client';

import { useState, useEffect } from 'react';

interface ReaderWrapperProps {
    children: React.ReactNode;
}

export default function ReaderWrapper({ children }: ReaderWrapperProps) {
    // Default font size 1.125rem (text-lg in tailwind approx)
    const [fontSize, setFontSize] = useState(18);
    const [lineHeight, setLineHeight] = useState(1.8);
    const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');

    // Persist settings if needed, but for now just state

    return (
        <div className="relative min-h-screen">
            {/* Sticky Reader Controls */}
            <div className="sticky top-4 z-50 flex justify-end px-4 mb-8 pointer-events-none">
                <div className="bg-amber-50/90 border border-amber-900/10 backdrop-blur shadow-sm rounded-full p-2 flex items-center gap-4 pointer-events-auto">

                    {/* Font Family Toggle */}
                    <button
                        onClick={() => setFontFamily(prev => prev === 'serif' ? 'sans' : 'serif')}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-900/10 text-amber-950 font-bold transition-colors text-sm"
                        title="Toggle Font Family"
                    >
                        {fontFamily === 'serif' ? 'Ag' : 'Ag'}
                    </button>

                    <div className="w-px h-4 bg-amber-900/20"></div>

                    {/* Decrease Size */}
                    <button
                        onClick={() => setFontSize(s => Math.max(14, s - 2))}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-900/10 text-amber-950 font-bold transition-colors"
                        title="Decrease Font Size"
                    >
                        A-
                    </button>

                    {/* Increase Size */}
                    <button
                        onClick={() => setFontSize(s => Math.min(32, s + 2))}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-900/10 text-amber-950 font-bold transition-colors text-lg"
                        title="Increase Font Size"
                    >
                        A+
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div
                className={`transition-all duration-200 ease-in-out ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}
                style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: lineHeight
                }}
            >
                {children}
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Chapter } from '@/lib/chapters';

interface MobileNavProps {
    chapters: Chapter[];
}

export default function MobileNav({ chapters }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const MENU_ITEMS = [
        {
            title: 'I. Introduction',
            href: '/',
            description: "General overview, author's notes, and project status.",
        },
        {
            title: 'II. The Book',
            href: '/chapters',
            items: chapters.map(chapter => ({
                label: chapter.title,
                href: `/chapters/${chapter.slug}`
            }))
        },
        {
            title: 'III. Lore',
            href: '/lore',
            items: [
                { label: 'The World', href: '/lore' },
            ]
        },
        {
            title: 'IV. Maps',
            href: '/maps',
            items: [
                { label: 'World Map', href: '/maps' },
            ]
        }
    ];

    return (
        <>
            {/* Mobile Header Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 bg-amber-50/80 backdrop-blur-md border border-amber-900/10 rounded-lg shadow-sm text-slate-800 hover:text-amber-900 transition-colors"
                    aria-label="Open Menu"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <aside
                className={`
          fixed top-0 left-0 bottom-0 z-50 w-72 bg-amber-50/95 backdrop-blur-md shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out md:hidden border-r border-amber-900/10
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="p-6 relative min-h-full flex flex-col">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 text-slate-500 hover:text-red-900 transition-colors"
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-center mb-8 mt-8">
                        <span className="text-4xl text-amber-950/40 font-serif">❦</span>
                    </div>

                    <h1 className="text-2xl font-serif font-bold mb-8 text-slate-900 text-center tracking-tight border-b border-amber-900/10 pb-6">
                        The Chronicles
                    </h1>

                    <nav className="flex-1 space-y-8">
                        {MENU_ITEMS.map((section) => (
                            <div key={section.title} className="group">
                                <Link
                                    href={section.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block font-serif text-lg font-bold text-slate-900 mb-2 hover:text-amber-800 transition-colors"
                                >
                                    {section.title}
                                </Link>

                                {section.items && (
                                    <ul className="mt-2 space-y-2 ml-2 pl-3 border-l border-amber-900/10">
                                        {section.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-1 font-serif text-slate-600 hover:text-amber-900 hover:italic text-base transition-all"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-12 pt-8 text-center opacity-40">
                        <p className="font-serif text-xs text-slate-900">Est. 2026</p>
                    </div>
                </div>
            </aside>
        </>
    );
}

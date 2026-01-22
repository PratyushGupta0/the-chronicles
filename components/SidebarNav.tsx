'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface MenuItem {
    title?: string;
    href: string;
    description?: string;
    items?: MenuItem[];
    label?: string; // Support for the older label field if necessary
}

interface SidebarNavProps {
    items: MenuItem[];
}

const NavItem = ({ item, depth = 0 }: { item: MenuItem; depth?: number }) => {
    // Normalizing item structure (matching label to title if needed)
    const title = item.title || item.label || 'Untitled';
    const [isExpanded, setIsExpanded] = useState(true);
    const hasItems = item.items && item.items.length > 0;

    const toggleSection = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(prev => !prev);
    };

    return (
        <div className={`${depth > 0 ? 'ml-1' : ''}`}>
            <div className="flex items-center group/item relative">
                {hasItems && (
                    <button
                        onClick={toggleSection}
                        className="p-1 -ml-6 mr-1 text-slate-500 hover:text-amber-950 transition-colors rounded-md hover:bg-amber-900/10"
                    >
                        {isExpanded ? (
                            <ChevronDown className="w-4 h-4" />
                        ) : (
                            <ChevronRight className="w-4 h-4" />
                        )}
                    </button>
                )}

                <Link
                    href={item.href}
                    className={`font-serif transition-colors block py-1 w-full ${depth === 0
                        ? 'text-lg font-extrabold text-slate-900 hover:text-amber-950'
                        : 'text-base font-semibold text-slate-800 hover:text-amber-900'
                        }`}
                >
                    {title}
                </Link>
            </div>

            {item.description && !hasItems && depth === 0 && (
                <p className="font-serif text-sm text-slate-600 italic leading-relaxed pl-1 border-l-2 border-amber-900/40 ml-1 mb-4">
                    {item.description}
                </p>
            )}

            {hasItems && isExpanded && (
                <ul className={`mt-1 space-y-1 ${depth === 0 ? 'border-l-2 border-amber-900/20 ml-1 pl-4 mb-6' : 'border-l border-amber-900/10 ml-1 pl-3'}`}>
                    {item.items!.map((subItem, idx) => (
                        <li key={`${subItem.href}-${idx}`}>
                            <NavItem item={subItem} depth={depth + 1} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function SidebarNav({ items }: SidebarNavProps) {
    return (
        <nav className="flex-1 space-y-8 px-2">
            {items.map((section) => (
                <NavItem key={section.title} item={section} />
            ))}
        </nav>
    );
}

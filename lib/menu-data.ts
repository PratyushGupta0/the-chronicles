import { getAllChapters } from './chapters';
import { getAllLore } from './lore';
import { getAllMaps } from './maps';

export interface MenuItem {
    title: string;
    href: string;
    description?: string;
    items?: MenuItem[];
}

export async function getMenuData(): Promise<MenuItem[]> {
    const chapters = await getAllChapters();
    const loreEntries = await getAllLore();
    const mapEntries = await getAllMaps();

    return [
        {
            title: 'I. Introduction',
            href: '/',
            description: "General overview, author's notes, and project status.",
        },
        {
            title: 'II. The Book',
            href: '/chapters',
            items: chapters.map(chapter => ({
                title: chapter.title,
                href: `/chapters/${chapter.slug}`
            }))
        },
        {
            title: 'III. Lore',
            href: '/lore',
            items: [
                {
                    title: 'The World',
                    href: '/lore/world',
                    items: [
                        { title: 'The Iron Pact', href: '/lore/world/iron-pact' },
                        { title: 'Ostravia', href: '/lore/world/ostravia' },
                        { title: 'The Elysian Empire', href: '/lore/world/elysian-empire' },
                        { title: 'Alba', href: '/lore/world/alba' },
                        { title: 'The Kiyo Shogunate', href: '/lore/world/kiyo-shogunate' },
                    ]
                },
                ...loreEntries.filter(e => e.slug !== 'world' && e.slug !== 'characters').map(entry => ({
                    title: entry.title,
                    href: `/lore/${entry.slug}`
                })),
                {
                    title: 'Character Profiles',
                    href: '/lore/characters',
                }
            ]
        },
        {
            title: 'IV. Maps',
            href: '/maps',
            items: mapEntries.map(entry => ({
                title: entry.title,
                href: `/maps/${entry.slug}`
            }))
        }
    ];
}

import Link from 'next/link';
import { getAllChapters } from '@/lib/chapters';
import { getAllLore } from '@/lib/lore';
import { getAllMaps } from '@/lib/maps';
import SidebarNav from './SidebarNav';

const Sidebar = async () => {
  const chapters = await getAllChapters();
  const loreEntries = await getAllLore();
  const mapEntries = await getAllMaps();

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
        label: entry.title,
        href: `/maps/${entry.slug}`
      }))
    }
  ];

  return (
    <aside className="w-72 h-screen p-8 fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col border-r-2 border-amber-900/10 bg-amber-50/30 backdrop-blur-[2px]">

      {/* Decorative top swirl or initial */}
      <div className="text-center mb-8">
        <span className="text-4xl text-amber-950/40 font-serif">❦</span>
      </div>

      <h1 className="text-2xl font-serif font-bold mb-12 text-slate-800 text-center tracking-tight border-b border-amber-900/10 pb-6 mx-4">
        The Chronicles
      </h1>

      <SidebarNav items={MENU_ITEMS} />

      {/* Footer / Copyright area style */}
      <div className="mt-auto pt-8 text-center opacity-40">
        <div className="w-12 h-px bg-slate-900 mx-auto mb-4"></div>
        <p className="font-serif text-xs text-slate-900">Est. 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;
import Link from 'next/link';
import { getAllChapters } from '@/lib/chapters';

const Sidebar = async () => {
  const chapters = getAllChapters();

  const MENU_ITEMS = [
    {
      title: 'I. Introduction',
      href: '/',
      description: "General overview, author's notes, and project status.",
    },
    {
      title: 'II. The Book',
      href: '/chapters',
      // Dynamically load chapters here
      items: chapters.map(chapter => ({
        label: chapter.title,
        href: `/chapters/${chapter.slug}`
      }))
    },
    {
      title: 'III. Maps',
      href: '/maps',
      items: [
        { label: 'World Map', href: '/maps/world' },
      ]
    }
  ];

  return (
    <aside className="w-72 h-screen p-8 fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col border-r-2 border-amber-900/10 bg-amber-50/30 backdrop-blur-[2px]">

      {/* Decorative top swirl or initial */}
      <div className="text-center mb-8">
        <span className="text-4xl text-amber-950/40 font-serif">❦</span>
      </div>

      <h1 className="text-2xl font-serif font-bold mb-12 text-slate-900 text-center tracking-tight border-b border-amber-900/10 pb-6 mx-4">
        The Chronicles
      </h1>

      <nav className="flex-1 space-y-12 px-2">
        {MENU_ITEMS.map((section) => (
          <div key={section.title} className="group">
            <Link
              href={section.href}
              className="block font-serif text-lg font-bold text-slate-900 mb-2 hover:text-amber-800 transition-colors"
            >
              {section.title}
            </Link>

            {section.description && (
              <p className="font-serif text-sm text-slate-500 italic leading-relaxed pl-1 border-l-2 border-amber-900/10 ml-1">
                {section.description}
              </p>
            )}

            {section.items && (
              <ul className="mt-3 space-y-2 ml-2">
                {section.items.map((item) => (
                  <li key={item.href} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-900/20 mr-3"></span>
                    <Link
                      href={item.href}
                      className="font-serif text-slate-700 hover:text-amber-900 hover:italic text-base transition-all"
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

      {/* Footer / Copyright area style */}
      <div className="mt-auto pt-8 text-center opacity-40">
        <div className="w-12 h-px bg-slate-900 mx-auto mb-4"></div>
        <p className="font-serif text-xs text-slate-900">Est. 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;
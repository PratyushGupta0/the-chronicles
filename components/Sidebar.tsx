import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-slate-50 border-r border-slate-200 p-8 fixed left-0 top-0 overflow-y-auto hidden md:block">
      {/* Project Title */}
      <h1 className="text-2xl font-serif font-bold mb-10 text-slate-900 tracking-tight">
        The Chronicles
      </h1>

      <nav className="space-y-10">
        {/* 1. INTRODUCTION */}
        <div>
          <Link href="/" className="text-sm uppercase tracking-[0.15em] font-bold text-slate-900 hover:text-amber-700 transition-colors">
            I. Introduction
          </Link>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            General overview, author's notes, and project status.
          </p>
        </div>

        {/* 2. THE BOOK */}
        <div>
          <Link href="/chapters" className="text-sm uppercase tracking-[0.15em] font-bold text-slate-900 hover:text-amber-700 transition-colors">
            II. The Book
          </Link>
          <ul className="mt-4 space-y-2 border-l border-slate-200 ml-1 pl-4">
            <li>
              <Link href="/chapters/1" className="text-sm text-slate-600 hover:text-black">Chapter One</Link>
            </li>
            <li>
              <Link href="/chapters/2" className="text-sm text-slate-600 hover:text-black">Chapter Two</Link>
            </li>
          </ul>
        </div>

        {/* 3. MAPS */}
        <div>
          <Link href="/maps" className="text-sm uppercase tracking-[0.15em] font-bold text-slate-900 hover:text-amber-700 transition-colors">
            III. Maps
          </Link>
          <ul className="mt-4 space-y-2 border-l border-slate-200 ml-1 pl-4">
            <li>
              <Link href="/maps/world" className="text-sm text-slate-600 hover:text-black">World Map</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
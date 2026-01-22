import Link from 'next/link';
import { getMenuData } from '@/lib/menu-data';
import SidebarNav from './SidebarNav';

const Sidebar = async () => {
  const MENU_ITEMS = await getMenuData();

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
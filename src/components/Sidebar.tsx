import React from 'react';
import { NavItem } from '../types';

interface SidebarProps {
  items: NavItem[];
  open: boolean;
  activeSection: string;
}

const Sidebar = ({ items, open, activeSection }: SidebarProps) => {
  return (
    <aside
      className={`sidebar fixed inset-y-0 left-0 z-30 w-72 transform border-r bg-background transition-transform duration-200 md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col overflow-y-auto pt-20">
        <nav className="px-3 py-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                activeSection === item.href.substring(1) ? 'active' : ''
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
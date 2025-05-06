import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NavItem } from '../types';
import logo from '../assets/logo';

interface NavbarProps {
  items: NavItem[];
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar = ({ items, toggleSidebar, sidebarOpen }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
          <a href="#" className="flex items-center gap-2">
            <div dangerouslySetInnerHTML={{ __html: logo }} className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block">AI Agent Docs</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-md p-2 hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
        </div>
      </div>
      {searchOpen && (
        <div className="container px-4 pb-4 md:px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { title: 'Getting Started', href: '#introduction' },
  { title: 'Installation', href: '#installation' },
  { title: 'Configuration', href: '#configuration' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'Deployment', href: '#deployment' },
];

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -40% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarOpen && window.innerWidth < 768) {
        const sidebar = document.querySelector('.sidebar');
        const target = event.target as Node;
        if (sidebar && !sidebar.contains(target)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar items={navItems} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex flex-1">
        <Sidebar items={navItems} open={sidebarOpen} activeSection={activeSection} />
        <main className="flex-1 pt-16 pb-20 md:pl-72">
          <div
            className={`container px-4 transition-opacity duration-500 md:px-6 ${
              sidebarOpen ? 'opacity-50 md:opacity-100' : 'opacity-100'
            }`}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
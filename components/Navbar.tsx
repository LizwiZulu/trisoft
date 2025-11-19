import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#contact' },
];

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight) {
        setScrollProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-0 sm:px-4 transition-all duration-500`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent z-50">
        <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>

      <div className={`
        relative w-full max-w-5xl transition-all duration-500 mt-0 sm:mt-6
        ${isScrolled || isMobileMenuOpen 
          ? 'sm:rounded-2xl px-6 py-4 shadow-2xl shadow-black/50 bg-white/5 backdrop-blur-xl border-b sm:border border-white/10' 
          : 'bg-transparent px-6 py-6'}
      `}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              Trisoft
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-5 w-px bg-white/10"></div>
            <div className="flex gap-4">
              <button className="text-white text-sm font-medium hover:text-indigo-300 transition-colors">
                Log in
              </button>
              <button 
                onClick={onOpenChat}
                className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-[#0f0c29]/90 backdrop-blur-xl rounded-xl p-2 animate-fade-in-up overflow-hidden border border-white/10 shadow-2xl">
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
               <div className="h-px bg-white/10 my-2"></div>
               <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors"
               >
                 Get Started
               </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
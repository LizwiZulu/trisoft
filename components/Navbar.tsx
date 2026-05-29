import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-0 sm:px-4">
      <div
        className={`relative mt-0 w-full max-w-5xl transition-all duration-300 sm:mt-4 ${
          isScrolled || isMobileMenuOpen
            ? 'border-b border-slate-200 bg-white/90 px-6 py-3 shadow-soft backdrop-blur-md sm:rounded-2xl sm:border'
            : 'bg-transparent px-6 py-5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#main"
            className="group flex flex-shrink-0 items-center gap-2.5"
            aria-label="Trisoft home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white shadow-soft transition-colors group-hover:bg-brand-700">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-navy">Trisoft</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-baseline gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="text-sm font-semibold text-navy transition-colors hover:text-brand-700"
              >
                Log in
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute inset-x-2 top-full mt-2 animate-fade-up overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-float md:hidden">
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <div className="my-2 h-px bg-slate-200" />
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg bg-brand-600 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

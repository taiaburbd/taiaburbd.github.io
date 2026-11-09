import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CvDropdown from './CvDropdown';
import { CV_FILES } from '../data/cv';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/academic-projects', label: 'Projects' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/photo-gallery', label: 'Photos' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setScrolled(window.scrollY > 16);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-slate-900/20'
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="page-wrap">
        <div className="flex h-14 items-center justify-between">
          <Link
            to="/"
            className={`text-[15px] font-extrabold tracking-tight select-none transition-colors ${
              scrolled
                ? 'text-white'
                : 'bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent'
            }`}
          >
            TR
          </Link>

          <div className="hidden sm:flex items-center gap-0.5">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors duration-150 ${
                  scrolled
                    ? isActive(to)
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                    : isActive(to)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="ml-2">
              <CvDropdown variant={scrolled ? 'dark' : 'nav'} align="right" />
            </div>
          </div>

          <button
            type="button"
            className={`sm:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`sm:hidden border-t backdrop-blur-md ${
            scrolled
              ? 'border-white/10 bg-slate-900/95'
              : 'border-slate-100 bg-white/95'
          }`}
        >
          <div className="px-3 pb-3 pt-2 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? isActive(to)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    : isActive(to)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <div
              className={`pt-1 border-t mt-1 ${scrolled ? 'border-white/10' : 'border-slate-100'}`}
            >
              {CV_FILES.map(({ href, label, hint }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                    scrolled
                      ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {label}
                  <span
                    className={`text-[10px] uppercase tracking-wider ${
                      scrolled ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {hint}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

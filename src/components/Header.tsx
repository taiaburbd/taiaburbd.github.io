import React, { useEffect, useRef, useState } from 'react';
import { Mail, FileText, ChevronDown, Github, Linkedin, Youtube, Briefcase } from 'lucide-react';
import LazyImage from './LazyImage';

const socialLinks = [
  { href: 'mailto:taiaburbd@gmail.com', Icon: Mail, label: 'Email' },
  { href: 'https://github.com/taiaburbd', Icon: Github, label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/taiabur-rahman/', Icon: Linkedin, label: 'LinkedIn', external: true },
  { href: 'https://www.upwork.com/fl/taiaburbd', Icon: Briefcase, label: 'Upwork', external: true },
  { href: 'https://www.youtube.com/taiaburrahman', Icon: Youtube, label: 'YouTube', external: true },
];

const cvOptions = [
  { href: '/cv/gen/Rahman_CV_2026_en.html', label: 'English', code: 'EN' },
  { href: '/cv/gen/Rahman_CV_2026_fr.html', label: 'Français', code: 'FR' },
];

const CvDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm transition-all duration-200"
      >
        <FileText className="h-3.5 w-3.5" />
        CV
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute left-0 top-full pt-1 z-20 min-w-[150px] transition-all duration-150 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
          {cvOptions.map(({ href, label, code }) => (
            <a
              key={code}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              <span>{label}</span>
              <span className="text-[10px] font-semibold tracking-wider text-gray-400">
                {code}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="relative bg-white overflow-hidden border-b border-gray-100">
      {/* Subtle gradient + grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgb(99 102 241) 1px, transparent 1px), linear-gradient(to right, rgb(99 102 241) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-200/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-200/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-fade-up">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 blur-lg opacity-40 scale-110" />
              <LazyImage
                src="/images/taiabur_apr24.jpg"
                alt="Taiabur Rahman"
                className="relative w-full h-full rounded-full object-cover ring-4 ring-white shadow-xl"
                containerClassName="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Taiabur Rahman
            </h1>

            <p className="text-base sm:text-lg text-gray-500 mb-7 font-normal">
              Medical Imaging &nbsp;·&nbsp; Software Engineer &nbsp;·&nbsp; Computer Vision &nbsp;·&nbsp; AI
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
              {socialLinks.map(({ href, Icon, label, external }, idx) => (
                <React.Fragment key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm transition-all duration-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                  {idx === 0 && <CvDropdown />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

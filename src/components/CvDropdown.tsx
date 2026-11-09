import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { CV_FILES } from '../data/cv';

interface CvDropdownProps {
  variant?: 'light' | 'dark' | 'nav';
  align?: 'left' | 'right';
}

const CvDropdown: React.FC<CvDropdownProps> = ({ variant = 'light', align = 'left' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  const triggerClass =
    variant === 'dark'
      ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
      : variant === 'nav'
        ? 'border-slate-200 bg-slate-900 text-white hover:bg-slate-800'
        : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50';

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        window.clearTimeout(closeTimer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = window.setTimeout(() => setOpen(false), 180);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border shadow-sm transition-all duration-150 ${triggerClass}`}
      >
        <FileText className="h-3.5 w-3.5" />
        CV
        <ChevronDown className={`h-3 w-3 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        role="menu"
        className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full pt-1 z-30 min-w-[168px] transition-all duration-150 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden">
          {CV_FILES.map(({ href, label, hint }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              <span>{label}</span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">{hint}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CvDropdown;

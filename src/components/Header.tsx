import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import CvDropdown from './CvDropdown';

const socialLinks = [
  { href: 'mailto:taiaburbd@gmail.com', Icon: Mail, label: 'Email' },
  { href: 'https://github.com/taiaburbd', Icon: Github, label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/taiabur-rahman/', Icon: Linkedin, label: 'LinkedIn', external: true },
];

const Header: React.FC = () => {
  return (
    <header className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(99,102,241,0.28),transparent_55%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgb(148 163 184) 1px, transparent 1px), linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative page-wrap py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-10">
          <div className="flex-shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <div className="absolute inset-0 rounded-full bg-indigo-400/40 blur-xl scale-110" />
              <img
                src="/images/taiabur_apr24.jpg"
                alt="Taiabur Rahman"
                className="relative w-full h-full rounded-full object-cover ring-2 ring-white/20"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 tracking-wide">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Available immediately · freelance
            </div>

            <h1 className="text-3xl sm:text-[2.4rem] font-extrabold tracking-tight leading-none mb-2">
              Taiabur Rahman
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mb-2">
              Freelance ML Engineer · Computer Vision · Medical Imaging · LLM &amp; AI Agents
            </p>

            <p className="inline-flex items-center gap-1.5 text-xs text-slate-400 mb-5">
              <MapPin className="h-3 w-3" />
              Paris / Île-de-France · on site or remote
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {socialLinks.map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-white/15 bg-white/5 text-slate-100 hover:bg-white/15 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
              <CvDropdown variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

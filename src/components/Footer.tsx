import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { CV_FILES } from '../data/cv';

const socialLinks = [
  { href: 'https://github.com/taiaburbd', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/taiabur-rahman/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.youtube.com/taiaburrahman', Icon: Youtube, label: 'YouTube' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="page-wrap pt-8 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-sm font-extrabold text-white mb-1">Taiabur Rahman</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Freelance ML Engineer · Computer Vision · Medical Imaging · LLM &amp; AI Agents
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-slate-300 mb-2.5 uppercase tracking-wider">CV</p>
            <div className="flex flex-col gap-1.5">
              {CV_FILES.map(({ href, label, hint }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {label}
                  <span className="ml-1.5 text-[10px] uppercase tracking-wider text-slate-600">{hint}</span>
                </a>
              ))}
              <a
                href="https://www.upwork.com/fl/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                Hire on Upwork
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-slate-300 mb-2.5 uppercase tracking-wider">Connect</p>
            <div className="flex gap-2">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:taiaburbd@gmail.com"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              taiaburbd@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <p className="text-[11px] text-slate-500">© 2026 Taiabur Rahman</p>
          <p className="text-[11px] text-slate-600">Paris · React · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

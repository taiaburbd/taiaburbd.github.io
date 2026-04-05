import React from 'react';
import { Github, Linkedin, Youtube, Facebook, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://facebook.com/taiaburbd', Icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500' },
  { href: 'https://github.com/taiaburbd', Icon: Github, label: 'GitHub', color: 'hover:text-gray-200' },
  { href: 'https://www.linkedin.com/in/taiabur-rahman/', Icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'https://www.youtube.com/taiaburrahman', Icon: Youtube, label: 'YouTube', color: 'hover:text-red-400' },
];

const quickLinks = [
  { href: 'mailto:taiaburbd@gmail.com', label: 'Email Me' },
  { href: '/cv/Taiabur_Rahman_CV_2026.pdf', label: 'Download CV', external: true },
  { href: 'https://www.upwork.com/fl/taiaburbd', label: 'Hire on Upwork', external: true },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand + visitor tracker */}
          <div>
            <p className="text-lg font-extrabold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Taiabur Rahman
            </p>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Medical Imaging · Computer Vision · AI
            </p>
            <div className="bg-white rounded-lg p-2 inline-block">
              <a href="https://clustrmaps.com/site/1c0t0" title="Visit tracker">
                <img
                  src="//www.clustrmaps.com/map_v2.png?d=1FdDCe9Mp7tl9ELfel-yvD1xuuvnDkAqgwmRv4TFV0M&cl=ffffff"
                  alt="Visitor Map"
                  className="max-w-full h-auto max-h-20"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-wider">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-wider">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:taiaburbd@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                taiaburbd@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© 2024 Taiabur Rahman. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

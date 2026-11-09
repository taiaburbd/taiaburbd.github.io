import React from 'react';
import { Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { CV_FILES } from '../data/cv';

const contactLinks = [
  {
    href: 'mailto:taiaburbd@gmail.com',
    Icon: Mail,
    label: 'Email',
    variant: 'primary',
  },
  {
    href: 'https://github.com/taiaburbd',
    Icon: Github,
    label: 'GitHub',
    variant: 'secondary',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/taiabur-rahman/',
    Icon: Linkedin,
    label: 'LinkedIn',
    variant: 'secondary',
    external: true,
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-y bg-slate-50 scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading
            index="07"
            title="Contact"
            subtitle="Available immediately for freelance missions in Paris or remote — régie or forfait, through my French SAS."
          />
        </AnimatedSection>

        <AnimatedSection delay={60}>
          <div className="flex flex-wrap gap-2 mb-6">
            {contactLinks.map(({ href, Icon, label, variant, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={
                  variant === 'primary'
                    ? 'inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors'
                    : 'inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors'
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
            {CV_FILES.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <MapPin className="h-4 w-4 text-indigo-600 mb-2" />
              <p className="text-sm font-semibold text-slate-800 mb-0.5">Location</p>
              <p className="text-xs text-slate-500">Paris / Île-de-France · on site or remote</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <Mail className="h-4 w-4 text-indigo-600 mb-2" />
              <p className="text-sm font-semibold text-slate-800 mb-0.5">Email</p>
              <a href="mailto:taiaburbd@gmail.com" className="text-xs text-slate-500 hover:text-indigo-600">
                taiaburbd@gmail.com
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <Briefcase className="h-4 w-4 text-indigo-600 mb-2" />
              <p className="text-sm font-semibold text-slate-800 mb-0.5">Availability</p>
              <p className="text-xs text-slate-500">Freelance · available immediately</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

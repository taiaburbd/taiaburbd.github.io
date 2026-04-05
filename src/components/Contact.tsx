import React from 'react';
import { Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const contactLinks = [
  {
    href: 'mailto:taiaburbd@gmail.com',
    Icon: Mail,
    label: 'Email Me',
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

const infoCards = [
  { Icon: MapPin, title: 'Location', body: 'Paris, France · Open to remote worldwide' },
  { Icon: Mail, title: 'Email', body: 'taiaburbd@gmail.com' },
  { Icon: Briefcase, title: 'Work Status', body: 'Open to opportunities' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50/60 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <div className="section-divider" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to contribute to your vision. Feel free to reach out.
          </p>
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {contactLinks.map(({ href, Icon, label, variant, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={
                  variant === 'primary'
                    ? 'inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors duration-200'
                    : 'inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600 px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200'
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Info cards */}
        <AnimatedSection delay={200}>
          <div className="grid sm:grid-cols-3 gap-4">
            {infoCards.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
                  <Icon className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Contact;

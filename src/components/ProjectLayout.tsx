import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export const ProjectBackLink: React.FC<{ to?: string; label?: string }> = ({
  to = '/academic-projects',
  label = 'Back to Projects',
}) => (
  <div className="bg-white border-b border-slate-100">
    <div className="page-wrap py-2.5">
      <Link
        to={to}
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Link>
    </div>
  </div>
);

interface ProjectHeroProps {
  tags: string[];
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ tags, title, subtitle, actions }) => (
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
    <div className="relative page-wrap py-8 sm:py-10">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/15 bg-white/10 text-indigo-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight max-w-3xl mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
      {actions && <div className="flex flex-wrap gap-2 mt-5">{actions}</div>}
    </div>
  </header>
);

export const ProjectSection: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <AnimatedSection>
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  </AnimatedSection>
);

export const ProjectFigure: React.FC<{ src: string; alt: string; caption: string }> = ({
  src,
  alt,
  caption,
}) => (
  <figure className="rounded-lg overflow-hidden border border-slate-200">
    <img src={src} alt={alt} className="w-full h-auto" />
    <figcaption className="bg-slate-50 px-3 py-2 text-xs text-slate-500 border-t border-slate-200">
      {caption}
    </figcaption>
  </figure>
);

export const ProjectSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <aside className="md:col-span-1">
    <div className="md:sticky md:top-20 space-y-3">{children}</div>
  </aside>
);

export const MetaCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">{title}</h3>
    {children}
  </div>
);

export const MetaRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="py-2 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-0.5">{label}</p>
    <div className="text-sm text-slate-800">{children}</div>
  </div>
);

export const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">{children}</span>
);

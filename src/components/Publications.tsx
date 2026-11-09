import React from 'react';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const papers = [
  {
    venue: 'ICPR 2026 · LNCS 16816, Springer',
    role: 'Equal contribution',
    title: 'Automatic Segmentation for 3D Morphometric Analysis of the Mouse Brain',
    authors: 'B. Zayim, E. Skutunova, T. Rahman, et al. (equal contribution)',
    href: 'https://doi.org/10.1007/978-3-032-31666-0_46',
    hrefLabel: 'DOI',
  },
  {
    venue: 'arXiv 2026 · under review at Scientific Reports',
    role: 'First author',
    title: 'Deep learning of longitudinal visual fields predicts glaucoma progression rate and identifies fast progressors',
    authors: 'T. Rahman, S. Rahman, M. Moniruzzaman, et al.',
    href: 'https://arxiv.org/abs/2609.29256',
    hrefLabel: 'arXiv:2609.29256',
  },
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="section-y bg-white scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading index="04" title="Publications" subtitle="Peer-reviewed work in medical imaging and clinical prediction." />
        </AnimatedSection>

        <div className="grid gap-3">
          {papers.map((paper, i) => (
            <AnimatedSection key={paper.href} delay={i * 70}>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600">{paper.venue}</span>
                  <span className="text-[11px] font-medium text-slate-400">{paper.role}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{paper.authors}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-indigo-600">
                  {paper.hrefLabel} <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

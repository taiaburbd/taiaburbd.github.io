import React from 'react';
import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface Role {
  title: string;
  period: string;
  org: string;
  location: string;
  points: string[];
  tags: string[];
}

const roles: Role[] = [
  {
    title: 'Machine Learning Engineer',
    period: 'Sep 2025 – Jun 2026',
    org: 'Blackbird.AI',
    location: 'New York, USA · remote',
    points: [
      'Built LLM agents and reusable skills for ingestion, classification and monitoring.',
      'Fine-tuned OpenAI, Gemini (vision) and open models with LoRA on 100K+ samples; compared quality vs cost.',
      'Moved models into production: data pipelines, Docker, CI/CD and AWS.',
    ],
    tags: ['Python', 'LangGraph', 'LoRA', 'Docker', 'AWS'],
  },
  {
    title: 'Graduate Research Intern — 3D Image Segmentation',
    period: 'Feb – Aug 2024',
    org: 'INSERM UMR 1231, NEUROGEMM',
    location: 'Dijon, France',
    points: [
      'Automated nnU-Net pipeline segmenting 26 brain regions in high-resolution 3D microscopy.',
      'Mean Dice above 0.90 in 18 of 26 regions; time cut from about a week to under 5 minutes per brain.',
      'Processed 400+ volumes on a GPU cluster. Results published at ICPR 2026.',
    ],
    tags: ['PyTorch', 'nnU-Net', 'SimpleITK', 'SLURM'],
  },
  {
    title: 'Full-Stack Developer',
    period: 'Dec 2017 – Aug 2022',
    org: 'Vision Eye Hospital',
    location: 'Dhaka, Bangladesh',
    points: [
      'Designed and maintained the hospital information system used daily by 50+ clinical staff.',
      'Modules for patients, appointments, investigations, theatre, invoices and reports.',
      'Owned releases, data integrity and production support in a clinical environment.',
    ],
    tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-y bg-white scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading
            index="02"
            title="Experience"
            subtitle="Research code into production tools — medical imaging, LLMs and clinical software."
          />
        </AnimatedSection>

        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {roles.map((role, i) => (
            <AnimatedSection key={role.org} delay={i * 60}>
              <article className="grid sm:grid-cols-[8.5rem_1fr] gap-2 sm:gap-6 py-5">
                <p className="text-xs font-medium text-slate-400 pt-0.5 tabular-nums">{role.period}</p>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{role.title}</h3>
                  <p className="text-sm text-indigo-600 font-medium mt-0.5">{role.org}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-400 mt-0.5 mb-2.5">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    {role.location}
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 leading-relaxed">
                    {role.points.map((p) => (
                      <li key={p} className="pl-3 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-slate-300">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {role.tags.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const stats = [
  { value: '6+', label: 'Years building software' },
  { value: '400+', label: '3D volumes processed' },
  { value: '100K+', label: 'Samples fine-tuned' },
  { value: '2', label: 'Research papers' },
];

const skills = [
  'Computer Vision',
  'Medical Imaging',
  'LLM / RAG / Agents',
  'PyTorch · nnU-Net',
  'MLOps · AWS',
  'Python · FastAPI',
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-y bg-slate-50 scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading index="01" title="About" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center py-3 px-2 rounded-lg bg-white border border-slate-200"
              >
                <div className="text-xl font-extrabold text-indigo-600 leading-none mb-1">{value}</div>
                <div className="text-[11px] text-slate-500 font-medium leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-3xl">
            Machine learning engineer with 6+ years of software development and a research background in
            medical image analysis. I build deep learning models for images, LLM-based agents and
            fine-tuning pipelines, and the production code around them: data pipelines, APIs, tests,
            CI/CD, Docker and AWS. Used to turning research code into reliable tools and working with
            clinicians and non-technical users.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((label) => (
              <span
                key={label}
                className="border border-slate-200 bg-white px-2.5 py-1 rounded-full text-xs font-medium text-slate-600"
              >
                {label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;

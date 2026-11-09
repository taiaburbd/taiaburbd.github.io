import React from 'react';
import { Building2, Target, Lightbulb, TrendingUp, ImageIcon, ExternalLink, Check } from 'lucide-react';
import Seo from '../../components/Seo';
import JsonLd from '../../components/JsonLd';
import {
  ProjectBackLink,
  ProjectHero,
  ProjectSection,
  ProjectFigure,
  ProjectSidebar,
  MetaCard,
  MetaRow,
  TechTag,
} from '../../components/ProjectLayout';
import { ROUTES, SITE, absUrl } from '../../lib/seo';

const InsermProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Seo
        title={ROUTES.insermProject.title}
        description={ROUTES.insermProject.description}
        path={ROUTES.insermProject.path}
        type="article"
        keywords={[
          'INSERM',
          '3D Brain Segmentation',
          'nnU-Net',
          'PyTorch',
          'Medical Imaging',
          'Histology',
          'Deep Learning',
          'ICPR 2026',
        ]}
      />
      <JsonLd
        id="inserm-project"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academic Projects', path: ROUTES.academicProjects.path },
          { name: 'INSERM 3D Brain Segmentation', path: ROUTES.insermProject.path },
        ]}
        extra={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: ROUTES.insermProject.title,
          description: ROUTES.insermProject.description,
          url: absUrl(ROUTES.insermProject.path),
          author: { '@id': `${SITE.url}/#person` },
          keywords:
            'INSERM, nnU-Net, 3D Brain Segmentation, Medical Imaging, Deep Learning, PyTorch, ICPR 2026',
        }}
      />

      <ProjectBackLink />
      <ProjectHero
        tags={['Medical Imaging', 'Deep Learning', '3D Segmentation', 'ICPR 2026']}
        title="Automated segmentation of high-resolution 3D histological mouse brain volumes"
        subtitle="nnU-Net pipeline for 26 brain regions — from a week of manual work to under 5 minutes per brain. Published at ICPR 2026."
      />

      <div className="page-wrap py-7">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <ProjectSection
              title="Institutions"
              icon={<Building2 className="h-4 w-4 text-indigo-600" />}
            >
              <ol className="space-y-2.5">
                {[
                  ['INSERM UMR 1231, NEUROGEMM', 'Dijon, France'],
                  ['ICMUB Laboratory, CNRS UMR 6302', 'University of Burgundy, Dijon'],
                  ['NeuroGeM Laboratory, INSERM Unit 1231', 'University of Burgundy, Dijon'],
                ].map(([name, place], i) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-500">{place}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ProjectSection>

            <ProjectSection
              title="Objective"
              icon={<Target className="h-4 w-4 text-indigo-600" />}
            >
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Build an automated segmentation framework for high-resolution 3D histological mouse
                brain images, so neuroscientists can measure volume and shape across mutant and
                wild-type animals without a week of manual tracing per brain.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed bg-indigo-50/70 border border-indigo-100 rounded-lg px-3 py-2.5">
                <span className="font-semibold text-slate-800">Focus — </span>
                segment 26 regions of interest in HREM volumes, run at scale on a GPU cluster, and
                validate with neuroscientists. Results published at ICPR 2026.
              </p>
            </ProjectSection>

            <ProjectSection
              title="Methods"
              icon={<Lightbulb className="h-4 w-4 text-indigo-600" />}
            >
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">nnU-Net</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Self-configuring 3D segmentation that adapts to the dataset. 5× downsampling to
                    fit GPU memory and time.
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">SAM</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Segment Anything Model explored as a flexible promptable alternative for 3D
                    medical volumes.
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-800">Format — </span>NRRD, 25–35 GB per
                  volume
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Scale — </span>400+ private
                  high-resolution 3D histological volumes
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Compute — </span>Linux GPU cluster
                  with SLURM
                </li>
              </ul>
            </ProjectSection>

            <ProjectSection
              title="Results"
              icon={<TrendingUp className="h-4 w-4 text-indigo-600" />}
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg border border-slate-200 p-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    Binary Dice
                  </p>
                  <p className="text-3xl font-extrabold text-indigo-600 leading-none">0.99</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    Multi-class Dice
                  </p>
                  <p className="text-3xl font-extrabold text-indigo-600 leading-none">0.87</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 mb-3">
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Manual</p>
                  <p className="text-lg font-bold text-slate-500">~1 week</p>
                </div>
                <span className="text-slate-300">→</span>
                <div className="text-right">
                  <p className="text-[11px] text-slate-400 font-medium">Automated</p>
                  <p className="text-lg font-bold text-indigo-600">&lt; 5 min</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Mean Dice above 0.90 in 18 of 26 regions. Used for morphometric comparison of mutant
                vs wild-type mice.{' '}
                <a
                  href="https://doi.org/10.1007/978-3-032-31666-0_46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  ICPR 2026 paper <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </ProjectSection>

            <ProjectSection
              title="Figures"
              icon={<ImageIcon className="h-4 w-4 text-indigo-600" />}
            >
              <div className="space-y-3">
                <ProjectFigure
                  src="/project-photos/inserm_3d_seg_method.png"
                  alt="Segmentation pipeline"
                  caption="Pipeline from input volumes to region labels"
                />
                <ProjectFigure
                  src="/project-photos/inserm_3d_seg_result_dataset_volume_sequence.png"
                  alt="Volume sequence"
                  caption="Sequential views of 3D histological brain volumes"
                />
                <ProjectFigure
                  src="/project-photos/inserm_3d_seg_result_half_and_full_brain.png"
                  alt="Segmented brain"
                  caption="Half-brain and full-brain segmentation"
                />
                <ProjectFigure
                  src="/project-photos/inserm_3d_seg_result_box_plot.PNG"
                  alt="Box plot of Dice scores"
                  caption="Dice distribution across brain regions"
                />
              </div>
            </ProjectSection>
          </div>

          <ProjectSidebar>
            <MetaCard title="Project">
              <MetaRow label="Status">Completed</MetaRow>
              <MetaRow label="Duration">Feb – Aug 2024</MetaRow>
              <MetaRow label="Role">Graduate Research Intern</MetaRow>
              <MetaRow label="Program">MAIA · Master thesis</MetaRow>
            </MetaCard>
            <MetaCard title="Stack">
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'PyTorch', 'nnU-Net', 'SimpleITK', 'SAM', 'SLURM'].map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </MetaCard>
            <MetaCard title="Outcomes">
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  '400+ volumes processed',
                  'Dice > 0.90 in 18 / 26 regions',
                  'Week → under 5 minutes per brain',
                  'ICPR 2026 publication',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MetaCard>
          </ProjectSidebar>
        </div>
      </div>
    </div>
  );
};

export default InsermProjectPage;

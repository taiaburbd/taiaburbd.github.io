import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Database,
  Brain,
  Scan,
  Hospital,
  Store,
  Boxes,
  type LucideIcon,
} from 'lucide-react';
import projectsData from '../data/projects.json';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface Project {
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
  panel: string;
  ring: string;
  iconColor: string;
  link?: string;
  github?: string;
  tech?: string[];
}

const inserm = projectsData.projects.find((p) => p.id === 'inserm-3d-seg')!;

const featuredProjects: Project[] = [
  {
    title: 'IDC Explorer',
    institution: 'Open source · 2026',
    description:
      'Ask questions about NCI Imaging Data Commons (86,451 patients, CT/MRI and segmentations) and get viewer links, SQL and reproducible code. MCP server for AI agents.',
    github: 'https://github.com/taiaburbd/IDC-Explorer',
    tech: ['Python', 'DuckDB', 'SQL', 'MCP', 'Streamlit'],
    icon: Database,
    panel: 'bg-indigo-50',
    ring: 'ring-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    title: inserm.title,
    institution: inserm.institution,
    description: inserm.description,
    link: inserm.link,
    tech: ['PyTorch', 'nnU-Net', 'SimpleITK'],
    icon: Brain,
    panel: 'bg-violet-50',
    ring: 'ring-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    title: '3D Brain MRI Segmentation',
    institution: 'University of Girona · MAIA',
    description:
      'WM / GM / CSF segmentation from volumetric MRI with a custom 3D U-Net. Above 90% Dice on the test set.',
    github: 'https://github.com/taiaburbd/brain_mri_segmentation',
    tech: ['PyTorch', '3D U-Net', 'TensorFlow'],
    icon: Scan,
    panel: 'bg-sky-50',
    ring: 'ring-sky-100',
    iconColor: 'text-sky-600',
  },
];

const professionalProjects: Project[] = [
  {
    title: 'Hospital Information Management System',
    institution: 'Vision Eye Hospital',
    description:
      'Clinical ERP used daily by 50+ staff — patients, prescriptions, diagnostics, theatre and billing.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    icon: Hospital,
    panel: 'bg-rose-50',
    ring: 'ring-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    title: 'Franchise Store Management System',
    institution: 'Professional',
    description: 'Inventory, sales and franchise operations in a single store-management platform.',
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
    icon: Store,
    panel: 'bg-amber-50',
    ring: 'ring-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'B2B Ecommerce Platform',
    institution: 'Professional',
    description: 'Business-to-business catalogue, orders and account management.',
    tech: ['Laravel', 'MySQL', 'Ajax'],
    icon: Boxes,
    panel: 'bg-emerald-50',
    ring: 'ring-emerald-100',
    iconColor: 'text-emerald-600',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors overflow-hidden h-full">
      <div className={`relative h-28 overflow-hidden ${project.panel}`}>
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/60" />
        <div className="absolute -left-6 -bottom-10 h-24 w-24 rounded-full bg-white/40" />
        <div className="relative h-full flex items-center justify-center">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ${project.ring}`}
          >
            <Icon className={`h-7 w-7 ${project.iconColor}`} strokeWidth={1.75} />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wide mb-1">
          {project.institution}
        </p>
        <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
          {project.link ? (
            <Link to={project.link} className="hover:text-indigo-600 transition-colors">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-1">{project.description}</p>

        {project.tech && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          {project.link && (
            <Link
              to={project.link}
              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-xs font-semibold"
            >
              Details <ExternalLink className="h-3 w-3" />
            </Link>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 text-xs font-semibold"
            >
              <Github className="h-3 w-3" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-y bg-white scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading
            index="03"
            title="Selected work"
            subtitle="Medical imaging tools, 3D segmentation, and production software."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 60}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h3 className="text-sm font-bold text-slate-800 mb-3">Professional software</h3>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {professionalProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 60}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <Link
            to="/academic-projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            All academic projects <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';

interface Project {
  title: string;
  institution: string;
  description: string;
  image: string;
  hoverImage: string;
  link?: string;
  tech?: string[];
}

const researchProjects: Project[] = projectsData.projects.slice(0, 3).map((p) => ({
  title: p.title,
  institution: p.institution,
  description: p.description,
  image: p.image,
  hoverImage: p.hoverImage,
  link: p.link,
}));

const professionalProjects: Project[] = [
  {
    title: 'Hospital Information Management Systems (HIMS)',
    institution: 'Professional',
    description:
      'HIMS software includes electronic health records, service modules, administrative modules, and financial management.',
    image: '/images/p_project_hospital_0.PNG',
    hoverImage: '/images/p_project_hospital_1.PNG',
    tech: ['PHP', 'Laravel', 'Vue CLI', 'MySQL', 'AWS'],
  },
  {
    title: 'Franchise Store Management System (FSMS)',
    institution: 'Professional',
    description:
      'Comprehensive store management solution with inventory, sales, and franchise management capabilities.',
    image: '/images/p_project_store_0.PNG',
    hoverImage: '/images/p_project_store_1.PNG',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Advanced B2B Ecommerce Platform',
    institution: 'Professional',
    description:
      'B2B ecommerce platform with advanced features for business-to-business transactions and management.',
    image: '/images/p_project_b2b_0.PNG',
    hoverImage: '/images/p_project_b2b_1.PNG',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Ajax'],
  },
];

const techColors: Record<string, string> = {
  Python: 'bg-blue-50 text-blue-700',
  PyTorch: 'bg-orange-50 text-orange-700',
  PHP: 'bg-violet-50 text-violet-700',
  Laravel: 'bg-rose-50 text-rose-700',
  MySQL: 'bg-sky-50 text-sky-700',
  AWS: 'bg-amber-50 text-amber-700',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Image */}
      <div
        className="relative h-44 overflow-hidden bg-gray-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <LazyImage
          src={hovered ? project.hoverImage : project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          containerClassName="w-full h-44"
        />
        {project.institution && project.institution !== 'Professional' && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
              {project.institution}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
          {project.link ? (
            <Link to={project.link} className="hover:text-indigo-600 transition-colors">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  techColors[t] ?? 'bg-gray-100 text-gray-600'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <Link
            to={project.link}
            className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors"
          >
            View Details <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <AnimatedSection>
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      <div className="mt-2 w-8 h-0.5 rounded-full bg-indigo-400" />
    </div>
  </AnimatedSection>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50/60 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Main heading */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Projects</h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        {/* Research Projects */}
        <SectionHeading
          title="Research & Academic Projects"
          subtitle="Medical imaging, deep learning, and computer vision research"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {researchProjects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Professional Projects */}
        <SectionHeading
          title="Professional Projects"
          subtitle="Industry-grade software solutions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {professionalProjects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* View all */}
        <AnimatedSection>
          <div className="text-center">
            <Link
              to="/academic-projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors duration-200"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Projects;

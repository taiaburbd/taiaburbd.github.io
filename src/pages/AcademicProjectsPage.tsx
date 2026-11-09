import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Microscope, Heart, GraduationCap, FileSearch, Github } from 'lucide-react';
import projectsData from '../data/projects.json';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { ROUTES } from '../lib/seo';

interface Project {
  id: string;
  title: string;
  institution: string;
  description: string;
  image: string;
  hoverImage: string;
  link?: string;
  github?: string;
  category: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-4 w-4" />,
  Microscope: <Microscope className="h-4 w-4" />,
  Heart: <Heart className="h-4 w-4" />,
  GraduationCap: <GraduationCap className="h-4 w-4" />,
  FileSearch: <FileSearch className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  'Medical Imaging':  'bg-blue-50 text-blue-700 border-blue-200',
  'Deep Learning':    'bg-violet-50 text-violet-700 border-violet-200',
  'Machine Learning': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Computer Vision':  'bg-amber-50 text-amber-700 border-amber-200',
  'Research':         'bg-rose-50 text-rose-700 border-rose-200',
};

const AcademicProjectsPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = projectsData.projects;
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Seo
        title={ROUTES.academicProjects.title}
        description={ROUTES.academicProjects.description}
        path={ROUTES.academicProjects.path}
        keywords={[
          'Academic Projects',
          'Medical Imaging',
          'Deep Learning',
          'Computer Vision',
          'INSERM',
          'nnU-Net',
          'PyTorch',
        ]}
      />
      <JsonLd
        id="academic-projects"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academic Projects', path: ROUTES.academicProjects.path },
        ]}
      />
      {/* Page header */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <AnimatedSection>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Academic Projects</h1>
            <p className="text-slate-500 text-sm max-w-xl">
              Research and academic work in medical imaging, deep learning, and computer vision.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* Filter chips */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mb-5">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` · ${selectedCategory}`}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 60}>
              <div
                className="group bg-white rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-40 bg-slate-100 overflow-hidden">
                  <LazyImage
                    src={hoveredId === project.id ? project.hoverImage : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-40"
                  />
                  {/* Category badge overlay */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      categoryColors[project.category] ?? 'bg-gray-50 text-gray-600 border-gray-200'
                    }`}>
                      {iconMap[project.icon]}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
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
                  <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectsPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Microscope, Heart, GraduationCap, FileSearch } from 'lucide-react';
import projectsData from '../data/projects.json';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';

interface Project {
  id: string;
  title: string;
  institution: string;
  description: string;
  image: string;
  hoverImage: string;
  link?: string;
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
      {/* Page header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Projects</h1>
            <div className="w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mb-3" />
            <p className="text-gray-500 text-sm max-w-xl">
              Research and academic work in medical imaging, deep learning, and computer vision.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
          <p className="text-xs text-gray-400 mb-8">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` · ${selectedCategory}`}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 60}>
              <div
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <LazyImage
                    src={hoveredId === project.id ? project.hoverImage : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-48"
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
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                    {project.institution}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1">
                    {project.link ? (
                      <Link to={project.link} className="hover:text-indigo-600 transition-colors">
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectsPage;

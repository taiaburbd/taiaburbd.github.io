import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ExternalLink, GraduationCap, Brain, Microscope, Heart, FileSearch } from 'lucide-react';
import projectsData from '../data/projects.json';

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

const iconMap: { [key: string]: React.ReactNode } = {
  'Brain': <Brain className="h-5 w-5" />,
  'Microscope': <Microscope className="h-5 w-5" />,
  'Heart': <Heart className="h-5 w-5" />,
  'GraduationCap': <GraduationCap className="h-5 w-5" />,
  'FileSearch': <FileSearch className="h-5 w-5" />
};

const AcademicProjectsPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = projectsData.projects;
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Academic Projects</h1>
          <p className="text-lg text-gray-600">
            Research and academic work in medical imaging, deep learning, and computer vision
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={selectedCategory === category ? 'default' : 'secondary'}
              className={`text-sm cursor-pointer transition-all hover:scale-105 ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Project Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={hoveredId === project.id ? project.hoverImage : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="flex items-center gap-1">
                    {iconMap[project.icon]}
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardDescription className="text-indigo-600 font-semibold uppercase text-xs tracking-wide mb-2">
                  {project.institution}
                </CardDescription>
                <CardTitle className="text-xl leading-tight">
                  {project.link ? (
                    <Link 
                      to={project.link} 
                      className="hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <Link 
                    to={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    View Details <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectsPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

interface Project {
  title: string;
  institution: string;
  description: string;
  image: string;
  hoverImage: string;
  link?: string;
  tech?: string[];
}

// Get first 3 academic/research projects from JSON
const researchProjects: Project[] = projectsData.projects.slice(0, 3).map(p => ({
  title: p.title,
  institution: p.institution,
  description: p.description,
  image: p.image,
  hoverImage: p.hoverImage,
  link: p.link
}));

const professionalProjects: Project[] = [
  {
    title: 'Hospital Information Management Systems (HIMS)',
    institution: '',
    description: 'HIMS software includes electronic health records, Service modules, administrative modules, and financial management.',
    image: '/images/p_project_hospital_0.PNG',
    hoverImage: '/images/p_project_hospital_1.PNG',
    tech: ['PHP', 'Laravel', 'Vue CLI', 'MySQL', 'AWS']
  },
  {
    title: 'Franchise Store Management System (FSMS)',
    institution: '',
    description: 'Comprehensive store management solution with inventory, sales, and franchise management capabilities.',
    image: '/images/p_project_store_0.PNG',
    hoverImage: '/images/p_project_store_1.PNG',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'jQuery', 'Ajax']
  },
  {
    title: 'Streamlined Connections: Advanced B2B Ecommerce Platform',
    institution: '',
    description: 'B2B ecommerce platform with advanced features for business-to-business transactions and management.',
    image: '/images/p_project_b2b_0.PNG',
    hoverImage: '/images/p_project_b2b_1.PNG',
    tech: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'Bootstrap', 'jQuery', 'Ajax']
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div
        className="relative h-48 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? project.hoverImage : project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      <div className="p-6">
        {project.institution && (
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
            {project.institution}
          </p>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
          {project.link ? (
            <Link to={project.link}>
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        {project.tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
        {project.link && (
          <Link
            to={project.link}
            className="text-blue-500 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
          >
            View Details <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-16">
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        
        {/* Research Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-700">Research and Academic Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-700">Professional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/academic-projects" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

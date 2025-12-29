import React from 'react';
import { Mail, FileText, Github, Linkedin, Youtube, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header id="home" className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white shadow-lg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto text-center py-16 px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Taiabur Rahman</h1>
          <p className="text-2xl mb-6 font-light">
            Medical Imaging | Software Engineer | Computer Vision | Artificial Intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:taiaburbd@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="/cv/RAHMAN_CV_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
            <a
              href="https://github.com/taiaburbd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/taiaburbd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/fl/taiaburbd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <Briefcase className="h-4 w-4" />
              UpWork
            </a>
            <a
              href="https://www.youtube.com/taiaburrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <Youtube className="h-4 w-4" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

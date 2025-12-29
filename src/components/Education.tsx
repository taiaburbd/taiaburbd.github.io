import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';

interface EducationItem {
  title: string;
  period: string;
  institution: string;
}

const educationData: EducationItem[] = [
  {
    title: 'Erasmus Mundus Joint Master - Medical Imaging and Applications',
    period: 'Sep 2022 - June 2024',
    institution: '4 Universities across Europe'
  },
  {
    title: 'Master in Software Engineering',
    period: 'Sep 2018 - Aug 2020',
    institution: 'Tianjin University, China'
  },
  {
    title: 'Bachelor of Computer Science & Engineering',
    period: '2011 - 2015',
    institution: 'Bangladesh University'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="relative max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Education</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          International education background in medical imaging, software engineering, and computer science
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {educationData.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">{item.period}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/education" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View Complete Education History <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;

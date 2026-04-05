import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface EducationItem {
  title: string;
  period: string;
  institution: string;
  location: string;
  accent: string;
}

const educationData: EducationItem[] = [
  {
    title: 'Erasmus Mundus Joint Master — Medical Imaging & Applications',
    period: 'Sep 2022 – Jun 2024',
    institution: '4 European Universities',
    location: 'Spain · France · Italy · Portugal',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Master of Science — Software Engineering',
    period: 'Sep 2018 – Aug 2020',
    institution: 'Tianjin University',
    location: 'Tianjin, China',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Bachelor of Science — Computer Science & Engineering',
    period: '2011 – 2015',
    institution: 'Bangladeshi University',
    location: 'Bangladesh',
    accent: 'from-violet-500 to-indigo-500',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Education</h2>
            <div className="section-divider" />
            <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
              International academic background spanning medical imaging, software engineering, and computer science.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {educationData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.accent}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.accent} flex items-center justify-center flex-shrink-0`}>
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 mb-1">{item.institution}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    {item.location}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={350}>
          <div className="text-center">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors duration-200"
            >
              View Complete Education History
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Education;

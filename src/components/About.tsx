import React from 'react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '9+',  label: 'Research Projects' },
  { value: '8+',  label: 'Hackathons' },
  { value: '6+',  label: 'Countries Studied' },
];

const skills = [
  { label: 'Medical Imaging',    color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Deep Learning',      color: 'bg-violet-50 text-violet-700 border-violet-200' },
  { label: 'Computer Vision',    color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { label: 'AI Diagnostics',     color: 'bg-rose-50 text-rose-700 border-rose-200' },
  { label: 'Software Engineering', color: 'bg-amber-50 text-amber-700 border-amber-200' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50/60 py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">About Me</h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center py-5 px-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-extrabold text-indigo-600 mb-1">{value}</div>
                <div className="text-xs text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={160}>
          <div className="max-w-3xl mx-auto space-y-4 mb-10 text-gray-600 leading-relaxed">
            <p className="text-justify">
              I am passionate about multiple aspects of medical imaging, including classification,
              segmentation, registration, and landmark identification. My enthusiasm for these fields drives
              my desire to collaborate on innovative healthcare technology projects—specifically AI-driven
              diagnostics, telemedicine solutions, and patient data analysis.
            </p>
            <p className="text-justify">
              I believe advancements in these areas have the potential to revolutionize healthcare,
              improving patient outcomes and enhancing the efficiency of medical services. My goal is to be
              at the forefront of technological change that transforms medical practices and improves patient
              care worldwide.
            </p>
          </div>
        </AnimatedSection>

        {/* Skill tags */}
        <AnimatedSection delay={240}>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map(({ label, color }) => (
              <span
                key={label}
                className={`border px-4 py-1.5 rounded-full text-sm font-medium select-none ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default About;

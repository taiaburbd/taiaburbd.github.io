import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface EducationItem {
  title: string;
  period: string;
  institution: string;
  location: string;
}

const educationData: EducationItem[] = [
  {
    title: 'Erasmus Mundus Joint Master — Medical Imaging & Applications (MAIA)',
    period: 'Sep 2022 – Aug 2024',
    institution: 'Université de Bourgogne · Università di Cassino · Universitat de Girona',
    location: 'France · Italy · Spain · 7.41 / 10',
  },
  {
    title: 'Master of Science — Software Engineering',
    period: '2018 – 2020',
    institution: 'Tianjin University',
    location: 'Tianjin, China',
  },
  {
    title: 'Bachelor of Science — Computer Science & Engineering',
    period: '2014',
    institution: 'Bangladesh University',
    location: 'Dhaka, Bangladesh',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section-y bg-slate-50 scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading
            index="05"
            title="Education"
            subtitle="MAIA Erasmus Mundus — medical imaging, computer vision and deep learning."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {educationData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 70}>
              <div className="bg-white rounded-xl border border-slate-200 p-4 h-full">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">{item.period}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs font-medium text-indigo-600 mb-1">{item.institution}</p>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  {item.location}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={220}>
          <Link
            to="/education"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Full education history
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;

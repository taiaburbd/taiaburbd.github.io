import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, MapPin, Calendar, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface EducationDetail {
  id: string;
  title: string;
  period: string;
  type: 'master' | 'summer-school' | 'certification' | 'bachelor';
  institutions: {
    name: string;
    location: string;
    logo?: string;
    url?: string;
    degree?: string;
    credits?: string;
  }[];
  description: string;
  highlights?: string[];
}

const educationHistory: EducationDetail[] = [
  {
    id: 'maia',
    title: 'Erasmus Mundus Joint Master Degree in Medical Imaging and Applications (MAIA)',
    period: 'Sep 2022 – Jun 2024',
    type: 'master',
    institutions: [
      { name: 'National Institute of Health and Medical Research (INSERM)', location: 'Dijon, France', logo: '/logos/inserm_logo.webp', url: 'https://www.inserm.fr/', degree: 'Master Thesis', credits: '30 ECTS' },
      { name: 'University of Girona (UdG)', location: 'Girona, Spain', logo: '/logos/Logo_udg.png', url: 'https://www.udg.edu/en/', degree: 'M.Sc. Medical Imaging and Applications', credits: '30 ECTS' },
      { name: 'University of Cassino and Southern Lazio (UNICAS)', location: 'Cassino, Italy', logo: '/logos/unicas-logo.gif', url: 'https://www.unicas.it/', degree: 'M.Sc. Computer Engineering', credits: '30 ECTS' },
      { name: 'University of Burgundy (UB)', location: 'Le Creusot/Dijon, France', logo: '/logos/ub-logo.png', url: 'https://u-bourgogne.fr/', degree: 'M.Sc. Computer Vision', credits: '30 ECTS' },
    ],
    description: 'A prestigious two-year international master program spanning four European universities, focusing on medical imaging, computer vision, and AI applications in healthcare.',
    highlights: ['120 ECTS across 4 European universities', 'Specialised in medical imaging, CV, and AI', 'Master thesis on automated 3D brain segmentation', 'International collaboration across 4 countries'],
  },
  {
    id: 'excite',
    title: '17th EXCITE Summer School on Biomedical Imaging',
    period: 'Sep 2023',
    type: 'summer-school',
    institutions: [
      { name: 'ETH Zurich', location: 'Zurich, Switzerland', logo: '/logos/ETH-logo.jpg', url: 'https://www.ethz.ch/en.html', credits: '4 ECTS' },
      { name: 'University of Zurich', location: 'Zurich, Switzerland', logo: '/logos/uzh-logo.png', url: 'https://www.uzh.ch/en.html' },
      { name: 'University Hospital Zurich', location: 'Zurich, Switzerland', logo: '/logos/usz.png', url: 'https://www.en.usz.ch/' },
      { name: 'Paul Scherrer Institut (PSI)', location: 'Villigen, Switzerland', logo: '/logos/psi_logo.png', url: 'https://www.psi.ch/en' },
    ],
    description: 'Intensive summer school on advanced biomedical imaging including fluorescence, electron, and super-resolution microscopy. Hands-on sessions with pre-clinical SPECT/CT and live mouse imaging.',
    highlights: ['Multiple advanced imaging modalities', 'Hands-on SPECT/CT imaging', 'Live animal imaging at PSI', 'Expert lectures from leading scientists'],
  },
  {
    id: 'winter-school',
    title: 'Winter School 2023',
    period: 'Feb 2023',
    type: 'summer-school',
    institutions: [
      { name: 'University of Cassino and Southern Lazio', location: 'Cassino, Italy', logo: '/logos/unicas-logo.gif', url: 'https://www.unicas.it/' },
    ],
    description: 'Intensive training covering statistical learning, numerical optimization, and medical imaging with Qt/Python.',
    highlights: ['Statistical Learning techniques', 'Numerical Optimization', 'Qt with Python for Medical Imaging', 'MRI Physics fundamentals'],
  },
  {
    id: 'tju-master',
    title: 'Master in Software Engineering (SE)',
    period: 'Sep 2018 – Aug 2020',
    type: 'master',
    institutions: [
      { name: 'Tianjin University', location: 'Tianjin, China', logo: '/logos/TJU_logo.png', url: 'https://www.tju.edu.cn/english/index.htm', degree: 'Master of Engineering in Software Engineering' },
    ],
    description: 'Advanced program in software engineering, AI, cloud computing, and big data technologies.',
    highlights: ['Advanced Artificial Intelligence', 'Virtualization & Cloud Computing', 'Big Data Algorithms', 'IoT and Sensor Technologies'],
  },
  {
    id: 'ocp',
    title: 'Oracle Certified Professional (OCP) 11g',
    period: '2016',
    type: 'certification',
    institutions: [
      { name: 'IBCS-PRIMAX Software (Bangladesh) Ltd.', location: 'Dhaka, Bangladesh', url: 'https://www.ibcs-primax.com/' },
    ],
    description: 'Professional Oracle Database 11g certification covering SQL, administration, performance tuning, and troubleshooting.',
    highlights: ['Oracle DB 11g SQL', 'Administration I & II', 'Performance optimization', 'Backup & recovery'],
  },
  {
    id: 'web-dev',
    title: 'Professional Web Design & Development',
    period: '2015',
    type: 'certification',
    institutions: [
      { name: 'BASIS Institute of Technology & Management', location: 'Dhaka, Bangladesh' },
    ],
    description: 'Comprehensive training in full-stack web development covering front-end and back-end technologies.',
    highlights: ['HTML, CSS, JavaScript', 'PHP and MySQL', 'Responsive Web Design', 'Web Application Development'],
  },
  {
    id: 'bachelor',
    title: 'Bachelor of Science — Computer Science & Engineering',
    period: '2011 – 2015',
    type: 'bachelor',
    institutions: [
      { name: 'Bangladesh University', location: 'Dhaka, Bangladesh', degree: 'B.Sc. in Computer Science & Engineering' },
    ],
    description: 'Foundation degree covering programming, algorithms, data structures, software engineering, and computer systems.',
    highlights: ['Programming & Algorithm Design', 'Data Structures', 'Software Engineering Principles', 'Computer Networks & Security'],
  },
];

const typeBadge: Record<EducationDetail['type'], { label: string; color: string }> = {
  master:        { label: "Master's Degree",   color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  'summer-school': { label: 'Training Program', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  certification: { label: 'Certification',      color: 'bg-violet-50 text-violet-700 border-violet-200' },
  bachelor:      { label: "Bachelor's Degree",  color: 'bg-blue-50 text-blue-700 border-blue-200' },
};

const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Education &amp; Training</h1>
            <div className="w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mb-3" />
            <p className="text-gray-500 text-sm">
              International academic journey across multiple countries and institutions.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-blue-200 to-violet-200" />

          <div className="space-y-8">
            {educationHistory.map((edu, index) => {
              const badge = typeBadge[edu.type];
              return (
                <AnimatedSection key={edu.id} delay={index * 70}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-indigo-300 shadow-sm items-center justify-center z-10 mt-4">
                      <GraduationCap className="h-4 w-4 text-indigo-500" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      {/* Card header */}
                      <div className="p-5 border-b border-gray-50">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${badge.color}`}>
                            <Award className="h-3 w-3" />
                            {badge.label}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full bg-gray-50">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </span>
                        </div>
                        <h2 className="text-base font-bold text-gray-900 leading-snug mb-1.5">
                          {edu.title}
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">{edu.description}</p>
                      </div>

                      {/* Institutions */}
                      <div className="p-5 space-y-3">
                        {edu.institutions.map((inst, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                            {inst.logo && (
                              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm border border-gray-100">
                                <img
                                  src={inst.logo}
                                  alt={inst.name}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 leading-snug mb-0.5">
                                {inst.url ? (
                                  <a
                                    href={inst.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-indigo-600 inline-flex items-center gap-1 transition-colors"
                                  >
                                    {inst.name}
                                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                  </a>
                                ) : inst.name}
                              </p>
                              <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                                <MapPin className="h-3 w-3" /> {inst.location}
                              </div>
                              {inst.degree && (
                                <p className="text-xs text-gray-600 font-medium">{inst.degree}</p>
                              )}
                              {inst.credits && (
                                <span className="inline-block mt-1 text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-full">
                                  {inst.credits}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      {edu.highlights && (
                        <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Highlights</p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {edu.highlights.map((h, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;

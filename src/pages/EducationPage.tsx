import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, GraduationCap, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';

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
    period: 'Sep 2022 - June 2024',
    type: 'master',
    institutions: [
      {
        name: 'National Institute of Health and Medical Research (INSERM)',
        location: 'Dijon, France',
        logo: '/logos/inserm_logo.webp',
        url: 'https://www.inserm.fr/',
        degree: 'Master Thesis',
        credits: '30 ECTS'
      },
      {
        name: 'University of Girona (UdG)',
        location: 'Girona, Spain',
        logo: '/logos/Logo_udg.png',
        url: 'https://www.udg.edu/en/',
        degree: 'Master of Science in Medical Imaging and Applications',
        credits: '30 ECTS'
      },
      {
        name: 'University of Cassino and Southern Lazio (UNICAS)',
        location: 'Cassino, Italy',
        logo: '/logos/unicas-logo.gif',
        url: 'https://www.unicas.it/',
        degree: 'Master of Science in Computer Engineering',
        credits: '30 ECTS'
      },
      {
        name: 'University of Burgundy (UB)',
        location: 'Le Creusot/Dijon, France',
        logo: '/logos/ub-logo.png',
        url: 'https://u-bourgogne.fr/',
        degree: 'Master of Science in Computer Vision',
        credits: '30 ECTS'
      }
    ],
    description: 'A prestigious two-year international master program spanning four European universities, focusing on medical imaging, computer vision, and AI applications in healthcare. The program provided comprehensive training in advanced imaging techniques, deep learning, and clinical applications.',
    highlights: [
      'Completed 120 ECTS across 4 prestigious European universities',
      'Specialized in medical imaging, computer vision, and AI',
      'Master thesis on automated 3D histological brain segmentation',
      'International collaboration and multicultural experience'
    ]
  },
  {
    id: 'excite',
    title: '17th EXCITE Summer School on Biomedical Imaging',
    period: 'Sep 2023',
    type: 'summer-school',
    institutions: [
      {
        name: 'Swiss Federal Institute of Technology Zurich (ETH Zurich)',
        location: 'Zurich, Switzerland',
        logo: '/logos/ETH-logo.jpg',
        url: 'https://www.ethz.ch/en.html',
        credits: '4 ECTS'
      },
      {
        name: 'University of Zurich',
        location: 'Zurich, Switzerland',
        logo: '/logos/uzh-logo.png',
        url: 'https://www.uzh.ch/en.html'
      },
      {
        name: 'University Hospital Zurich',
        location: 'Zurich, Switzerland',
        logo: '/logos/usz.png',
        url: 'https://www.en.usz.ch/'
      },
      {
        name: 'Paul Scherrer Institut (PSI)',
        location: 'Villigen, Switzerland',
        logo: '/logos/psi_logo.png',
        url: 'https://www.psi.ch/en'
      }
    ],
    description: 'An intensive summer school focused on advanced biomedical imaging techniques including fluorescence, electron, and super-resolution microscopy. Participated in hands-on sessions with pre-clinical SPECT/CT imaging and live mouse image analysis.',
    highlights: [
      'Advanced training in multiple imaging modalities',
      'Hands-on SPECT/CT imaging experience',
      'Live animal imaging at PSI facilities',
      'Expert lectures from leading imaging scientists'
    ]
  },
  {
    id: 'winter-school',
    title: 'Winter School 2023',
    period: 'Feb 2023',
    type: 'summer-school',
    institutions: [
      {
        name: 'University of Cassino and Southern Lazio',
        location: 'Cassino, Italy',
        logo: '/logos/unicas-logo.gif',
        url: 'https://www.unicas.it/'
      }
    ],
    description: 'Intensive training program covering statistical learning, numerical optimization, and medical imaging applications using Qt with Python.',
    highlights: [
      'Statistical Learning techniques',
      'Numerical Optimization methods',
      'Qt with Python for Medical Imaging',
      'MRI Physics fundamentals'
    ]
  },
  {
    id: 'tju-master',
    title: 'Master in Software Engineering (SE)',
    period: 'Sep 2018 - Aug 2020',
    type: 'master',
    institutions: [
      {
        name: 'Tianjin University',
        location: 'Tianjin, China',
        logo: '/logos/TJU_logo.png',
        url: 'https://www.tju.edu.cn/english/index.htm',
        degree: 'Master of Engineering in Software Engineering'
      }
    ],
    description: 'Comprehensive master\'s program focusing on advanced software engineering, artificial intelligence, cloud computing, and big data technologies.',
    highlights: [
      'Advanced Artificial Intelligence',
      'Virtualization and Cloud Computing',
      'Big Data Algorithms',
      'Internet of Things and Sensor Technologies'
    ]
  },
  {
    id: 'ocp',
    title: 'Oracle Certified Professional (OCP) 11g',
    period: '2016',
    type: 'certification',
    institutions: [
      {
        name: 'IBCS-PRIMAX Software (Bangladesh) Ltd.',
        location: 'Dhaka, Bangladesh',
        url: 'https://www.ibcs-primax.com/'
      }
    ],
    description: 'Professional certification in Oracle Database 11g administration and development, covering installation, configuration, performance tuning, and troubleshooting.',
    highlights: [
      'Oracle Database 11g: SQL',
      'Oracle Database 11g: Administration I',
      'Oracle Database 11g: Administration II',
      'Database performance optimization'
    ]
  },
  {
    id: 'web-dev',
    title: 'Professional Web Design & Development',
    period: '2015',
    type: 'certification',
    institutions: [
      {
        name: 'BASIS Institute of Technology & Management',
        location: 'Dhaka, Bangladesh'
      }
    ],
    description: 'Comprehensive training in full-stack web development, covering front-end and back-end technologies.',
    highlights: [
      'HTML, CSS, JavaScript',
      'PHP and MySQL',
      'Responsive Web Design',
      'Web Application Development'
    ]
  },
  {
    id: 'bachelor',
    title: 'Bachelor of Science in Computer Science & Engineering (CSE)',
    period: '2011 - 2015',
    type: 'bachelor',
    institutions: [
      {
        name: 'Bangladesh University',
        location: 'Dhaka, Bangladesh',
        degree: 'B.Sc. in Computer Science & Engineering'
      }
    ],
    description: 'Foundation degree in computer science covering programming, algorithms, data structures, software engineering, and computer systems.',
    highlights: [
      'Programming and Algorithm Design',
      'Data Structures and Algorithms',
      'Software Engineering Principles',
      'Computer Networks and Security'
    ]
  }
];

const EducationPage: React.FC = () => {
  const getTypeBadge = (type: EducationDetail['type']) => {
    const badges = {
      'master': { label: 'Master\'s Degree', color: 'bg-blue-100 text-blue-800' },
      'summer-school': { label: 'Training Program', color: 'bg-green-100 text-green-800' },
      'certification': { label: 'Certification', color: 'bg-purple-100 text-purple-800' },
      'bachelor': { label: 'Bachelor\'s Degree', color: 'bg-indigo-100 text-indigo-800' }
    };
    return badges[type];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Education and Training</h1>
          </div>
          <p className="text-xl text-blue-100">
            International education journey across multiple countries and institutions
          </p>
        </div>
      </header>

      {/* Timeline Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>

          <div className="space-y-12">
            {educationHistory.map((education, index) => (
              <div key={education.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-4 top-8 w-9 h-9 bg-white rounded-full border-4 border-blue-500 shadow-lg flex items-center justify-center z-10">
                  <Award className="h-4 w-4 text-blue-600" />
                </div>

                {/* Content */}
                <div className="md:ml-24">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge className={getTypeBadge(education.type).color}>
                              {getTypeBadge(education.type).label}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {education.period}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-3">{education.title}</CardTitle>
                          <p className="text-gray-700">{education.description}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-6">
                      {/* Institutions */}
                      <div className="space-y-6 mb-6">
                        {education.institutions.map((inst, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            {inst.logo && (
                              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                                <img
                                  src={inst.logo}
                                  alt={`${inst.name} logo`}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {inst.url ? (
                                  <a
                                    href={inst.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 inline-flex items-center gap-1"
                                  >
                                    {inst.name}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  inst.name
                                )}
                              </h4>
                              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                <MapPin className="h-3 w-3" />
                                {inst.location}
                              </div>
                              {inst.degree && (
                                <p className="text-sm text-gray-700 font-medium">{inst.degree}</p>
                              )}
                              {inst.credits && (
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {inst.credits}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      {education.highlights && (
                        <div className="border-t pt-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-blue-600" />
                            Key Highlights
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {education.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;

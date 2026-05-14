/**
 * Central SEO configuration for the portfolio.
 * Edit values here once — every page, the sitemap, and structured data pick them up.
 */

export const SITE = {
  url: 'https://taiaburbd.github.io',
  name: 'Taiabur Rahman — Portfolio',
  shortName: 'Taiabur Rahman',
  defaultTitle: 'Taiabur Rahman — ML Engineer · Medical Imaging · Computer Vision',
  titleTemplate: '%s · Taiabur Rahman',
  defaultDescription:
    'Portfolio of Taiabur Rahman — Machine Learning Engineer specialising in Medical Imaging, Computer Vision, LLM / VLM and AI Agents. Open to opportunities in France and remote-worldwide.',
  defaultImage: '/images/icon.png',
  twitterHandle: '@taiaburbd',
  locale: 'en_US',
  themeColor: '#0a508c',
  author: {
    name: 'Taiabur Rahman',
    email: 'taiaburbd@gmail.com',
    jobTitle: 'Machine Learning Engineer',
    sameAs: [
      'https://github.com/taiaburbd',
      'https://www.linkedin.com/in/taiabur-rahman/',
      'https://www.upwork.com/fl/taiaburbd',
      'https://www.youtube.com/taiaburrahman',
    ],
  },
} as const;

export type SeoConfig = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
  keywords?: string[];
};

/** Build an absolute URL from a path. */
export const absUrl = (path = '/'): string => {
  if (!path) return SITE.url;
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`;
};

/** Build the final document title using the template. */
export const buildTitle = (title?: string): string => {
  if (!title) return SITE.defaultTitle;
  return SITE.titleTemplate.replace('%s', title);
};

/**
 * Per-route SEO presets. Add new routes here and the sitemap script will
 * also pick them up.
 */
export const ROUTES = {
  home: {
    path: '/',
    title: undefined, // uses defaultTitle
    description: SITE.defaultDescription,
    priority: 1.0,
    changefreq: 'weekly' as const,
  },
  academicProjects: {
    path: '/academic-projects',
    title: 'Academic Projects',
    description:
      'Research and academic projects in medical imaging, deep learning, computer vision and computer-aided diagnosis.',
    priority: 0.8,
    changefreq: 'monthly' as const,
  },
  challenges: {
    path: '/challenges',
    title: 'Hackathons & Challenges',
    description:
      'Hackathons, datathons and AI challenges — HACKUPC, Datathon IA4Care, bitsxlaMarató and more.',
    priority: 0.7,
    changefreq: 'monthly' as const,
  },
  education: {
    path: '/education',
    title: 'Education & Training',
    description:
      'Erasmus Mundus Master in Medical Imaging & Applications (MAIA), MSc in Software Engineering, BSc in Computer Science and continued summer / winter schools.',
    priority: 0.7,
    changefreq: 'monthly' as const,
  },
  photoGallery: {
    path: '/photo-gallery',
    title: 'Photo Gallery',
    description:
      'Photo gallery from conferences, summer schools, hackathons and life in academia and tech.',
    priority: 0.5,
    changefreq: 'monthly' as const,
  },
  insermProject: {
    path: '/projects/inserm-3d-seg',
    title: 'INSERM 3D Brain Segmentation',
    description:
      'INSERM Dijon research project — automated nnU-Net pipeline for high-resolution 3D histological mouse brain segmentation (PyTorch).',
    priority: 0.7,
    changefreq: 'yearly' as const,
  },
  trafficSimulation: {
    path: '/projects/traffic-simulation',
    title: 'Traffic Simulation Project',
    description:
      'Traffic simulation project — modelling, simulation and analysis of road traffic flow with computer-vision pipelines.',
    priority: 0.6,
    changefreq: 'yearly' as const,
  },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Static (non-React) HTML pages also indexed in the sitemap. */
export const STATIC_PAGES = [
  {
    path: '/cv/gen/Rahman_CV_2026_en.html',
    priority: 0.9,
    changefreq: 'monthly' as const,
    hreflang: 'en',
    alternates: [
      { hreflang: 'fr', href: '/cv/gen/Rahman_CV_2026_fr.html' },
      { hreflang: 'x-default', href: '/cv/gen/Rahman_CV_2026_en.html' },
    ],
  },
  {
    path: '/cv/gen/Rahman_CV_2026_fr.html',
    priority: 0.9,
    changefreq: 'monthly' as const,
    hreflang: 'fr',
    alternates: [
      { hreflang: 'en', href: '/cv/gen/Rahman_CV_2026_en.html' },
      { hreflang: 'x-default', href: '/cv/gen/Rahman_CV_2026_en.html' },
    ],
  },
] as const;

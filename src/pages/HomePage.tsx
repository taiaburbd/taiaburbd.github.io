import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Education from '../components/Education';
import Challenges from '../components/Challenges';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import JsonLd, { personSchema, websiteSchema } from '../components/JsonLd';
import { ROUTES } from '../lib/seo';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title={ROUTES.home.title}
        description={ROUTES.home.description}
        path={ROUTES.home.path}
        type="profile"
        keywords={[
          'Taiabur Rahman',
          'Machine Learning Engineer',
          'Medical Imaging',
          'Computer Vision',
          'LLM',
          'AI Agents',
          'Freelance',
          'Paris',
          'France',
        ]}
      />
      <JsonLd id="home" extra={[personSchema(), websiteSchema()]} />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Education />
      <Challenges />
      <Contact />
    </>
  );
};

export default HomePage;

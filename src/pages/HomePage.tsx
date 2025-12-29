import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Challenges from '../components/Challenges';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Projects />
      <Challenges />
      <Contact />
    </>
  );
};

export default HomePage;

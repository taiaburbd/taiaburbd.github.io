import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicProjectsPage from './pages/AcademicProjectsPage';
import ChallengesPage from './pages/ChallengesPage';
import EducationPage from './pages/EducationPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import InsermProjectPage from './pages/project-details/InsermProjectPage';
import TrafficSimulationPage from './pages/project-details/TrafficSimulationPage';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academic-projects" element={<AcademicProjectsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
            <Route path="/projects/inserm-3d-seg" element={<InsermProjectPage />} />
            <Route path="/projects/traffic-simulation" element={<TrafficSimulationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

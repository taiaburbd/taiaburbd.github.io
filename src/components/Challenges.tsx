import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import challengesData from '../data/challenges.json';

interface Challenge {
  title: string;
  date: string;
  description: string;
}

// Get first 3 challenges for home page
const challenges: Challenge[] = challengesData.challenges.slice(0, 3);

const Challenges: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-16 overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Challenges and Coding Contests</h2>
          <p className="text-lg text-gray-600">
            Participate in specialized datathons, hackathons, classification challenges and contests to sharpen coding skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-400"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{challenge.title}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">{challenge.date}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/challenges" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View All Challenges <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Challenges;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Trophy } from 'lucide-react';
import challengesData from '../data/challenges.json';
import AnimatedSection from './AnimatedSection';

interface Challenge {
  title: string;
  date: string;
  description: string;
  type?: string;
}

const challenges: Challenge[] = challengesData.challenges.slice(0, 3);

const typeColor: Record<string, string> = {
  hackathon: 'bg-violet-50 text-violet-700 border-violet-200',
  datathon:  'bg-blue-50 text-blue-700 border-blue-200',
  challenge: 'bg-amber-50 text-amber-700 border-amber-200',
  contest:   'bg-rose-50 text-rose-700 border-rose-200',
};

const Challenges: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Challenges &amp; Contests</h2>
            <div className="section-divider" />
            <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
              Hackathons, datathons, classification challenges, and coding contests that sharpen problem-solving skills.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 90}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 h-full flex flex-col">
                {/* Icon + type badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-indigo-500" />
                  </div>
                  {challenge.type && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${typeColor[challenge.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                      {challenge.type}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1">
                  {challenge.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                  {challenge.date}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {challenge.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <Link
              to="/challenges"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors duration-200"
            >
              View All Challenges <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Challenges;

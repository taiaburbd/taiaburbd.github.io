import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import challengesData from '../data/challenges.json';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface Challenge {
  title: string;
  date: string;
  description: string;
  type?: string;
}

const challenges: Challenge[] = challengesData.challenges.slice(0, 3);

const Challenges: React.FC = () => {
  return (
    <section className="section-y bg-white scroll-mt-14">
      <div className="page-wrap">
        <AnimatedSection>
          <SectionHeading
            index="06"
            title="Challenges"
            subtitle="Hackathons and datathons in health and imaging AI."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 60}>
              <div className="bg-white rounded-xl border border-slate-200 p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600">
                    {challenge.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar className="h-3 w-3" />
                    {challenge.date}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">{challenge.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{challenge.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={180}>
          <Link
            to="/challenges"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            All challenges <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Challenges;

import React from 'react';
import { Trophy, Award, Code, Brain, Calendar, MapPin, Users } from 'lucide-react';
import challengesData from '../data/challenges.json';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';

interface Challenge {
  id: string;
  title: string;
  date: string;
  description: string;
  organizer: string;
  location: string;
  logo?: string;
  photo?: string;
  video?: string;
  type: 'hackathon' | 'datathon' | 'challenge' | 'contest';
}

const challenges: Challenge[] = challengesData.challenges as Challenge[];

const typeIcon: Record<Challenge['type'], React.ReactNode> = {
  hackathon: <Code className="h-4 w-4" />,
  datathon:  <Brain className="h-4 w-4" />,
  challenge: <Trophy className="h-4 w-4" />,
  contest:   <Award className="h-4 w-4" />,
};

const typeColor: Record<Challenge['type'], string> = {
  hackathon: 'bg-violet-50 text-violet-700 border-violet-200',
  datathon:  'bg-blue-50 text-blue-700 border-blue-200',
  challenge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  contest:   'bg-amber-50 text-amber-700 border-amber-200',
};

const ChallengesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Page header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Challenges &amp; Contests</h1>
            <div className="w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mb-3" />
            <p className="text-gray-500 text-sm max-w-xl">
              Hackathons, datathons, classification challenges, and coding contests that sharpen problem-solving skills.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {challenges.map((challenge, index) => (
          <AnimatedSection key={challenge.id} delay={index * 60}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Logo */}
                {challenge.logo && (
                  <div className="flex-shrink-0 w-full md:w-28 h-28 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center p-4">
                    <img
                      src={challenge.logo}
                      alt={`${challenge.title} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

                {/* Main content */}
                <div className="flex-1 p-6">
                  {/* Title + badges */}
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h2 className="text-lg font-bold text-gray-900 flex-1 leading-snug">
                      {challenge.title}
                    </h2>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border capitalize flex-shrink-0 ${typeColor[challenge.type]}`}>
                      {typeIcon[challenge.type]}
                      {challenge.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {challenge.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {challenge.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {challenge.description}
                  </p>

                  {/* Organizer */}
                  <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-50 pt-3">
                    <Users className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-gray-400" />
                    <span><span className="font-medium text-gray-700">Organized by: </span>{challenge.organizer}</span>
                  </div>
                </div>
              </div>

              {/* Photo / Video — full width below */}
              {(challenge.photo || challenge.video) && (
                <div className="border-t border-gray-100 p-6 space-y-4">
                  {challenge.photo && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Event Photo</p>
                      <LazyImage
                        src={challenge.photo}
                        alt={`${challenge.title} event`}
                        className="w-full max-w-2xl rounded-xl object-cover"
                        containerClassName="w-full max-w-2xl rounded-xl max-h-72"
                      />
                    </div>
                  )}
                  {challenge.video && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Video</p>
                      <div className="relative w-full max-w-2xl rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={challenge.video}
                          title={`${challenge.title} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ChallengesPage;

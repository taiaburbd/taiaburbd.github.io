import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Trophy, Award, Code, Brain, Calendar, MapPin, Users } from 'lucide-react';
import challengesData from '../data/challenges.json';

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

const ChallengesPage: React.FC = () => {
  const getTypeIcon = (type: Challenge['type']) => {
    switch (type) {
      case 'hackathon':
        return <Code className="h-5 w-5" />;
      case 'datathon':
        return <Brain className="h-5 w-5" />;
      case 'challenge':
        return <Trophy className="h-5 w-5" />;
      case 'contest':
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeBadgeColor = (type: Challenge['type']) => {
    switch (type) {
      case 'hackathon':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'datathon':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'challenge':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'contest':
        return 'bg-orange-100 text-orange-800 border-orange-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Challenges and Coding Contests</h1>
          </div>
          <p className="text-xl text-blue-100">
            Participate in specialized datathons, hackathons, classification challenges and contests to sharpen coding skills.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Logo Section */}
                {challenge.logo && (
                  <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={challenge.logo}
                      alt={`${challenge.title} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{challenge.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={`flex items-center gap-1 ${getTypeBadgeColor(challenge.type)}`}>
                            {getTypeIcon(challenge.type)}
                            {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {challenge.date}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {challenge.location}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {challenge.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm text-gray-700">Organized by</p>
                          <p className="text-gray-600 text-sm">{challenge.organizer}</p>
                        </div>
                      </div>

                      {/* Photo Gallery */}
                      {challenge.photo && (
                        <div>
                          <p className="font-semibold text-sm text-gray-700 mb-2">Photo Gallery</p>
                          <img
                            src={challenge.photo}
                            alt={`${challenge.title} event`}
                            className="rounded-lg w-full max-w-2xl shadow-md"
                          />
                        </div>
                      )}

                      {/* Video Gallery */}
                      {challenge.video && (
                        <div>
                          <p className="font-semibold text-sm text-gray-700 mb-2">Video Gallery</p>
                          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
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
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Trophy, Award, Code, Brain, Calendar, MapPin, Users } from 'lucide-react';

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

const challenges: Challenge[] = [
  {
    id: 'hackupc-2024',
    title: 'HACKUPC 2024',
    date: 'May 2024',
    description: 'Automated brain MRI segmentation using deep learning approaches. Developed innovative solutions for medical image processing.',
    organizer: 'The Faculty of Informatics of Barcelona (FIB), Polytechnic University of Catalonia (UPC), Spain',
    location: 'Barcelona, Spain',
    logo: '/logos/hackupc_1.jpg',
    photo: '/photos/Hackathon_hackupc.jpg',
    type: 'hackathon'
  },
  {
    id: 'datathon-ia4care',
    title: 'Datathon IA4care',
    date: 'Apr 2024',
    description: 'Automated 3D segmentation of mouse brain histological images. Comparative Analysis for Hippocampus Segmentation in Mouse Brain using advanced AI techniques.',
    organizer: 'Eseo - Grande School D\'ingénieurs, University of Burgundy, Dijon, France',
    location: 'Dijon, France',
    logo: '/logos/Datathon.jpg',
    photo: '/photos/Datathon-2024.png',
    type: 'datathon'
  },
  {
    id: 'ct-registration',
    title: 'CT Image Registration Challenge',
    date: 'Jan 2024',
    description: '3D volume image registering CT lung scans of COPD patients. Focused on accurate alignment and analysis of pulmonary imaging data.',
    organizer: 'University of Girona, Spain',
    location: 'Girona, Spain',
    logo: '/logos/udg.png',
    type: 'challenge'
  },
  {
    id: 'bitsxlamarat',
    title: 'bitsxlaMarató 2023',
    date: 'Dec 2023',
    description: 'AI-based solution for respiratory illnesses and cancer diagnostics. Collaborated with teams to develop innovative healthcare solutions.',
    organizer: 'Faculty of Informatics of Barcelona (FIB), Barcelona Supercomputing Center (BSC), Catalonia, Spain',
    location: 'Barcelona, Spain',
    logo: '/logos/bitsxiamarato.png',
    type: 'hackathon'
  },
  {
    id: 'hackeps-2023',
    title: 'Lleidahack, HackEPS 2023',
    date: 'Nov 2023',
    description: 'AI-based solution for NLP (Natural Language Processing) and disease diagnostics. Built intelligent systems for healthcare applications.',
    organizer: 'Polytechnic School of the University of Lleida, Spain',
    location: 'Lleida, Spain',
    logo: '/logos/Datathon.jpg',
    photo: '/photos/hackeps.jpg',
    type: 'hackathon'
  },
  {
    id: 'classification-challenge',
    title: 'Classification Challenge',
    date: 'May 2023',
    description: 'Alzheimer\'s disease classification using MRIs and gene expression data. Applied machine learning techniques for medical diagnosis.',
    organizer: 'Italian National Research Council, Italy',
    location: 'Cassino, Italy',
    logo: '/logos/CNR.png',
    type: 'challenge'
  },
  {
    id: 'qaaspc',
    title: 'Quazi Azher Ali SAARC Programming Contest',
    date: 'Dec 2014',
    description: 'Problem solving - Data Structures and Algorithms. Competed in algorithmic challenges and optimization problems.',
    organizer: 'Bangladesh University, Dhaka, Bangladesh',
    location: 'Dhaka, Bangladesh',
    logo: '/logos/qaaspc.jpeg',
    photo: '/photos/bu_programming_contest.jpg',
    type: 'contest'
  }
];

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

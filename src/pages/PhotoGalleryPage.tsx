import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, X } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const photos: Photo[] = [
  {
    id: 'datathon-2024',
    src: '/photos/Datathon-2024.png',
    alt: 'Datathon 2024',
    title: 'Datathon 2024',
    description: 'Participated in Datathon 2024, working on data science challenges',
    category: 'Competition'
  },
  {
    id: 'hackupc',
    src: '/photos/Hackathon_hackupc.jpg',
    alt: 'HackUPC Hackathon',
    title: 'HackUPC Hackathon',
    description: 'HackUPC - One of Spain\'s largest student hackathons',
    category: 'Hackathon'
  },
  {
    id: 'bu-programming',
    src: '/photos/bu_programming_contest.jpg',
    alt: 'BU Programming Contest',
    title: 'Programming Contest',
    description: 'Competed in programming contest at university',
    category: 'Competition'
  },
  {
    id: 'hackeps',
    src: '/photos/hackeps.jpg',
    alt: 'HackEPS',
    title: 'HackEPS',
    description: 'HackEPS hackathon experience',
    category: 'Hackathon'
  }
];

const PhotoGalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(photos.map(p => p.category)))];
  
  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of memorable moments from hackathons, competitions, and academic events
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              className="overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {photo.description}
                </p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {photo.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No photos found in this category.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div 
              className="max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center text-white max-w-2xl">
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-300 mb-3">{selectedPhoto.description}</p>
                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full">
                  {selectedPhoto.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGalleryPage;

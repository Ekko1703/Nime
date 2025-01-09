import React from 'react';
import { Link } from 'react-router-dom';
import { mangaData } from '../data/manga';
import { Star, Book } from 'lucide-react';

export const Manga = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Manga</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mangaData.map((manga) => (
            <div key={manga.id} className="relative group">
              <Link to={`/manga/${manga.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
                  <img
                    src={manga.thumbnailUrl}
                    alt={manga.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-2 left-2 flex items-center bg-black/80 rounded-full px-3 py-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-medium">{manga.rating}</span>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
                    <Book className="w-3 h-3 mr-1" />
                    <span>Manga</span>
                  </div>

                  {/* Content Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="font-bold text-lg mb-2">{manga.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {manga.description}
                    </p>
                    <div className="mt-2 text-sm text-gray-300">
                      {manga.chapters.length} capítulos
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
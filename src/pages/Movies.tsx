import React from 'react';
import { useStore } from '../store/useStore';
import { ContentCarousel } from '../components/ContentCarousel';

export const Movies = () => {
  // Obtener todas las películas del store
  const contents = useStore((state) => state.contents);
  const movies = contents.filter(content => content.type === 'movie');

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Películas</h1>
        <ContentCarousel title="Todas las Películas" contents={movies} />
      </div>
    </div>
  );
};
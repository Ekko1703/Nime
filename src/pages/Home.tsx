import React from 'react';
import { ContentCarousel } from '../components/ContentCarousel';
import { useStore } from '../store/useStore';

export const Home = () => {
  const contents = useStore((state) => state.contents);

  const categories = [
    { title: 'Contenido', contents },

  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {categories.map((category, index) => (
          <ContentCarousel
            key={index}
            title={category.title}
            contents={category.contents}
          />
        ))}
      </div>
    </div>
  );
};
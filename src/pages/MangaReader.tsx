import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MangaReaderProps {
  pages: string[];
  chapterTitle: string;
}

export const MangaReader = ({ pages, chapterTitle }: MangaReaderProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{chapterTitle}</h1>
        
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="relative aspect-[2/3] overflow-hidden">
            <img
              src={pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 flex justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 bg-white/90 rounded-full disabled:opacity-50 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
              {currentPage + 1} / {pages.length}
            </span>
            
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="p-2 bg-white/90 rounded-full disabled:opacity-50 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
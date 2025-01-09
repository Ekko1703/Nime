import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { VideoPlayer } from '../components/VideoPlayer';
import { Plus, ThumbsUp, ThumbsDown, Play, Film, Tv } from 'lucide-react';
import { Content, Episode } from '../types';

export const ContentDetails = () => {
  const { id } = useParams();
  const contents = useStore((state) => state.contents);
  const content = contents.find((c) => c.id === id);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-xl">Contenido no encontrado</p>
      </div>
    );
  }

  const renderEpisodeList = (content: Extract<Content, { type: 'series' }>) => {
    const currentSeason = content.seasons.find(s => s.seasonNumber === selectedSeason);
    
    return (
      <div className="mt-8">
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-red-600">
          {content.seasons.map((season) => (
            <button
              key={season.seasonNumber}
              onClick={() => setSelectedSeason(season.seasonNumber)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 min-w-[120px] ${
                selectedSeason === season.seasonNumber
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Temporada {season.seasonNumber}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {currentSeason?.episodes.map((episode) => (
            <div
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors duration-200"
            >
              <div className="relative group flex-shrink-0">
                <img
                  src={episode.thumbnailUrl}
                  alt={episode.title}
                  className="w-48 h-27 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white">
                  {episode.episodeNumber}. {episode.title}
                </h3>
                <p className="text-gray-400 mt-1">{episode.duration}</p>
                <p className="text-gray-300 mt-2 line-clamp-2">{episode.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16 pb-24">
      <VideoPlayer
        videoUrl={
          content.type === 'series'
            ? selectedEpisode?.videoUrl || content.videoUrl
            : content.videoUrl
        }
        title={
          content.type === 'series'
            ? selectedEpisode?.title || content.title
            : content.title
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-white">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-4xl font-bold">{content.title}</h1>
            <span className="bg-red-600/90 text-white text-sm px-3 py-1 rounded-full flex items-center">
              {content.type === 'series' ? (
                <>
                  <Tv className="w-4 h-4 mr-1" />
                  <span>Serie</span>
                </>
              ) : (
                <>
                  <Film className="w-4 h-4 mr-1" />
                  <span>Película</span>
                </>
              )}
            </span>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-red-500 font-semibold">{content.year}</span>
            <div className="flex space-x-2">
              {content.genre.map((g, index) => (
                <React.Fragment key={g}>
                  <span className="text-gray-300">{g}</span>
                  {index < content.genre.length - 1 && (
                    <span className="text-gray-500">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
              <Plus className="w-5 h-5" />
              <span>Mi Lista</span>
            </button>
            
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <ThumbsUp className="w-5 h-5" />
            </button>
            
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <ThumbsDown className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {content.description}
          </p>
          
          {content.type === 'series' && renderEpisodeList(content)}
        </div>
      </div>
    </div>
  );
};
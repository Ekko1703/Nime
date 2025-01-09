import React from 'react';
import Slider from 'react-slick';
import { Content } from '../types';
import { Play, Plus, Star, Film, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ContentCarouselProps {
  title: string;
  contents: Content[];
}

export const ContentCarousel = ({ title, contents }: ContentCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4 text-white px-2 flex items-center">
        <span className="mr-2">{title}</span>
        <div className="h-1 w-16 bg-red-600 rounded"></div>
      </h2>
      <Slider {...settings}>
        {contents.map((content) => (
          <div key={content.id} className="px-2">
            <div className="relative group cursor-pointer">
              <Link to={`/watch/${content.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
                  <img
                    src={content.thumbnailUrl}
                    alt={content.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-2 left-2 flex items-center bg-black/80 rounded-full px-3 py-1 text-sm backdrop-blur-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-medium">{content.rating}</span>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
                    {content.type === 'series' ? (
                      <>
                        <Tv className="w-3 h-3 mr-1" />
                        <span>Serie</span>
                      </>
                    ) : (
                      <>
                        <Film className="w-3 h-3 mr-1" />
                        <span>Película</span>
                      </>
                    )}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="font-bold text-lg line-clamp-2 mb-2">
                      {content.title}
                    </h3>
                    <div className="flex items-center text-sm space-x-2 text-gray-300 mb-2">
                      <span className="font-semibold text-red-500">{content.year}</span>
                      <span>•</span>
                      <div className="flex space-x-2">
                        {content.genre.map((g, index) => (
                          <React.Fragment key={g}>
                            <span>{g}</span>
                            {index < content.genre.length - 1 && <span>•</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {content.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
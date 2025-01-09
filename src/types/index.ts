export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  episodeNumber: number;
  seasonNumber: number;
}

export interface Series extends Content {
  type: 'series';
  seasons: {
    seasonNumber: number;
    episodes: Episode[];
  }[];
}

export interface Movie extends Content {
  type: 'movie';
}

export type Content = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  genre: string[];
  year: number;
  rating: number;
} & ({ type: 'movie' } | { type: 'series'; seasons: { seasonNumber: number; episodes: Episode[]; }[] });
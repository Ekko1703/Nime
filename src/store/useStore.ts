import { create } from 'zustand';
import { Content, User } from '../types';

// Mock de contenido para la aplicación
const mockContents: Content[] = [
  {
    id: '1',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    description: 'Tanjiro Kamado es un joven que se convierte en cazador de demonios después de que su familia es asesinada y su hermana es transformada en demonio.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    videoUrl: 'https://drive.google.com/file/d/1YAuB8zEshZ7lwE3DsRQqPFWspBFuBfXU/view?usp=sharing',
    genre: ['Acción', 'Fantasía', 'Aventura'],
    year: 2024,
    type: 'series',
    rating: 4.8,
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 10 }, (_, i) => ({
          id: `s1e${i + 1}`,
          title: `EP${i + 1}: ${i === 0 ? 'Crueldad' : `Episodio ${i + 1}`}`,
          description: `Episodio ${i + 1} de la primera temporada de Demon Slayer.`,
          thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
          videoUrl: 'https://drive.google.com/file/d/1s6CV767tHG8f7lCntn-WEUKxWfHL9bGQ/view?usp=sharing',
          duration: '23m',
          episodeNumber: i + 1,
          seasonNumber: 1
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 10 }, (_, i) => ({
          id: `s2e${i + 1}`,
          title: `EP${i + 1}: ${i === 0 ? 'El Tren del Infinito' : `Episodio ${i + 1}`}`,
          description: `Episodio ${i + 1} de la segunda temporada de Demon Slayer.`,
          thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
          videoUrl: 'https://drive.google.com/file/d/1s6CV767tHG8f7lCntn-WEUKxWfHL9bGQ/view?usp=sharing',
          duration: '23m',
          episodeNumber: i + 1,
          seasonNumber: 2
        }))
      }
    ]
  },
  {
    id: '2',
    title: 'Attack on Titan',
    description: 'La humanidad lucha por sobrevivir contra gigantes que devoran humanos.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    videoUrl: 'https://drive.google.com/file/d/1s6CV767tHG8f7lCntn-WEUKxWfHL9bGQ/view?usp=sharing',
    genre: ['Acción', 'Drama', 'Fantasía'],
    year: 2023,
    type: 'series',
    rating: 4.9,
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 10 }, (_, i) => ({
          id: `aot_s1e${i + 1}`,
          title: `EP${i + 1}: ${i === 0 ? 'A Ti, 2000 Años en el Futuro' : `La Caída de Shiganshina ${i + 1}`}`,
          description: `Episodio ${i + 1} de la primera temporada de Attack on Titan.`,
          thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
          videoUrl: 'https://drive.google.com/file/d/1s6CV767tHG8f7lCntn-WEUKxWfHL9bGQ/view?usp=sharing',
          duration: '24m',
          episodeNumber: i + 1,
          seasonNumber: 1
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 10 }, (_, i) => ({
          id: `aot_s2e${i + 1}`,
          title: `EP${i + 1}: ${i === 0 ? 'Bestia' : `La Guerra Continúa ${i + 1}`}`,
          description: `Episodio ${i + 1} de la segunda temporada de Attack on Titan.`,
          thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
          videoUrl: 'https://drive.google.com/file/d/1s6CV767tHG8f7lCntn-WEUKxWfHL9bGQ/view?usp=sharing',
          duration: '24m',
          episodeNumber: i + 1,
          seasonNumber: 2
        }))
      }
    ]
  },




  // Películas
  {
    id: 'm1',
    title: 'Your Name',
    description: 'Your Name cuenta la historia de Taki, un estudiante de Tokio, y Mitsuha, una chica de un pueblo rural. Un día, ambos se despiertan en el cuerpo del otro sin saber por qué. Al principio, piensan que es un sueño, pero luego se dan cuenta de que es real.',
    thumbnailUrl: 'https://www.planetadelibros.com/usuaris/libros/fotos/246/original/portada_your-name-novela_makoto-shinkai_201703091007.jpg',
    videoUrl: 'https://drive.google.com/file/d/1YAuB8zEshZ7lwE3DsRQqPFWspBFuBfXU/view?usp=sharing',
    genre: ['Romance', 'Fantasía'],
    year: 2020,
    type: 'movie',
    rating: 5,
    duration: '1h 46m'
  },
  {
    id: 'm2',
    title: 'El Viaje de Chihiro',
    description: 'Una niña entra en un mundo mágico donde debe trabajar en una casa de baños para espíritus para salvar a sus padres.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586',
    videoUrl: 'https://drive.google.com/file/d/1YAuB8zEshZ7lwE3DsRQqPFWspBFuBfXU/view?usp=sharing',
    genre: ['Aventura', 'Fantasía'],
    year: 2020,
    type: 'movie',
    rating: 5,
    duration: '1h 46m'
  }
];

// Interfaz del store
interface Store {
  user: User | null;
  contents: Content[];
  setUser: (user: User | null) => void;
  addToWatchlist: (contentId: string) => void;
  removeFromWatchlist: (contentId: string) => void;
  addToHistory: (contentId: string) => void;
}

// Creación del store con Zustand
export const useStore = create<Store>((set) => ({
  user: null,
  contents: mockContents,
  setUser: (user) => set({ user }),
  addToWatchlist: (contentId) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            watchlist: [...state.user.watchlist, contentId],
          }
        : null,
    })),
  removeFromWatchlist: (contentId) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            watchlist: state.user.watchlist.filter((id) => id !== contentId),
          }
        : null,
    })),
  addToHistory: (contentId) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            history: [...state.user.history, contentId],
          }
        : null,
    })),
}));
// Datos de manga para la aplicación
export const mangaData = [
  {
    id: 'mg1',
    title: 'One Piece',
    description: 'Las aventuras de Monkey D. Luffy y su tripulación pirata en busca del tesoro más grande del mundo.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    type: 'manga',
    rating: 4.9,
    chapters: [
      {
        id: 'ch1',
        chapterNumber: 1,
        title: 'Romance Dawn',
        pages: Array.from({ length: 45 }, () => 'https://images.unsplash.com/photo-1578632767115-351597cf2477')
      },
      {
        id: 'ch2',
        chapterNumber: 2,
        title: 'El Hombre del Sombrero de Paja',
        pages: Array.from({ length: 40 }, () => 'https://images.unsplash.com/photo-1578632767115-351597cf2477')
      }
    ]
  },
  {
    id: 'mg2',
    title: 'Naruto',
    description: 'Un joven ninja con un espíritu indomable busca convertirse en el líder de su aldea.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    type: 'manga',
    rating: 4.8,
    chapters: [
      {
        id: 'ch1',
        chapterNumber: 1,
        title: 'Uzumaki Naruto',
        pages: Array.from({ length: 45 }, () => 'https://images.unsplash.com/photo-1578632767115-351597cf2477')
      },
      {
        id: 'ch2',
        chapterNumber: 2,
        title: 'Konohamaru',
        pages: Array.from({ length: 40 }, () => 'https://images.unsplash.com/photo-1578632767115-351597cf2477')
      }
    ]
  }
];
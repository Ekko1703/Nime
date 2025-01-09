import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  // Procesar la URL de Drive para obtener el ID del video
  const getVideoId = (url: string) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    return match ? match[1] : '';
  };

  // Construir la URL del embed de Drive con parámetros adicionales
  const getEmbedUrl = (url: string) => {
    const videoId = getVideoId(url);
    // Desactivar UI adicional y forzar reproducción en la página
    return `https://drive.google.com/file/d/${videoId}/preview?usp=drivesdk&embedded=true`;
  };

  return (
    <div className="relative w-full bg-black">
      <div className="relative pt-[56.25%]">
        <iframe
          src={getEmbedUrl(videoUrl)}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
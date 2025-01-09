import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Somos un equipo apasionado por el anime y el manga, dedicados a crear
              la mejor experiencia de streaming para los fans del contenido japonés.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 mb-6">
              Proporcionar una plataforma de alta calidad donde los amantes del anime
              y el manga puedan disfrutar de su contenido favorito de manera fácil y accesible.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600">
              Contamos con un equipo diverso de desarrolladores, diseñadores y entusiastas
              del anime que trabajan juntos para mejorar constantemente la plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
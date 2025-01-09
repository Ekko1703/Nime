import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Film, Tv, Book, User, Mail } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white bg-opacity-95 text-gray-800 py-4 px-6 z-50 md:top-0 md:bottom-auto shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
   
          <span className="text-xl font-bold hidden md:block">Nime</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          
          <Link to="/series" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Tv className="w-6 h-6" />
            <span className="text-xs mt-1">Series</span>
          </Link>
          
          <Link to="/movies" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Film className="w-6 h-6" />
            <span className="text-xs mt-1">Películas</span>
          </Link>
          
          <Link to="/manga" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Book className="w-6 h-6" />
            <span className="text-xs mt-1">Manga</span>
          </Link>
          
          <Link to="/about" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Sobre mí</span>
          </Link>
          
          <Link to="/contact" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Mail className="w-6 h-6" />
            <span className="text-xs mt-1">Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
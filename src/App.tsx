import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Series } from './pages/Series';
import { Movies } from './pages/Movies';
import { Manga } from './pages/Manga';
import { ContentDetails } from './pages/ContentDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { MangaReader } from './pages/MangaReader';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/watch/:id" element={<ContentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manga/:id" element={<MangaReader pages={[]} chapterTitle="" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
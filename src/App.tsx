import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
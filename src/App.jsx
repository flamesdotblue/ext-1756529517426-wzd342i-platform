import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingCTA from './components/BookingCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BookingCTA />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Spacy — Orbiting Luxury.</p>
          <div className="text-xs text-white/50">Crafted among the stars • Earth HQ + LEO</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

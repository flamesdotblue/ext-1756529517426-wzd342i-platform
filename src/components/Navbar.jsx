import React from 'react';
import { Rocket, Star, Calendar } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Star className="w-5 h-5 text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]" />
          </div>
          <span className="text-lg tracking-wide font-semibold">Spacy</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#booking">Booking</NavLink>
        </nav>
        <a
          href="#booking"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          <Calendar className="w-4 h-4" /> Reserve
        </a>
      </div>
    </header>
  );
}

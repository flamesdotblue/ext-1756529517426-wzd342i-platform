import React from 'react';
import { Wifi, Shield, Sparkles, Moon, Star } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Zero‑G Wellness',
    desc: 'Float therapy, starlight yoga, and cosmic spa rituals designed for deep restoration.'
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: 'Quantum Fast Wi‑Fi',
    desc: 'Beam-speed connectivity to keep you grounded while you orbit.'
  },
  {
    icon: <Moon className="w-5 h-5" />,
    title: 'Panoramic Domes',
    desc: 'Floor-to-ceiling views of Earthrise and the velvet night beyond.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Shielded Comfort',
    desc: 'State-of-the-art safety and radiation shielding for peaceful dreams among the stars.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6 text-white/70">
          <Star className="w-5 h-5 text-yellow-300" />
          <span className="text-sm tracking-wide uppercase">Amenities</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">A sanctuary among the stars</h2>
        <p className="mt-4 text-white/70 max-w-2xl">Every detail of Spacy is crafted for awe and ease—seamless docking, celestial dining, and experiences you will never forget.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

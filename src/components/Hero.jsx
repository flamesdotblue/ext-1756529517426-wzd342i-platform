import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YQb6zJN2i8LojRx/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_35%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start justify-center py-36 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now boarding: Winter season in Low Earth Orbit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-6 text-5xl md:text-7xl leading-[1.05] font-semibold tracking-tight"
          >
            Spacy: The Space Hotel
            <br />
            Where luxury meets the cosmos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl"
          >
            Wake up to an orbital sunrise, dine among the stars, and float into a new kind of serenity. Your suite awaits—above Earth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <Rocket className="w-4 h-4" /> Reserve your orbit
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors border border-white/15"
            >
              Explore amenities
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

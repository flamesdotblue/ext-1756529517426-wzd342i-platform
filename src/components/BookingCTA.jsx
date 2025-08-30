import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section id="booking" className="relative py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-10 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Reserve your orbit</h3>
              <p className="mt-3 text-white/70">Limited windows available each season. Choose your dates and crew size to begin your journey to Spacy.</p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <label className="relative flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white/80">
                <Calendar className="w-4 h-4 text-white/70" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none placeholder:text-white/50"
                  aria-label="Arrival date"
                />
              </label>

              <label className="relative flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white/80">
                <Calendar className="w-4 h-4 text-white/70" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none placeholder:text-white/50"
                  aria-label="Departure date"
                />
              </label>

              <label className="relative flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white/80">
                <User className="w-4 h-4 text-white/70" />
                <input
                  type="number"
                  min="1"
                  max="6"
                  defaultValue="2"
                  className="w-full bg-transparent outline-none placeholder:text-white/50"
                  aria-label="Guests"
                />
              </label>

              <button
                type="submit"
                className="sm:col-span-3 inline-flex items-center justify-center rounded-xl bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Check availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

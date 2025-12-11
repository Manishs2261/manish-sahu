import React from 'react';
import { Github, Linkedin, Layers } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#0f172a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {PROFILE.name}
          </h1>
          <h2 className="text-4xl md:text-6xl text-white font-medium mb-8">
            {PROFILE.role}
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
            Crafting exceptional mobile experiences for Android and iOS with nearly 2 years of expertise in Flutter, Dart, and Firebase. Passionate about clean code, innovative solutions, and continuous learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={PROFILE.socials.github}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/20"
            >
              View GitHub
            </a>
            <a 
              href={PROFILE.socials.linkedin}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/20"
            >
              LinkedIn
            </a>
            <a 
              href={PROFILE.socials.stackoverflow}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/20"
            >
              Stack Overflow
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
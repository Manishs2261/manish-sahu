import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a]" id="education">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Education & Academic Background
        </h2>
        <h3 className="text-2xl font-medium text-slate-300 mb-2">{EDUCATION.degree}</h3>
        <div className="text-teal-400 text-lg mb-16">{EDUCATION.university}</div>

        <div className="max-w-4xl text-slate-400 mb-20 leading-relaxed">
            {EDUCATION.description}
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-700 -translate-y-1/2 hidden md:block"></div>
            
            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative">
                {/* 2020 */}
                <div className="text-center md:flex-1 relative">
                    <div className="text-3xl font-bold text-white mb-4">2020</div>
                    <div className="hidden md:block w-4 h-4 bg-slate-600 rounded-sm mx-auto mb-6 relative z-10"></div>
                    <p className="text-slate-400 text-sm">Began Bachelor's program, focusing on programming fundamentals and computer science theory</p>
                </div>

                {/* 2021-2022 */}
                <div className="text-center md:flex-1 relative mt-12 md:mt-24">
                     <div className="hidden md:block w-4 h-4 bg-slate-600 rounded-sm mx-auto mb-6 relative z-10"></div>
                     <div className="text-3xl font-bold text-white mb-4">2021-2022</div>
                     <p className="text-slate-400 text-sm">Specialized in mobile development, learned Flutter and Dart, built first applications</p>
                </div>

                {/* 2023 */}
                <div className="text-center md:flex-1 relative">
                    <div className="text-3xl font-bold text-white mb-4">2023</div>
                    <div className="hidden md:block w-4 h-4 bg-slate-600 rounded-sm mx-auto mb-6 relative z-10"></div>
                    <p className="text-slate-400 text-sm">Graduated with honors, launched professional career in Flutter development</p>
                </div>

                {/* Present */}
                <div className="text-center md:flex-1 relative mt-12 md:mt-24">
                     <div className="hidden md:block w-4 h-4 bg-slate-600 rounded-sm mx-auto mb-6 relative z-10"></div>
                     <div className="text-3xl font-bold text-white mb-4">2024-Present</div>
                     <p className="text-slate-400 text-sm">Continuing professional growth through real-world projects and emerging technologies</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
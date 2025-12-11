import React from 'react';
import { PROFILE, CORE_VALUES } from '../constants';

const Summary: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a] border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Professional Summary</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              {PROFILE.summary}
            </p>
            <p>
              My development philosophy centers on writing clean, maintainable code that stands the test of time. I believe in continuous learning and staying current with the latest technologies and best practices in mobile development.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Core Values</h3>
            <ul className="space-y-4">
              {CORE_VALUES.map((value, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {value.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
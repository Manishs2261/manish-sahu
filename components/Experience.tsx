import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, CheckCircle, Database, Shield, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  // We handle the specific layout requirements by checking the job ID
  const fixingDots = EXPERIENCE.find(e => e.id === "exp_1");
  const riverhouse = EXPERIENCE.find(e => e.id === "exp_2");

  return (
    <section className="py-20 bg-[#0f172a]" id="experience">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* FixingDots Section */}
        {fixingDots && (
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Current Role: {fixingDots.role} at {fixingDots.company}
            </h2>
            <div className="text-xl text-slate-400 mb-8">{fixingDots.period} | {fixingDots.location}</div>
            
            <div className="max-w-4xl text-slate-300 text-lg leading-relaxed mb-12">
              <ul className="space-y-4">
                {fixingDots.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 min-w-[6px] h-[6px] rounded-full bg-teal-400 shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fixingDots.highlightCards?.map((card, i) => (
                <div key={i} className="bg-[#1e293b] p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-6">
                    {i === 0 && <Calendar className="text-teal-400" size={24} />}
                    {i === 1 && <MapPin className="text-teal-400" size={24} />}
                    {i === 2 && <Database className="text-teal-400" size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Riverhouse Section */}
        {riverhouse && (
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Previous Experience: {riverhouse.role} at {riverhouse.company}
            </h2>
            <div className="text-xl text-slate-400 mb-16">{riverhouse.period} | {riverhouse.location}</div>

            {riverhouse.subProjects?.map((project, idx) => (
              <div key={idx} className="mb-24 last:mb-0">
                <div className="mb-12">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-4 inline-block">
                     {project.name}
                   </h3>
                   <p className="text-slate-300 text-lg max-w-3xl">
                     {project.description}
                   </p>
                </div>

                {project.columns ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                    {project.columns.map((col, cIdx) => (
                      <div key={cIdx}>
                        <div className="text-teal-500 text-sm font-bold mb-2">0{cIdx + 1}</div>
                        <h4 className="text-xl font-bold text-white mb-3">{col.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{col.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                   /* For Wiki-Fortune illustration placeholder */
                   <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
                      <div className="flex-1">
                        <p className="text-slate-400 leading-relaxed mb-6">
                          Collaborated closely with the UI/UX design team to ensure perfect alignment with brand aesthetics and to maximize user engagement through thoughtful design decisions and user-centered approaches.
                        </p>
                      </div>
                      <div className="flex-1 w-full max-w-sm mx-auto bg-gradient-to-br from-blue-600 to-teal-500 rounded-full aspect-square p-1">
                         <div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center overflow-hidden relative">
                             {/* Abstract phone UI representation */}
                             <div className="w-32 h-56 bg-slate-800 rounded-2xl border-4 border-slate-700 shadow-2xl flex flex-col items-center justify-center p-2 relative z-10">
                                <div className="w-full h-20 bg-teal-500/20 rounded-lg mb-2"></div>
                                <div className="w-full h-full bg-slate-700/50 rounded-lg"></div>
                                <div className="absolute -right-12 top-10 bg-white p-2 rounded-lg shadow-lg">
                                  <Heart size={16} className="text-red-500" />
                                </div>
                             </div>
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay"></div>
                         </div>
                      </div>
                   </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
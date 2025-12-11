import React from 'react';
import { SKILLS_BREAKDOWN } from '../constants';
import { Database, Layout, Smartphone, Cloud } from 'lucide-react';

const SkillsBreakdown: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Technical Skills Breakdown</h2>
        <p className="text-slate-400 text-lg max-w-4xl mb-16">
          My technical skill set represents a comprehensive mastery of modern mobile development technologies, tools, and frameworks.
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          {SKILLS_BREAKDOWN.map((cat, idx) => (
            <div key={idx} className="bg-[#1e293b] border border-slate-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
               <div className="md:w-64 shrink-0 flex items-center gap-4">
                  {idx === 0 && <Smartphone className="text-slate-400" />}
                  {idx === 1 && <Database className="text-slate-400" />}
                  {idx === 2 && <Layout className="text-slate-400" />}
                  {idx === 3 && <Cloud className="text-slate-400" />}
                  <h3 className="text-xl font-bold text-white">{cat.category}</h3>
               </div>
               
               <ul className="space-y-2 flex-1 border-l border-slate-700 pl-6 md:pl-12">
                 {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-slate-300 text-sm list-disc">
                        {skill}
                    </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBreakdown;
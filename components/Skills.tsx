import React from 'react';
import { TECHNICAL_EXPERTISE as SKILLS } from '../constants';
import { Cpu, Database, Layers, Smartphone, PenTool } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages & Core':
      case 'Flutter & Dart': return <Cpu size={20} />;
      case 'Mobile Frameworks': return <Smartphone size={20} />;
      case 'State Management': return <Layers size={20} />;
      case 'Backend & Cloud': 
      case 'Backend & Database': return <Database size={20} />;
      case 'Deployment & Tools': return <PenTool size={20} />;
      default: return <PenTool size={20} />;
    }
  };

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                {getIcon(skillGroup.category)}
                <h3 className="font-semibold text-lg text-slate-800">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-white text-slate-700 text-sm border border-slate-200 rounded-md shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
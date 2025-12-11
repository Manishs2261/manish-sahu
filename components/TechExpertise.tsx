import React from 'react';
import { TECHNICAL_EXPERTISE } from '../constants';
import { Layout, Clock, Cloud, PenTool } from 'lucide-react';

const TechExpertise: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'layout': return <Layout size={40} className="text-teal-400" />;
      case 'clock': return <Clock size={40} className="text-teal-400" />;
      case 'cloud': return <Cloud size={40} className="text-teal-400" />;
      default: return <PenTool size={40} className="text-teal-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0f172a]" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Technical Expertise</h2>
        <p className="text-slate-400 text-lg max-w-4xl mb-16">
          My technical toolkit encompasses a comprehensive range of modern mobile development technologies and frameworks, enabling me to build robust, scalable applications from concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TECHNICAL_EXPERTISE.map((category, idx) => (
            <div key={idx} className="bg-transparent group">
              <div className="mb-6 inline-block p-4 rounded-xl border border-teal-500/30 bg-teal-500/10">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
              <p className="text-slate-400 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
import React from 'react';
import { Brain, Code, PenTool, Rocket } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Development Approach & Methodology</h2>
        <p className="text-slate-400 text-lg max-w-4xl mb-16">
          My development approach is rooted in industry best practices and a commitment to delivering exceptional results. I believe that great applications are built through a combination of technical excellence, user-centered design, and collaborative teamwork.
        </p>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Planning */}
            <div className="bg-[#1e293b] p-8 rounded-lg border-l-4 border-slate-600 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10"><Brain size={64} /></div>
                <h3 className="text-xl font-bold text-white mb-2">Planning & Analysis</h3>
                <p className="text-slate-400 text-sm">Thorough requirement gathering and technical planning to establish clear project goals and architecture decisions.</p>
            </div>

            {/* Design */}
            <div className="bg-[#1e293b] p-8 rounded-lg border-l-4 border-slate-600 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10"><PenTool size={64} /></div>
                <h3 className="text-xl font-bold text-white mb-2">Design & Prototyping</h3>
                <p className="text-slate-400 text-sm">Creating intuitive user interfaces and interactive prototypes that align with user needs and business objectives.</p>
            </div>

            {/* Development */}
            <div className="bg-[#1e293b] p-8 rounded-lg border-l-4 border-slate-600 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10"><Code size={64} /></div>
                <h3 className="text-xl font-bold text-white mb-2">Development & Testing</h3>
                <p className="text-slate-400 text-sm">Writing clean, maintainable code with comprehensive testing to ensure reliability and performance.</p>
            </div>

             {/* Deployment */}
             <div className="bg-[#1e293b] p-8 rounded-lg border-l-4 border-slate-600 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10"><Rocket size={64} /></div>
                <h3 className="text-xl font-bold text-white mb-2">Deployment & Support</h3>
                <p className="text-slate-400 text-sm">Seamless deployment to app stores with ongoing maintenance and feature enhancements.</p>
            </div>
        </div>

        {/* Code Quality Philosophy */}
        <div className="bg-teal-900/30 border border-teal-800 p-8 rounded-xl flex items-start gap-4">
            <div className="mt-1 text-teal-400">
                <Code size={24} />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-2">Code Quality Philosophy</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                    I prioritize writing clean, well-documented code that follows SOLID principles and design patterns. This approach ensures that applications remain maintainable and scalable as they grow, making it easier for teams to collaborate and extend functionality over time.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
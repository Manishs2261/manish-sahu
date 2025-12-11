import React from 'react';
import { PROJECTS } from '../constants';
import { CheckCircle, Github, Download } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProject = PROJECTS[0];

  return (
    <section className="py-20 bg-[#0f172a]" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Featured Project: {featuredProject.name}
        </h2>

        <div className="mb-16 text-slate-300 text-lg max-w-4xl">
          {featuredProject.description}
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProject.processSteps?.map((step, idx) => (
            <div key={idx} className="relative p-8 border border-slate-700 bg-[#1e293b] rounded-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#0f172a]">
                {step.step}
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
            <ul className="space-y-3">
              {featuredProject.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="min-w-[6px] h-[6px] rounded-full bg-slate-500"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Project Links</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-slate-300 border-b border-slate-800 pb-2">
                <span>GitHub Repository:</span>
                <a href={featuredProject.repoLink} className="text-teal-400 hover:text-teal-300 truncate ml-4">
                  {featuredProject.repoLink}
                </a>
              </div>
              <div className="flex items-center justify-between text-slate-300 border-b border-slate-800 pb-2">
                <span>Google Play Store:</span>
                <span className="text-slate-500">Coming Soon</span>
              </div>
              <div className="mt-8">
                 <button className="text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                   Download Appixo <Download size={16} />
                 </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
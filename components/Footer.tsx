import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a] border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Let's Build Something Amazing Together
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="flex-1 space-y-8">
            <p className="text-slate-300 leading-relaxed">
              I'm passionate about creating mobile applications that make a difference. Whether you're looking to build a new application from scratch, enhance an existing product, or need expertise in Flutter development, I'm here to help bring your vision to life.
            </p>
            
            <div>
               <h3 className="text-xl font-bold text-white mb-4">What I Offer:</h3>
               <ul className="space-y-3">
                 {["Full-cycle mobile app development", "Clean, maintainable code architecture", "Seamless API and backend integration", "App Store and Play Store deployment", "Collaborative, communicative approach"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="bg-teal-900/20 border border-teal-800/50 p-6 rounded-lg">
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <span className="w-4 h-4 border border-white rounded-sm"></span>
                 Ready to Start Your Project?
               </h4>
               <p className="text-slate-400 text-sm">I'm always excited to discuss new opportunities and challenges. Let's connect.</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
             {/* Illustration Placeholder */}
             <div className="w-full max-w-md aspect-square bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20"></div>
                 <div className="text-center p-8 z-10">
                    <div className="text-8xl mb-4">🤝</div>
                    <p className="text-slate-400">Collaboration & Partnership</p>
                 </div>
             </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
           <div>
             <div className="text-5xl font-bold text-white mb-2">2</div>
             <div className="text-xl text-slate-300 mb-1">Years Experience</div>
             <div className="text-sm text-slate-500">Professional Flutter development</div>
           </div>
           <div>
             <div className="text-5xl font-bold text-white mb-2">10+</div>
             <div className="text-xl text-slate-300 mb-1">Technologies</div>
             <div className="text-sm text-slate-500">Mastered and actively used</div>
           </div>
           <div>
             <div className="text-5xl font-bold text-white mb-2">100%</div>
             <div className="text-xl text-slate-300 mb-1">Commitment</div>
             <div className="text-sm text-slate-500">To quality and excellence</div>
           </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-20">
          <button className="px-8 py-4 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors">
            View My Work
          </button>
          <button className="px-8 py-4 border border-teal-600 text-teal-400 rounded-md font-medium hover:bg-teal-900/20 transition-colors">
            Download Appixo
          </button>
        </div>

        <div className="flex justify-end">
            <div className="bg-white text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full">
                Made with REACT & TAILWIND
            </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
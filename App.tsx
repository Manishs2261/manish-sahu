import React from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import TechExpertise from './components/TechExpertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import SkillsBreakdown from './components/SkillsBreakdown';
import Education from './components/Education';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-teal-900 selection:text-teal-100">
      
      {/* Navigation - simplified for this design */}
      <nav className="absolute top-0 left-0 right-0 z-40 py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
            {/* Logo placeholder if needed */}
            <div></div>
        </div>
      </nav>

      <main>
        <Hero />
        <Summary />
        <TechExpertise />
        <Experience />
        <Projects />
        <Methodology />
        <SkillsBreakdown />
        <Education />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
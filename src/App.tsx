import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        {/* Main grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96, 165, 250, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Larger grid lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '96px 96px'
          }}
        />

        {/* Subtle radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.5) 100%)'
          }}
        />

        {/* Notebook margin line */}
        <div 
          className="absolute left-[64px] top-0 bottom-0 w-px bg-blue-400/10"
          style={{
            boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Cursor />
        <Navigation />
        <main className="pt-16">
          <Hero />
          <AboutMe />
          <Education />
          <Projects />
          <Socials />
        </main>
      </div>

      {/* Subtle vignette effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, transparent 0%, rgba(15, 23, 42, 0.1) 100%),
            radial-gradient(circle at 50% 100%, transparent 0%, rgba(15, 23, 42, 0.1) 100%)
          `
        }}
      />
    </div>
  );
}

export default App;

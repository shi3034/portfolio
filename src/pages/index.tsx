import React from 'react';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Socials from '../components/Socials';

const Home = () => {
  return (
    <main className="bg-slate-900 text-slate-100">
      <div className="flex flex-col gap-20">
        <Education />
        <Projects />
        <Socials />
      </div>
    </main>
  );
};

export default Home; 
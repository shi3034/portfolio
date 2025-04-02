import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import AboutMe from './AboutMe';

const Notebook = () => {
  return (
    <div className="notebook-paper min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AboutMe />
      </motion.div>
    </div>
  );
};

export default Notebook; 
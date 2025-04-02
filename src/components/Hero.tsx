import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import FloatingElements from './FloatingElements';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden"
      id="hero"
    >
      {/* Add FloatingElements before the main content */}
      <FloatingElements />

      <div className="max-w-4xl w-full space-y-8 text-center relative z-10">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold hand-drawn text-slate-100">
            Shivangi Srivastva
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 hand-drawn">
            Innovative AI Developer and Creative Coder
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-100 shadow-lg"
        >
          <img
            src="/assets/profile.png"
            alt="Shivangi Srivastva"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.p 
            className="text-lg text-slate-300 hand-drawn max-w-2xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Welcome to my digital notebook, where AI meets creativity and ideas sketch themselves into reality. I build intelligent systems, design seamless experiences, and love turning imagination into innovation. Flip the page to explore!
          </motion.p>
          
          <motion.button
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-slate-300 animate-bounce mt-8"
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      {/* Keep the existing decorative elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-slate-300 rounded-lg transform rotate-12" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-slate-300 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-slate-300 transform -rotate-12" />
      </motion.div>
    </motion.section>
  );
};

export default Hero; 
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <motion.div
        className="absolute w-8 h-8 border-2 border-blue-400/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '15%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-6 h-6 border-2 border-slate-400/30"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '60%', right: '15%' }}
      />

      <motion.div
        className="absolute w-4 h-4 bg-blue-400/10 rounded-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '30%', right: '30%' }}
      />

      {/* Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-400/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Code symbols */}
      <motion.div
        className="absolute text-blue-400/20 text-2xl font-mono"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '40%', left: '25%' }}
      >
        {'{ }'}
      </motion.div>

      <motion.div
        className="absolute text-slate-400/20 text-2xl font-mono"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '25%', right: '20%' }}
      >
        {'< />'}
      </motion.div>
    </div>
  );
};

export default FloatingElements; 
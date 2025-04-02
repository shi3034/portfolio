import React from 'react';
import { motion } from 'framer-motion';

const UnifiedBackground = () => {
  // Matrix-style characters
  const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ10";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-sm text-blue-400 font-matrix"
            initial={{ y: -100, x: (i / 25) * window.innerWidth }}
            animate={{
              y: [null, window.innerHeight + 100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {Array.from({ length: 25 }).map((_, j) => (
              <motion.div
                key={j}
                animate={{
                  opacity: [0, 1, 0],
                  color: ["#60a5fa", "#93c5fd", "#60a5fa"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: j * 0.1
                }}
              >
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating code snippets */}
      {[
        "const AI = new Intelligence();",
        "model.train(data);",
        "def process_data():",
        "class Neural extends Network {",
        "import tensorflow as tf",
        "npm install future",
        "git commit -m 'AI Magic'",
        "python train.py",
        "docker run ai-model",
      ].map((snippet, index) => (
        <motion.div
          key={`code-${index}`}
          className="absolute text-blue-400/10 font-mono text-sm whitespace-nowrap"
          initial={{ x: -100, y: Math.random() * window.innerHeight }}
          animate={{
            x: [null, window.innerWidth + 100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: index * 3,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10h30v30h-30z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-400"
            />
            <circle cx="10" cy="10" r="2" className="fill-blue-400" />
            <circle cx="40" cy="40" r="2" className="fill-blue-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/50" />
    </div>
  );
};

export default UnifiedBackground; 
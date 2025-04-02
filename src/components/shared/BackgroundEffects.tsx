import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  type: 'education' | 'projects' | 'socials';
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ type }) => {
  // Shared animation configs
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const renderEducationEffects = () => (
    <>
      {/* Floating books and graduation caps */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, i % 2 === 0 ? 360 : -360, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            left: `${15 + (i * 10)}%`,
            top: `${20 + (i * 8)}%`,
          }}
        >
          <div className={`text-blue-400/20 text-2xl ${i % 2 === 0 ? '🎓' : '📚'}`}>
            {i % 2 === 0 ? '🎓' : '📚'}
          </div>
        </motion.div>
      ))}
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern
            id="education-circuit"
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
          </pattern>
          <rect width="100%" height="100%" fill="url(#education-circuit)" />
        </svg>
      </div>
    </>
  );

  const renderProjectsEffects = () => (
    <>
      {/* Code snippets floating */}
      {[
        "</>",
        "{ }",
        "def()",
        "import",
        "class",
        "const",
        "async",
        "=>",
      ].map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/20 font-mono text-xl"
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 30 : -30, 0],
            rotate: [0, i % 2 === 0 ? 180 : -180, 0],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${15 + (i * 10)}%`,
          }}
        >
          {snippet}
        </motion.div>
      ))}
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-blue-500/30" 
             style={{
               backgroundImage: 'radial-gradient(circle, #60A5FA 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
        />
      </div>
    </>
  );

  const renderSocialsEffects = () => (
    <>
      {/* Connection lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-blue-400 to-transparent"
            style={{
              width: '100%',
              top: `${20 + (i * 15)}%`,
              transform: `rotate(${-30 + (i * 15)}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Floating connection nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {type === 'education' && renderEducationEffects()}
      {type === 'projects' && renderProjectsEffects()}
      {type === 'socials' && renderSocialsEffects()}
    </div>
  );
};

export default BackgroundEffects; 
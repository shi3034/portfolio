import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Users, Award, Lightbulb, Terminal, GitBranch, Database, Cpu, Cloud } from 'lucide-react';
import GridBackground from './shared/GridBackground';

// Matrix-style characters
const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ10";

// Code snippets
const codeSnippets = [
  "def train_model(data):",
  "model = tf.keras.Sequential()",
  "import torch.nn as nn",
  "async function processData()",
  "<TensorFlow.Provider>",
  "git push origin main",
  "npm run build",
  "python train.py",
  "docker-compose up",
  "kubectl apply -f",
  "class NeuralNetwork(nn.Module):",
  "const ai = new AI()",
];

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate-900" id="about">
      <GridBackground />
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-sm text-green-400 font-matrix"
            initial={{ y: -100, x: (i / 20) * window.innerWidth }}
            animate={{
              y: [null, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <motion.div
                key={j}
                animate={{
                  opacity: [0, 1, 0],
                  color: ["#4ade80", "#60a5fa", "#4ade80"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: j * 0.1
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={`code-${index}`}
            className="absolute hand-drawn text-sm"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 1, 0],
              x: [-100, window.innerWidth + 100],
              y: [index * 80],
              color: ["#60a5fa", "#4ade80", "#60a5fa"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear"
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
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

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12">
          <h2 className="text-4xl hand-drawn text-blue-400 mb-4">About Me</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400/30 mx-auto rounded-full"
            whileInView={{
              scaleX: [0, 1],
              opacity: [0, 1]
            }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Laptop Frame */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          variants={containerVariants}
        >
          {/* Laptop Lid (Screen) */}
          <div className="relative bg-slate-800 rounded-t-2xl p-4 border-t-8 border-x-8 border-slate-700">
            {/* Camera and Status Lights */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/50 animate-pulse"></div>
            </div>

            {/* Screen Content */}
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] shadow-inner">
              {/* Terminal-like header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm text-slate-400 font-mono ml-4">about.md</div>
              </div>

              {/* Content with improved visibility */}
              <div className="space-y-6 leading-relaxed relative">
                <motion.p 
                  className="text-lg text-slate-100 font-normal"
                  variants={paragraphVariants}
                >
                  Hi, I'm Shivangi Srivastva, a passionate AI & Machine Learning developer with a knack for building intelligent solutions. With experience in full-stack web development, data science, and deep learning, I thrive on solving real-world problems through technology. I've participated in prestigious hackathons like Smart India Hackathon and Google Girl Hackathon, where I built impactful AI-driven projects.
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-100 font-normal"
                  variants={paragraphVariants}
                >
                  As a leader and mentor, I've contributed to multiple technical communities, including Artificial Intelligence Society and GeeksForGeeks. My expertise spans Python, Java, TensorFlow, cloud computing, and serverless architectures, and I love experimenting with emerging technologies.
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-100 font-normal"
                  variants={paragraphVariants}
                >
                  Beyond coding, I enjoy quizzing, competitive tech events, and knowledge-sharing through workshops.
                </motion.p>

                {/* Blinking cursor */}
                <motion.span 
                  className="inline-block w-2 h-5 bg-blue-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative">
            <div className="bg-slate-700 h-3 rounded-b-lg"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-slate-600 rounded-lg"></div>
            {/* Laptop shadow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-blue-400/10 blur-lg rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe; 
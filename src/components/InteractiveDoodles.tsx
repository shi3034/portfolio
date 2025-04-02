import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Moon, 
  Bug, 
  Book, 
  Coffee
} from 'lucide-react';

interface Doodle {
  icon: React.ElementType;
  fact: string;
  position: { x: number; y: number };
  rotation: number;
  emoji?: string;
}

const doodles: Doodle[] = [
  {
    icon: Brain,
    fact: "I built my first AI project using TensorFlow before I even fully understood deep learning! 🧠🤖",
    position: { x: 25, y: 30 },
    rotation: -15,
    emoji: "🧠"
  },
  {
    icon: Moon,
    fact: "I once debugged an entire project at 3 AM, and it magically worked in the morning! 🌙💻",
    position: { x: 70, y: 40 },
    rotation: 12,
    emoji: "🌙"
  },
  {
    icon: Bug,
    fact: "The first website I built had more console errors than actual features! 🤦‍♀️📜",
    position: { x: 20, y: 70 },
    rotation: 5,
    emoji: "🐛"
  },
  {
    icon: Book,
    fact: "If I'm not coding, you'll find me lost in a book—thrillers and romance are my go-to genres! 📚💕",
    position: { x: 65, y: 75 },
    rotation: -8,
    emoji: "📚"
  },
  {
    icon: Coffee,
    fact: "Coffee is my debugging partner! ☕",
    position: { x: 45, y: 55 },
    rotation: 10,
    emoji: "☕"
  }
];

const InteractiveDoodles: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute group"
          style={{
            left: `${doodle.position.x}%`,
            top: `${doodle.position.y}%`,
            transform: `rotate(${doodle.rotation}deg)`
          }}
          whileHover={{ scale: 1.2 }}
        >
          {/* Doodle Icon with Emoji */}
          <motion.div
            className="relative z-10 cursor-pointer"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              scale: [1, 1.2, 1.1]
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <doodle.icon 
              size={28} 
              className="text-blue-400 transform transition-transform group-hover:text-blue-300"
            />
            <motion.span
              className="absolute -top-2 -right-2 text-sm opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              {doodle.emoji}
            </motion.span>
          </motion.div>

          {/* Hidden Fact Card */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          >
            <div className="relative">
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-blue-400/30">
                <p className="text-sm hand-drawn text-slate-300 text-center leading-relaxed">
                  {doodle.fact}
                </p>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 border-r border-b border-blue-400/30 transform rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveDoodles; 
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Database } from 'lucide-react';
import SectionLayout from './shared/SectionLayout';
import BackgroundEffects from './shared/BackgroundEffects';
import GridBackground from './shared/GridBackground';

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <SectionLayout title="Education" id="education">
      <div className="space-y-6 relative z-20">
        {/* KIIT */}
        <motion.div 
          variants={itemVariants}
          className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-400/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl text-slate-100 font-semibold">
                Kalinga Institute of Industrial Technology
              </h3>
              <p className="text-blue-400 mt-1">
                Bachelor of Technology in Computer Science and Engineering
              </p>
            </div>
          </div>
        </motion.div>

        {/* IIT Guwahati */}
        <motion.div 
          variants={itemVariants}
          className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-400/10 rounded-lg">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl text-slate-100 font-semibold">
                Credit-Linked Program in Data Science from IIT Guwahati
              </h3>
              <p className="text-blue-400 mt-1">
                Minor in Data Science
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Education; 
import React from 'react';
import { motion } from 'framer-motion';
import GridBackground from './GridBackground';

interface SectionLayoutProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const SectionLayout = ({ title, id, children }: SectionLayoutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-[70vh] py-8 px-4 relative bg-slate-900" id={id}>
      <GridBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        className="max-w-4xl mx-auto relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="mb-6 text-center relative"
          variants={titleVariants}
        >
          <div className="absolute inset-0 bg-slate-900/80 blur-xl rounded-full transform -translate-y-1/2" />
          
          <h2 className="text-4xl font-bold text-blue-400 mb-2 relative hand-drawn">
            {title}
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full relative"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5, delay: 0.3 }
            }
          }}
          className="space-y-4"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionLayout; 
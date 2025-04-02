import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from './shared/GridBackground';
import SectionLayout from './shared/SectionLayout';

const projects = [
  {
    id: 1,
    title: "Healthcare Management System",
    description: "Developed a real-time healthcare management system integrating live health tracking, instant doctor consultations, and AI-powered health insights.",
    image: "/images/healthcare-system.png",
  },
  {
    id: 2,
    title: "Predicting Hospital Stay Length",
    description: "Developed a hospital stay prediction model using Logistic Regression, Multi-Layer Perceptron (MLP), Random Forest, Gradient Boosting, and XGBoost",
    image: "/images/hospital-prediction.png",
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <SectionLayout title="Projects" id="projects">
      <div className="relative z-20">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="relative aspect-video">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl text-slate-100 font-semibold">
                  {projects[currentProject].title}
                </h3>
                <p className="text-slate-300">
                  {projects[currentProject].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)}
              className="px-4 py-2 bg-blue-400/20 rounded-lg hover:bg-blue-400/30 transition-colors text-white"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)}
              className="px-4 py-2 bg-blue-400/20 rounded-lg hover:bg-blue-400/30 transition-colors text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Projects; 
import React from 'react';
import { motion } from 'framer-motion';

const VoiceIndicator = () => {
  return (
    <div className="flex justify-center items-center gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-4 bg-blue-500 rounded"
          animate={{
            height: [4, 16, 4],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default VoiceIndicator; 
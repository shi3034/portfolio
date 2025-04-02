import React from 'react';

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Main grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(96, 165, 250, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96, 165, 250, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Larger grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px'
        }}
      />

      {/* Subtle radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.5) 100%)'
        }}
      />

      {/* Notebook margin line */}
      <div 
        className="absolute left-[64px] top-0 bottom-0 w-px bg-blue-400/10"
        style={{
          boxShadow: '0 0 15px rgba(96, 165, 250, 0.1)'
        }}
      />
    </div>
  );
};

export default GridBackground; 
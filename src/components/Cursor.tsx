import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updatePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop for smoother cursor movement
    const animate = () => {
      // Smooth interpolation
      const easeFactor = 0.15; // Adjust this value to change cursor smoothness (0.1 to 0.2 is good)
      
      // Calculate the distance between current position and target
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      // Update cursor position with easing
      cursorX += dx * easeFactor;
      cursorY += dy * easeFactor;
      
      setPosition({ x: cursorX, y: cursorY });
      requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Show cursor when component mounts
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Inner dot - follows cursor exactly */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear"
        }}
      />
      
      {/* Outer ring - smooth follow */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isActive ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear",
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20
          },
          opacity: { duration: 0.2 }
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotate: isActive ? 45 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-50" />
          <div className="absolute inset-2 border border-blue-400 rounded-full opacity-30" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Cursor; 
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      const target = event.target as HTMLElement;
      if (target.closest('a, button')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12, // Centered for 24px size
      y: mousePosition.y - 12,
      backgroundColor: 'rgba(0, 234, 255, 0.11)',
      border: '2px solid rgba(3, 220, 253, 1)',
    },
    hovering: {
      x: mousePosition.x - 16, // Centered for 32px size
      y: mousePosition.y - 16,
      height: 42,
      width: 42,
      backgroundColor: 'rgba(3, 220, 253, 0.2)',
      border: '2px solid rgba(3, 220, 253, 0.5)',
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 2, // Centered for 4px size
      y: mousePosition.y - 2,
      scale: 1,
    },
    hovering: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 0,
    },
  };

  return (
    <>
      {/* The follower/highlighter */}
      <motion.div
        variants={cursorVariants}
        animate={isHoveringLink ? 'hovering' : 'default'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed h-6 w-6 rounded-full pointer-events-none z-[9999]"
      ></motion.div>
      
      {/* The main dot */}
      <motion.div
        variants={dotVariants}
        animate={isHoveringLink ? 'hovering' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        className="fixed h-1 w-1 rounded-full bg-accent pointer-events-none z-[9999]"
      ></motion.div>
    </>
  );
};

export default CustomCursor;
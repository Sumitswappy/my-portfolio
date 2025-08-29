'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      // Check if the target is an interactive element
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
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: 'rgba(0, 204, 255, 1)', // accent color
    },
    hovering: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(0, 204, 255, 0.2)', // transparent accent
      border: '2px solid rgba(0, 225, 255, 0.5)',
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hovering: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0, // Disappear on hover
    },
  };

  return (
    <>
      {/* The follower/highlighter */}
      <motion.div
        variants={cursorVariants}
        animate={isHoveringLink ? 'hovering' : 'default'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed h-10 w-10 rounded-full border-2 border-accent pointer-events-none z-[9999]"
      ></motion.div>
      
      {/* The main dot */}
      <motion.div
        variants={dotVariants}
        animate={isHoveringLink ? 'hovering' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        className="fixed h-2 w-2 rounded-full bg-accent pointer-events-none z-[9999]"
      ></motion.div>
    </>
  );
};

export default CustomCursor;
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
      x: mousePosition.x - 12, // Half of the div's width (24px)
      y: mousePosition.y - 12, // Half of the div's height (24px)
      backgroundColor: 'var(--color-accent-3)',
      opacity: 0.3,
      borderWidth: '2px',
      borderColor: 'var(--color-accent-2)',
    },
    hovering: {
      x: mousePosition.x - 21, // Half of the div's width (42px)
      y: mousePosition.y - 21, // Half of the div's height (42px)
      height: 42,
      width: 42,
      backgroundColor: 'var(--color-accent-3)',
      opacity: 0.4,
      borderWidth: '2px',
      borderColor: 'var(--color-accent-2)',
    },
  };
  const dotVariants = {
    default: {
      x: mousePosition.x - 2,
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
      <motion.div
        variants={cursorVariants}
        animate={isHoveringLink ? 'hovering' : 'default'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed h-6 w-6 rounded-full pointer-events-none z-[9999] border-solid"
      ></motion.div>
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
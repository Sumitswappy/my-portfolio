'use client';

import { useState, useEffect } from 'react';
import { FaTint, FaTree, FaMoon, FaPalette } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('blue-theme');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'blue-theme';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    setIsMenuOpen(false); // Close the menu after a theme is selected
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <button
              onClick={() => toggleTheme('blue-theme')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'blue-theme'
                  ? 'bg-accent text-black shadow-[0_0_20px_var(--glow-color)]'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
              title="Blue Theme"
            >
              <FaTint size={20} />
            </button>
            <button
              onClick={() => toggleTheme('forest-theme')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'forest-theme'
                  ? 'bg-accent text-black shadow-[0_0_20px_var(--glow-color)]'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
              title="Forest Theme"
            >
              <FaTree size={20} />
            </button>
            <button
              onClick={() => toggleTheme('midnight-theme')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'midnight-theme'
                  ? 'bg-accent text-black shadow-[0_0_20px_var(--glow-color)]'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
              title="Midnight Theme"
            >
              <FaMoon size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleToggleMenu}
        className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
          isMenuOpen
            ? 'bg-accent text-black shadow-[0_0_20px_var(--glow-color)]'
            : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
        }`}
        title="Toggle Themes"
      >
        <FaPalette size={20} />
      </button>
    </div>
  );
};

export default ThemeToggle;
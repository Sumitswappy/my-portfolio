'use client';

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Make sure the path is correct
import { FaSun, FaTree, FaMoon, FaPalette, FaTint } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme(); // Use the global context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme); // This now updates the global state
    setIsMenuOpen(false);
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
              onClick={() => toggleTheme('light')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'light'
                  ? 'bg-accent text-[var(--color-accent-4)] shadow-[0_0_20px_var(--glow-color)]'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
              title="Light Theme"
            >
              <FaSun size={20} />
            </button>
        
            <button
              onClick={() => toggleTheme('forest')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'forest'
                  ? 'bg-accent text-[var(--color-accent-4)] shadow-[0_0_20px_var(--glow-color)]'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
              title="Forest Theme"
            >
              <FaTree size={20} />
            </button>
            <button
              onClick={() => toggleTheme('midnight')}
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 ${
                theme === 'midnight'
                  ? 'bg-accent text-[var(--color-accent-4)] shadow-[0_0_20px_var(--glow-color)]'
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
            ? 'bg-accent text-[var(--color-accent-4)] shadow-[0_0_20px_var(--glow-color)]'
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
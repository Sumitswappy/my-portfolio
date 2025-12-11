'use client';

import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaTree, FaMoon, FaPalette} from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

type ThemeType = 'midnight' | 'forest' | 'light';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme() as { theme: ThemeType, setTheme: (t: ThemeType) => void };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeIcons = {
    light: <FaSun size={20} />,
    forest: <FaTree size={20} />,
    midnight: <FaMoon size={20} />,
  };

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
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
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleToggleMenu}
        // --- THIS IS THE CORRECTED SECTION ---
        // The button's style now always reflects the active theme's accent colors,
        // removing the hardcoded gray background.
        className="flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 bg-[var(--color-background)] text-[var(--color-accent-4)] shadow-[0_0_20px_var(--glow-color)]"
        title="Toggle Themes"
      >
        {themeIcons[theme] || <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
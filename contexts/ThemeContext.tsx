'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light'); // Always start with a consistent default theme

  useEffect(() => {
    // Check for a user-saved theme in the session.
    const savedTheme = sessionStorage.getItem('theme'); // <-- Changed from localStorage
    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    // Calculate the theme based on fixed Indian Standard Time.
    const hourIST = parseInt(
      new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        hour12: false,
      }),
      10
    );

    const isNightTime = hourIST >= 17 || hourIST < 5;
    setTheme(isNightTime ? 'dark' : 'light');

  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Save the theme choice to the session.
    sessionStorage.setItem('theme', theme); // <-- Changed from localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
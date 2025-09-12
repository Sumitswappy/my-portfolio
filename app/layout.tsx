'use client';

import { useState, useEffect } from 'react';
import { Inter, Fira_Code, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

// 1. Import your theme components
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${sourceSans.variable}`}>
      {/* 2. Remove the conflicting "bg-background" class */}
      <body className="font-sans text-text-light">
        {/* 3. Wrap the entire body content with ThemeProvider */}
        <ThemeProvider>
          {/* 4. Add your ThemeToggle component here */}
          <ThemeToggle />

          <div className="hidden md:block">
            <CustomCursor />
          </div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div key="loader">
                <Loader />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
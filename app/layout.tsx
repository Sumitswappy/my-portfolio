'use client'; // This must now be a client component to manage state

import { useState, useEffect } from 'react';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

// We remove metadata from here and can place it in page.tsx if needed
// export const metadata = { ... };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Loader will be visible for 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} bg-background font-sans text-text-light`}
      >
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
      </body>
    </html>
  );
}
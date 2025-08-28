'use client';

import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // New state to track if component is mounted

  // This effect runs once on the client to confirm the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This effect starts the timer ONLY after the component has mounted
  useEffect(() => {
    if (isMounted) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isMounted]); // The dependency on isMounted is key

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-3xl font-bold text-text-light">
            {progress}%
          </span>
        </div>
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle className="hud-circle-bg" cx="50" cy="50" r={radius} />
          <circle
            className="hud-circle-progress"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
      </div>

      <p className="flicker-text mt-8 font-mono text-2xl uppercase tracking-widest">
        Processing...
      </p>
    </div>
  );
};

export default Loader;
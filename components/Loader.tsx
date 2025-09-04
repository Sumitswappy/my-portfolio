'use client';

import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation'; // 1. Import the animation library
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
  }, [isMounted]);

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

      <TypeAnimation
        sequence={[
          'Getting things ready...',
          1000,
          'Finalizing...',
          1000,
        ]}
        wrapper="p"
        speed={70}
        className="mt-8 font-sans text-2xl uppercase tracking-widest text-text-light"
        repeat={Infinity}
      />
    </div>
  );
};
export default Loader;
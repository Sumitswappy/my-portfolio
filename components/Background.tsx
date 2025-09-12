'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions, type Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '@/contexts/ThemeContext';
import { color } from 'framer-motion';

const Background = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);
  const [particleColor, setParticleColor] = useState('#f94700ff'); // Initial color for the default light theme

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // --- THIS IS THE CORRECTED SECTION ---
  useEffect(() => {
    // This function will get the new color
    const updateColor = () => {
      const colorValue = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--color-text-dark')
        .trim();

      if (colorValue) {
        setParticleColor(colorValue);
      }
    };

    // Use a small timeout to ensure the browser has applied the new styles
    const timerId = setTimeout(updateColor, 50); // 50ms is unnoticeable

    // Cleanup the timeout if the component unmounts or the theme changes again quickly
    return () => clearTimeout(timerId);

  }, [theme]); // Rerun this effect whenever the theme changes

  const particleOptions: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: '[var(-color-text-light)]',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="fixed top-0 left-0 -z-10 h-screen w-screen"
        />
    );
  }
  return <></>;
};

export default Background;
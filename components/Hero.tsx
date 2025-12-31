'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaPaperPlane } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center py-20 md:py-24" id="home">
      <div className="container mx-auto px-6 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Text Content with Slide-in Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-3)]/20 text-[var(--color-accent-1)] text-xs font-bold tracking-widest uppercase mb-2">
            Portfolio 2025
          </div>
          
          <TypeAnimation
            sequence={[
              'I am a tech enthusiast!', 3500,
              'I am a full-stack engineer!', 3500,
              'I am a web developer!', 3500,
            ]}
            wrapper="h1"
            speed={60}
            className="text-4xl font-extrabold tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl block min-h-[70px]"
            repeat={Infinity}
          />
          
          <p className="max-w-lg text-lg text-slate-500 dark:text-[var(--color-text-dark)] leading-relaxed">
            Final-year <span className="font-semibold text-[var(--color-text-light)]">MCA student</span> crafting scalable REST APIs and full-stack applications with modern tech stacks.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start pt-4">
            {/* Primary Action - Contact */}
            <a href="#contact" 
               className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-3)] px-8 py-3.5 text-black font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_var(--glow-color)] sm:w-auto">
              <FaPaperPlane className="group-hover:rotate-12 transition-transform" />
              <span>Contact Me !!</span>
            </a>

            {/* Secondary Action - Glassmorphism Resume */}
            <a href="/Resume.pdf" download 
               className="group flex w-full items-center justify-center gap-2 rounded-xl border border-border-gray bg-white/40 backdrop-blur-md px-8 py-3.5 text-[var(--color-text-light)] font-bold transition-all hover:bg-white/60 sm:w-auto">
              <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Original Circular Image with Glow Refinements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Subtle Rotating Background Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[var(--color-accent-3)] opacity-30 blur-[60px] animate-pulse"></div>
          
          <div className="relative group">
            {/* The Animated Border Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--color-accent-3)] to-[var(--color-accent-4)] opacity-100 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] rounded-full border-[8px] border-[var(--color-accent-3)] overflow-hidden shadow-[0_0_30px_var(--glow-color)] z-10">
              <Image
                src="/pixar.png"
                alt="Sumit Sarkar"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
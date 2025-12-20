// components/TechStackMarquee.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaNodeJs, FaReact, FaVuejs, FaAngular, 
  FaPython, FaDocker, FaAws, FaGitAlt, FaHtml5, 
  FaCss3Alt, FaJsSquare, FaDatabase, FaWordpress
} from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiGraphql, SiNextdotjs } from 'react-icons/si';

// Define your tech stack with icons and names
const techStack = [
  { name: 'Java', icon: <FaJava className="text-orange-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-[var(--color-text-dark)]" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Python', icon: <FaPython className="text-blue-600" /> },
  { name: 'SQL', icon: <FaDatabase className="text-blue-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
  { name: 'MySQL', icon: <SiMysql className="text-orange-600" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-600" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-700" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-blue-400" /> },
  // Add more technologies here!
  // { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
  // { name: 'Angular', icon: <FaAngular className="text-red-500" /> },
  // { name: 'Wordpress', icon: <FaWordpress className="text-blue-400" /> },
];

const TechStackMarquee = () => {
  // We double the stack to create a seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-6 md:py-6 bg-gradient-to-r from-[var(--color-background)] to--[var(--color-background)] dark:from-slate-800/20 dark:to-slate-900/20 border-y border-orange-300/30 dark:border-slate-700/30">
      <h3 className="text-center text-xl md:text-2xl font-bold text-[var(--color-text-light)] mb-8">
        My Tech Stack
      </h3>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%'], // Move from 0% to -100% to create loop
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15, // Adjust speed here
              ease: 'linear',
            },
          },
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div 
            key={index} // Use index here as names might repeat after duplication
            className="flex items-center mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16 gap-3 text-lg md:text-xl font-semibold text-[var(--color-text-light)] group-hover:text-[var(--color-text-light)] transition-colors duration-300"
          >
            <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
      {/* Optional: Fading edges for a smoother look */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent"></div>
    </div>
  );
};

export default TechStackMarquee;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Student Academic Portal',
    description: 'A role-based academic management system with secure JWT authentication and modules for enrollment, grades, and fees.',
    image: '/SAP.jpg',
    year: '2025',
    link: 'https://github.com/sumanulto/sapportal',
    tags: ['Java', 'Spring Boot', 'JWT', 'MySQL']
  },
  {
    title: 'Unifind.in',
    description: 'A college discovery platform allowing students to search and compare over 100 colleges, featuring a 30% query performance optimization.',
    image: '/unifind.jpeg',
    year: '2024',
    link: 'https://github.com/Sumitswappy/MinorProject',
    tags: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my projects, skills, and experience, built with Next.js and styled with TailwindCSS.',
    image: '/Portfolio.png',
    year: '2025',
    link: 'https://github.com/Sumitswappy/my-portfolio',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion']
  },
];

const Projects = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 container mx-auto px-4">
      <div className="mb-16">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
             initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-6xl">
              My Wor<span className="text-[var(--color-accent-4)]">ks</span>
            </motion.h2>
            {/* <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-3)] to-transparent mt-2 hidden md:block"></div> */}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden font-mono text-2xl text-[var(--color-text-dark)] opacity-50 md:block"
          >
            2023 — 2025
          </motion.p>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div 
          key={project.title} 
          variants={cardVariants}>
            <Link 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative block h-full"
            >
              <div className="flex h-full flex-col rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-md border border-[var(--color-text-light)]/30 transition-all duration-500 hover:border-[var(--color-accent-3)]/40 hover:bg-[var(--color-accent-3)]  hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                
                {/* Image Container with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={`Screenshot of ${project.title}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-[var(--color-background)]/80 backdrop-blur-md text-[var(--color-text-light)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <FaExternalLinkAlt size={14} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-grow flex-col p-6 space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-2xl font-bold text-[var(--color-text-light)] group-hover:text-black">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-[var(--color-accent-4)] mt-2 group-hover:text-black">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-dark)] line-clamp-3 text-sm leading-relaxed group-hover:text-black">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--color-text-dark)] group-hover:border-[var(--color-accent-4)]/30 group-hover:text-black transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
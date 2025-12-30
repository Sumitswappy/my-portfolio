'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import profileImage from '../public/profile.jpeg'; 

const AboutMe = () => {
  // Animation variants for staggering items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about-me" className="py-16 md:py-32 container mx-auto px-4">
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="h-[2px] w-8 bg-[var(--color-accent-3)]"></span>
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-dark)]">
            More About Me
          </p>
        </motion.div>
        
        <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         className="text-4xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-6xl">
          I&apos;m Sumit, a <br />
          <span className="pb-2 inline-block bg-gradient-to-r from-[var(--color-accent-3)] to-[var(--color-accent-4)] bg-clip-text text-transparent italic">
            Software developer
          </span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
        {/* Left: Interactive Bio Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Card 1: Education */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-light)]">Education</h3>
                <p className="text-[var(--color-text-dark)] mt-1 leading-relaxed">
                  Final-year MCA student at <span className="text-[var(--color-accent-1)] font-medium">KIIT University</span>. Passionate about solving complex architectural problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Tech Stack Highlights */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                <FaCode size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-light)]">Core Expertise</h3>
                <p className="text-[var(--color-text-dark)] mt-1 leading-relaxed">
                  Specialized in <span className="font-bold text-[var(--color-text-light)] underline decoration-[var(--color-accent-3)]">Java & Spring Boot</span>. Experienced in building scalable REST APIs and full-stack React applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Looking for */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                <FaRocket size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-light)]">Career Goal</h3>
                <p className="text-[var(--color-text-dark)] mt-1 leading-relaxed">
                  Currently seeking <span className="text-green-500 font-bold italic tracking-wide">Backend Roles</span> to apply technical expertise and algorithmic problem-solving skills.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

       {/* Right: Modern Arched Image Container with Gradient Border */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative group"
>
  {/* Decorative Back Glow */}
  <div className="absolute -inset-4 bg-[var(--color-accent-3)] opacity-20 blur-3xl rounded-[3rem] group-hover:opacity-40 transition-opacity"></div>
  
  {/* THE GRADIENT BORDER WRAPPER - Using rounded-[3rem] for the arched look */}
  <div className="relative mx-auto w-full max-w-[350px] rounded-[3rem] p-[6px] 
                  bg-gradient-to-tr from-[var(--color-accent-3)] via-[var(--color-accent-4)] to-orange-200
                  shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
     
     {/* INNER CONTAINER (The Mask) - Matches the parent rounding */}
     <div className="relative w-full overflow-hidden rounded-[2.7rem] bg-[var(--color-background)]"
          style={{ aspectRatio: `${profileImage.width} / ${profileImage.height}` }}>
        <Image
          src={profileImage}
          alt="Sumit"
          fill
          className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          priority
        />
     </div>
  </div>
  
  {/* Floating Experience Badge */}
  <div className="absolute -bottom-6 right-0 md:-right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border-[2px] border-green-500 z-20">
     <p className="text-xs uppercase font-mono text-slate-500 tracking-tighter">Current Status</p>
     <p className="text-sm font-bold text-green-600 dark:text-green-400">Open to Opportunities</p>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
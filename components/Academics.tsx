'use client';

import { useRef } from 'react';
import { FaEye } from "react-icons/fa6";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

const academicsData = [
 {
    university: 'Sunrise English Medium School',
    degree: 'ISC (Class 12)',
    dates: 'May 2020 - July 2021',
    grade: 'Percentage: 88.5%',
    link: '/12Res.pdf',
  },
  {
    university: 'Techno India College of Technology',
    degree: 'Bachelors of Computer Application',
    dates: 'Sept 2021 - July 2024',
    grade: 'CGPA: 8.8',
    link: '/provisionalcerti.pdf',
  },
   {
    university: 'Kalinga Institute of Industrial Technology',
    degree: 'Masters of Computer Application',
    dates: 'Sept 2024 - Aug 2026',
    grade: 'CGPA: 9.10',
    link: '/2NDSEM.pdf',
  },
  
];

const Academics = () => {
  const containerRef = useRef(null);
  
  // Timeline drawing animation logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="academics" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <motion.h2 
        initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-light)]">
          My Jour<span className="text-[var(--color-accent-4)] italic">ney</span>
        </motion.h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-accent-4)] to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>
       
         
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--color-text-light)]/10">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-[var(--color-accent-3)] to-[var(--color-accent-4)]"
            />
          </div>

          <div className="space-y-16">
            {academicsData.map((item, index) => (
              <div key={index} className="relative">
                {/* Pulsing Node */}
                <div className="absolute top-0 left-4 md:left-1/2 z-20 h-5 w-5 -translate-x-1/2">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-[var(--color-accent-3)] opacity-30"
                  />
                  <div className="relative h-full w-full rounded-full border-2 border-[var(--color-accent-3)] bg-[var(--color-background)] shadow-[0_0_15px_var(--glow-color)]" />
                </div>

                <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0"
                  >
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 transition-all duration-500 hover:border-[var(--color-accent-3)]/50 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                        <span className="text-xs font-mono text-[var(--color-accent-4)] mb-2 block uppercase tracking-tighter">
                          {item.dates}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-light)] group-hover:text-[var(--color-text-light)] transition-colors">
                          {item.university}
                        </h3>
                        <p className="mt-2 text-[var(--color-text-dark)] font-medium italic">
                          {item.degree}
                        </p>
                        
                        <div className="mt-6 flex items-center justify-between">
                          <div className="px-3 py-1 rounded-full bg-[var(--color-accent-3)]/10 border border-[var(--color-accent-3)]/30">
                            <p className="font-mono text-xs font-bold text-[var(--color-text-dark)]">
                              {item.grade}
                            </p>
                          </div>
                          <span className="flex items-center gap-2 text-sm text-[var(--color-text-dark)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            <span className="font-bold uppercase tracking-tighter text-[10px]">View Document</span>
                            <FaEye size={18} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
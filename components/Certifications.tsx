'use client';

import { SiSap, SiCisco, SiAccenture } from 'react-icons/si';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const certificationsData = [
  {
    name: 'Managing Clean Core for SAP S/4HANA Cloud - Record of Achievement',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    glow: 'group-hover:shadow-[#008FD3]/30',
    link: 'https://www.credly.com/badges/30b6e9a4-7e54-4c1e-892f-59c685ff4f2c/linked_in_profile',
  },
  {
    name: 'Exploring SAP Business Technology Platform',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    glow: 'group-hover:shadow-[#008FD3]/30',
    link: 'https://www.credly.com/badges/cd145134-ec6a-4dbb-8c9a-439d46721618/linked_in_profile',
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: 'Jun 2025',
    icon: SiCisco,
    color: 'text-[#00BCEB]',
    glow: 'group-hover:shadow-[#00BCEB]/30',
    link: 'https://www.credly.com/badges/25bdeaea-35f4-4917-a5b1-fa80db314f5b/linked_in_profile',
  },
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'Accenture',
    date: 'Apr 2025',
    icon: SiAccenture,
    color: 'text-[#A100FF]',
    glow: 'group-hover:shadow-[#A100FF]/30',
    link: 'https://github.com/Sumitswappy',
  },
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-6xl px-4">
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
            My Certifi<span className="text-[var(--color-accent-4)] italic">cations</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-accent-4)] to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificationsData.map(({ name, issuer, date, icon: IconComponent, color, glow, link }, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className={`relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 shadow-xl ${glow}`}>
                  
                  <div>
                    <div className="flex items-start gap-5">
                      <div className={`p-4 rounded-xl bg-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${color}`}>
                        <IconComponent size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-4)] mb-1">
                          {issuer}
                        </h3>
                        <p className="text-lg font-bold leading-snug text-[var(--color-text-light)] line-clamp-2">
                          {name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-[var(--color-text-dark)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-accent)]">
                      <FaEye size={16} />
                      <span>View Credential</span>
                    </span>
                    <p className="font-mono text-xs font-bold text-[var(--color-accent-4)]">
                      {date}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
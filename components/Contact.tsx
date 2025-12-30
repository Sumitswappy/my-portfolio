'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaShareAlt, FaLinkedin, FaGithub, FaCheck, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FiPhone />,
    title: 'Phone & Mobile',
    value: '(+91) 7980794966',
    type: 'copy',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    value: 'sumitsarkar11598@gmail.com',
    type: 'copy',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    value: '59, Ghoshpara Lane, Bhadrakali, Uttarpara, Hooghly - 712232, West Bengal, India',
    type: 'map',
  },
  {
    icon: <FaShareAlt />,
    title: 'Social Media',
    type: 'social',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-sarkar-0229b4222/', icon: <FaLinkedin /> },
      { name: 'GitHub', href: 'https://github.com/Sumitswappy', icon: <FaGithub /> },
      { name: 'Instagram', href: 'https://www.instagram.com/schrodinger98765/', icon: <FaInstagram /> },
      { name: 'Facebook', href: 'https://www.facebook.com/schrodinger98765', icon: <FaFacebook /> },
    ],
  },
];

const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('59, Ghoshpara Lane, Bhadrakali, Uttarpara, Hooghly - 712232, West Bengal, India')}`;
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-visible">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[var(--color-accent)]/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-[var(--color-text-light)]"
          >
            Get In <span className="text-[var(--color-accent)]">Touch</span>
          </motion.h2>
          <p className="mt-4 text-lg text-[var(--color-text-dark)] italic">Let&apos;s build something amazing together.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactDetails.map((item, index) => (
  <motion.div
    key={index}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    className="group flex flex-col items-center p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-[var(--color-accent)]/50"
  >
    {/* 1. Icon */}
    <div className="mb-4 text-4xl text-[var(--color-accent)]">
      {item.icon}
    </div>
    
    {/* 2. Title */}
    <h3 className="mb-3 text-sm font-mono uppercase tracking-widest text-[var(--color-text-dark)]">
      {item.title}
    </h3>

    {/* 3. Action / Value Area */}
    <div className="flex flex-col items-center w-full gap-2">
      {item.type === 'copy' ? (
        <>
          {/* Action Button positioned BELOW Title */}
          <button 
            onClick={() => handleCopy(item.value!)}
            className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold transition-all hover:bg-[var(--color-accent-3)] hover:text-black mb-1"
          >
            <AnimatePresence mode='wait'>
              {copiedText === item.value ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} key="check" className="flex items-center gap-1">
                  <FaCheck size={10} /> <span>COPIED</span>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="copy" className="flex items-center gap-1">
                  <FaCopy size={10} /> <span>CLICK TO COPY</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Actual Value */}
          <p className="text-[var(--color-text-light)] font-medium text-sm md:text-base break-all hover:text-[var(--color-accent)]">
            {item.value}
          </p>
        </>
      ) : item.type === 'social' ? (
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {item.links?.map((link, i) => (
            <Link key={i} href={link.href} target="_blank" className="p-4 rounded-full text-3xl bg-white/5 hover:bg-[var(--color-accent)] hover:text-black transition-all">
              {link.icon}
            </Link>
          ))}
        </div>
     /* Replace the existing (item.value) paragraph at the bottom of your loop with this: */

) : item.type === 'map' ? (
  <a 
    href={googleMapsUrl}
    target="_blank" 
    rel="noopener noreferrer"
    className="group/map flex flex-col items-center gap-2"
  >
    {/* "Fancy" Map Badge matching your "Copy" buttons */}
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-text-dark)]/10 border border-[var(--color-text-dark)]/20 text-[var(--color-text-dark)] text-[10px] font-bold transition-all hover:bg-[var(--color-accent-3)] hover:text-black mb-1">
      <FaExternalLinkAlt size={10} />
      <span>VIEW ON MAP</span>
    </div>
    
    <p className="text-[var(--color-text-light)] font-medium text-sm md:text-base leading-relaxed transition-colors group-hover/map:text-[var(--color-accent)]">
      {item.value}
    </p>
  </a>
) : (
  <p className="text-[var(--color-text-light)] font-medium text-center">
    {item.value}
  </p>
)}
    </div>
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
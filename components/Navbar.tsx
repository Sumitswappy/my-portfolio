'use client'; 

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

const navLinks = [
  { href: '#projects', label: '#Projects' },
  { href: '#skills', label: '#Skills' },
  { href: '#about-me', label: '#About-me' },
  { href: '#contact', label: '#Contact' },
];

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
      let currentActive = '';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.querySelector(link.href) as HTMLElement;
        if (section && section.offsetTop <= window.scrollY + 150) {
          currentActive = link.href;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLinkEl = navRef.current?.querySelector(`[href="${activeSection}"]`) as HTMLElement;
    const navNode = navRef.current;

    if (navNode && activeLinkEl) {
      navNode.style.setProperty('--underline-width', `${activeLinkEl.offsetWidth}px`);
      navNode.style.setProperty('--underline-left', `${activeLinkEl.offsetLeft}px`);
      navNode.style.setProperty('--underline-opacity', '1');
    } else if (navNode) {
      navNode.style.setProperty('--underline-opacity', '0');
    }
  }, [activeSection]);


  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'border-b border-border-gray bg-background/80 backdrop-blur-sm'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-mono text-xl font-bold">
          <span className="text-accent">S</span>umit <span className="text-accent">S</span>arkar
        </Link>
        <div className="flex items-center gap-6">
          
          <nav
            ref={navRef}
            className="relative hidden space-x-1 font-mono text-text-dark md:block"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 transition-colors duration-300 ${
                  activeSection === link.href ? 'text-text-light' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <span
              className="absolute bottom-9 h-3 rounded-full bg-red-400 transition-all duration-300 ease-in-out
               w-[var(--underline-width,0)] left-[var(--underline-left,0)] opacity-[var(--underline-opacity,0)]"
            />
          </nav>
          
        </div>
        <div className="hidden items-center gap-4 text-sm text-text-dark lg:flex">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-accent" />
              <span>{currentDateTime.toLocaleDateString('en-US', dateOptions)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-accent" />
              <span>{currentDateTime.toLocaleTimeString('en-US', timeOptions)}</span>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
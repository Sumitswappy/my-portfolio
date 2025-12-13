'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegClock, FaBars, FaTimes } from 'react-icons/fa';


const navLinks = [
  { href: '#about-me', label: '#About-me' },
  { href: '#projects', label: '#Projects' },
  { href: '#skills', label: '#Skills' },
  { href: '#certifications', label: '#Certifications' },
  { href: '#academics', label: '#Academics' },
  { href: '#contact', label: '#Contact' },
];

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection logic remains the same...
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.scrollY > 150) {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
      if (window.scrollY < 150) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Underline effect logic remains the same...
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
        hasScrolled || isMenuOpen
          // --- THEME CHANGE #1: Use theme background with opacity for scrolled state ---
          ? 'border-b border-[var(--color-accent-4)] bg-[var(--color-background)]/80 backdrop-blur-sm'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex flex-shrink-0 items-center gap-4">
          <Link href="#home" className="flex items-center gap-2">
            {/* --- THEME CHANGE #2: Logo background now uses theme's accent color --- */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-[var(--glow-color)] bg-[var(--color-accent)]">
              <Image
                src="/sumit2.png"
                alt="My Logo"
                width={113}
                height={113}
                className="rounded-full"
              />
            </div>
          </Link>
          
          {isClient && (
            // --- THEME CHANGE #3: Date/Time text and border now use theme colors ---
            <div className="items-center gap-2  border-l border-[var(--color-accent-4)] pl-4 text-xs text-[var(--color-text-light)] sm:flex">
              <div className=' text-left bg-[var(--color-background)] border border-border-gray rounded-full py-1 px-4 shadow-[0_0_20px_var(--glow-color)]'>
                 {/* --- THEME CHANGE #4: Icons now use theme's accent color --- */}
                <div className="flex items-center gap-2"><FaRegCalendarAlt className="text-[var(--color-accent)]" /><span>{currentDateTime.toLocaleDateString('en-US', dateOptions)}</span></div>
                <div className="flex items-center gap-2"><FaRegClock className="text-[var(--color-accent)]" /><span>{currentDateTime.toLocaleTimeString('en-US', timeOptions)}</span></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center">
          {/* --- THEME CHANGE #5: Nav text now uses theme's dark text color --- */}
          <nav ref={navRef} className="relative hidden space-x-1 font-mono text-[var(--color-text-dark)] md:block">
            {navLinks.map((link) => (
              // --- THEME CHANGE #6: Active link uses theme's light text color ---
              <Link key={link.href} href={link.href} className={`relative px-3 py-2 transition-colors duration-300 ${activeSection === link.href ? 'text-[var(--color-text-light)]' : ''}`}>
                {link.label}
              </Link>
            ))}
            {/* --- THEME CHANGE #7: Underline uses theme's accent color --- */}
            <span className="absolute bottom-9 h-3 rounded-full bg-[var(--color-accent)] transition-all duration-300 ease-in-out w-[var(--underline-width,0)] left-[var(--underline-left,0)] opacity-[var(--underline-opacity,0)]" />
          </nav>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-[var(--color-text-dark)]">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {/* --- THEME CHANGE #8: Mobile menu also uses theme colors --- */}
        <div className="border-t border-[var(--color-accent-4)] bg-[var(--color-background)]/80 backdrop-blur-xl">
          <nav className="flex flex-col items-center gap-4 py-4 font-mono">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`px-3 py-2 ${activeSection === link.href ? 'text-[var(--color-text-light)]' : 'text-[var(--color-text-dark)]'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
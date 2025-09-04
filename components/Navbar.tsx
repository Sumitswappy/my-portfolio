'use client'; 

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegClock, FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '/public/sumit2.png';

// Correct order of navLinks to match page layout
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

  // --- FINAL HYBRID SCROLL DETECTION LOGIC ---
  useEffect(() => {
    // 1. IntersectionObserver for general section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // We only set the section if we are NOT at the top of the page
            if (window.scrollY > 150) {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px', // Trigger line in the upper-middle of the screen
      }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    // 2. Manual scroll listener for the "top of page" case and scroll styling
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
      // If user is near the top, force the active section to be empty
      if (window.scrollY < 150) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    // Cleanup function
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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
        hasScrolled || isMenuOpen
          ? 'border-b border-border-gray bg-gray/95 backdrop-blur-sm'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex flex-shrink-0 items-center gap-4">
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-[2px] bg-accent">
              <Image
            src={logoImage}
            alt="My Logo"
            width={114} // Adjust these values to fit your logo
            height={114}
            className="rounded-full"
          />
            </div>
          </Link>
          
          {isClient && (
            <div className=" items-center gap-2 border-l border-border-gray pl-4 text-xs text-text-light sm:flex">
              <div className=' text-left rounded-full py-1 px-4 shadow-[0_0_20px_var(--glow-color)]'>
                <div className="flex items-center gap-2"><FaRegCalendarAlt className="text-accent" /><span>{currentDateTime.toLocaleDateString('en-US', dateOptions)}</span></div>
                <div className="flex items-center gap-2"><FaRegClock className="text-accent" /><span>{currentDateTime.toLocaleTimeString('en-US', timeOptions)}</span></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <nav ref={navRef} className="relative hidden space-x-1 font-mono text-text-dark md:block">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`relative px-3 py-2 transition-colors duration-300 ${activeSection === link.href ? 'text-text-light' : ''}`}>
                {link.label}
              </Link>
            ))}
            <span className="absolute bottom-9 h-3 rounded-full bg-accent transition-all duration-300 ease-in-out w-[var(--underline-width,0)] left-[var(--underline-left,0)] opacity-[var(--underline-opacity,0)]" />
          </nav>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-text-dark">
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
        <div className="border-t border-border-gray bg-background/80 backdrop-blur-xl">
          <nav className="flex flex-col items-center gap-4 py-4 font-mono">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`px-3 py-2 ${activeSection === link.href ? 'text-accent' : 'text-text-dark'}`}>
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
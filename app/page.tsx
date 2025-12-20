import Academics from '@/components/Academics';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar'; // Import your existing Navbar component
import Background from '@/components/Background';
import ThemeToggle from '@/components/ThemeToggle'; // Import the new theme toggle component
import Skills from '@/components/Skills';
import TechStackMarquee from '@/components/TechStackMarquee';

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<Loader />}>
        <Background />
        <Navbar /> {/* Use your existing Navbar component here */}
        <div className="container mx-auto max-w-5xl px-4">
          <Hero />
          <AboutMe />
          <TechStackMarquee />
          <Projects />
          <Skills />
          <Certifications />
          <Academics />
          <Contact />
        </div>
        <Footer />
        <CustomCursor />
        <ThemeToggle /> {/* Add the ThemeToggle component */}
      </Suspense>
    </main>
  );
}
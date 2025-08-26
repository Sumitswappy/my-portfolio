import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
}
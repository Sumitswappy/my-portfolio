import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import MainLayout from '@/components/MainLayout';

// No more 'async' or 'sleep' needed here
export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </MainLayout>
  );
}
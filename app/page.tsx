import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Academics from '@/components/Academics'; // Import new component
import Certifications from '@/components/Certifications'; // Import new component
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Certifications />
      <Academics />
      <Contact />
    </MainLayout>
  );
}
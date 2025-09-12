'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaPaperPlane } from 'react-icons/fa6'; 

const Hero = () => {
  return (
    <section className="py-38 md:py-24" id="home">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <TypeAnimation
            sequence={[
              'I am a tech enthusiast!', 3500,
              'I am a full-stack engineer!', 3500,
              'I am a web developer!', 3500,
            ]}
            wrapper="h1"
            speed={60}
            className="text-3xl font-bold tracking-tighter text-[var(--color-text-light)] sm:text-4xl lg:text-5xl"
            repeat={Infinity}
          />
          <p className="text-slate-400 dark:text-[var(--color-text-dark)]">
            Final-year MCA student crafting scalable REST APIs and full-stack applications.
          </p>
          <div className="flex flex-row items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a href="#contact" className="rounded-[8px] inline-flex w-full items-center justify-center gap-2 border border-border-gray px-4 py-2 shadow-[0_0_10px_var(--glow-color)] text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-3)] hover:-translate-y-1 hover:text-black sm:w-auto hover:border-none hover:shadow-[0_0_0_var(--glow-color)]">
              <FaPaperPlane />
              <span>Contact Me !!</span>
            </a>
            <a href="/Sumit-Sarkar-Resume.pdf" download className="rounded-[8px] inline-flex w-full items-center justify-center gap-2 border border-border-gray px-4 py-2 shadow-[0_0_10px_var(--glow-color)] text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-3)] hover:-translate-y-1 hover:text-black sm:w-auto hover:border-none hover:shadow-[0_0_0_var(--glow-color)]">
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        <div className="relative flex h-[400px] w-full items-end justify-center">
          <div className="absolute bottom-0 h-[320px] w-[320px] rounded-full border-[10px] border-[var(--color-accent-3)] z-10 shadow-[0_0_50px_var(--glow-color)]"></div>
          <div className="relative z-20">
            <Image
              src="/sumit.png"
              alt="Sumit Sarkar"
              width={320}
              height={320}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
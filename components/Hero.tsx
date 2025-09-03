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
            className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl"
            repeat={Infinity}
          />
          <p className="text-slate-600 dark:text-text-dark">
            Final-year MCA student crafting scalable REST APIs and full-stack applications.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a href="#contact" className="rounded inline-flex w-full items-center justify-center gap-2 border border-accent px-4 py-2 text-white transition hover:bg-white hover:-translate-y-1 hover:text-black sm:w-auto">
              <FaPaperPlane />
              <span>Contact Me !!</span>
            </a>
            <a href="/Sumit-Sarkar-Resume.pdf" download className="rounded inline-flex w-full items-center justify-center gap-2 border border-border-gray px-4 py-2 text-text-dark transition hover:bg-white hover:-translate-y-1 hover:text-black sm:w-auto">
              <FaDownload /> 
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* --- THIS IS THE UPDATED PART --- */}
        <div className="relative flex h-[400px] w-full items-end justify-center">
          {/* The background ring (340px wide) */}
          <div className="absolute bottom-0 h-[320px] w-[320px] rounded-full border-[10px] border-[#E0FBFF] z-10 shadow-[0_0_50px_#00DEF7]"></div>
          
          {/* The image container (margins removed) */}
          <div className="relative z-20">
            <Image
              src="/sumit.png"
              alt="Sumit Sarkar"
              width={320}  // Image is now smaller (320px) than the ring
              height={320}
              className="rounded-full object-cover" // Image is also a circle
            />
          </div>
        </div>
        {/* --- END OF UPDATED PART --- */}
      </div>
    </section>
  );
};

export default Hero;
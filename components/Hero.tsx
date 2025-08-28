'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
// 1. Import the new icon
import { FaDownload, FaPaperPlane } from 'react-icons/fa6'; 

const Hero = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <TypeAnimation
            sequence={[
              'I am a tech enthusiast!',
              3500,
              'I am a full-stack engineer!',
              3500,
              'I am a web developer!',
              3500,
            ]}
            wrapper="h1"
            speed={60}
            className="text-4xl font-bold tracking-tighter lg:text-5xl"
            repeat={Infinity}
          />
          <p className="text-text-dark">
            Final-year MCA student crafting scalable REST APIs and full-stack applications.
          </p>

          <div className="mt-6 flex items-center gap-4">
            {/* --- THIS IS THE UPDATED BUTTON --- */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 border border-accent px-4 py-2 text-white transition hover:bg-accent/10"
            >
              <FaPaperPlane /> {/* 2. Add the icon component */}
              <span>Contact Me !!</span>
            </a>
            
            <a
              href="/Resume.pdf" 
              download
              className="inline-flex items-center gap-2 border border-border-gray px-4 py-2 text-text-dark transition hover:border-accent hover:text-accent"
            >
              <FaDownload /> 
              <span>Download Resume</span>
            </a>
          </div>

        </div>
        <div className="relative flex h-[400px] w-full items-end justify-center">
          <div className="absolute bottom-0 h-[340px] w-[340px] rounded-full border-[10px] border-[#E0FBFF] z-10 shadow-[0_0_50px_#00DEF7]"></div>
          <div className="relative z-20 rounded-full overflow-hidden shadow-lg ml-3 mr-5">
            <Image
              src="/sumit.png"
              alt="Sumit Sarkar"
              width={380}
              height={380}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
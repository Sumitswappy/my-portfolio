'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa6'; 

const Hero = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <TypeAnimation
            sequence={[
              'I am a software developer!',
              3500,
              'I am a bokachoda engineer!',
              3500,
              'I am a full-stack developer!',
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
            <a 
              href="#contact" 
              className="inline-block border border-accent px-4 py-2 text-white transition hover:bg-accent/10"
            >
              Contact Me !!
            </a>
            
            <a
              href="/Resume.pdf" 
          
              className="inline-flex items-center gap-2 border border-border-gray px-4 py-2 text-text-dark transition hover:border-accent hover:text-accent"
            >
              <FaDownload /> 
              <span>Download Resume</span>
            </a>
          </div>

        </div>
        <div className="relative flex h-[400px] w-full items-end justify-center">
          <div className="absolute bottom-0 h-[340px] w-[340px] rounded-full border-[10px] border-border-gray z-10 shadow-[0_0_50px_rgba(99,102,241,1.0)]"></div>
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
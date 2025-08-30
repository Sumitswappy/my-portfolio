import Image from 'next/image';
import profileImage from '../public/profile.jpeg'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="py-16 md:py-24">
      
      <div className="mb-2">
        <p className="font-mono text-sm uppercase tracking-widest text-text-dark">
          More About Me
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-text-light sm:text-5xl">
          <span>I&apos;m Sumit, a</span>
          <span className="pb-2 block bg-gradient-to-l from-purple-300 to-blue-700 bg-clip-text text-transparent">
            Software developer
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-4 font-source text-text-dark">
          <p>
            Hello, I&apos;m Sumit! I&apos;m a final-year MCA student at KIIT University with a passion for building impactful solutions.
          </p>
          <p>
            I am skilled in Java, Spring Boot, SQL, and React, with hands-on experience developing scalable REST APIs and full-stack applications. I have a solid foundation in Object-Oriented Programming and Data Structures.
          </p>
          <p>
            I am actively seeking opportunities in backend or software development where I can apply my technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* --- CORRECTED GRADIENT BORDER --- */}
        {/* Outer div creates the gradient frame */}
        <div className="relative mx-auto w-full max-w-[350px] rounded-full bg-gradient-to-t from-purple-300 to-blue-700 p-[5px]">
          {/* Inner div masks the center, revealing only the border */}
          <div
            className="relative w-full overflow-hidden rounded-full bg-background"
            style={{ aspectRatio: `${profileImage.width} / ${profileImage.height}` }}
          >
            <Image
              src={profileImage}
              alt="About me image"
              fill 
              className="object-contain"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;
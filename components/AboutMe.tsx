import Image from 'next/image';
// Corrected the import path to be relative
import profileImage from '../public/profile.jpeg'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="py-16">
      {/* Added mb-12 (margin-bottom) to create a gap */}
      <h2 className="mb-12 text-3xl font-bold uppercase tracking-wider text-text-light">
        Personal-info
      </h2>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-4 text-text-dark">
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

        <div
          className="relative w-full max-w-[350px] mx-auto rounded-full border-[5px] border-border-gray overflow-hidden"
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
    </section>
  );
};

export default AboutMe;
import Image from 'next/image';
import profileImage from '/public/profile.jpeg'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="py-16">
       <h2 className="text-3xl font-bold uppercase tracking-wider text-text-light">
              Personal-info
            </h2>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-4 text-text-dark">
          <p>
            Hello, I’m Sumit! I'm a final-year MCA student at KIIT University with a passion for building impactful solutions.
          </p>
          <p>
            I am skilled in Java, Spring Boot, SQL, and React, with hands-on experience developing scalable REST APIs and full-stack applications. I have a solid foundation in Object-Oriented Programming and Data Structures.
          </p>
          <p>
            I am actively seeking opportunities in backend or software development where I can apply my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div
          className="relative w-full max-w-[350px] mx-auto rounded-full border-3 border-border-gray overflow-hidden"
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
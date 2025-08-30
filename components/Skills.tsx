import {
  FaJava,
  FaPython,
  FaDatabase,
  FaReact,
  FaGithub,
  FaAws,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiSap,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';


// Updated data structure with icon components and their brand colors
const allSkills = [
  { name: 'Java', icon: FaJava, color: 'text-[#F89820]' },
  { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
  { name: 'SQL', icon: FaDatabase, color: 'text-accent' }, // Kept accent for generic icon
  { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-[#F7DF1E]' },
  { name: 'SAP ABAP', icon: SiSap, color: 'text-[#008FD3]' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-[#6DB33F]' },
  { name: 'React.js', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-text-light' }, // White for Next.js logo
  { name: 'Tailwind Css', icon: SiTailwindcss, color: 'text-[#38B2AC]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'REST APIs', icon: TbApi, color: 'text-accent' },
  { name: 'GitHub', icon: FaGithub, color: 'text-text-light' }, // White for GitHub logo
  { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]' },
  { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' },
];

const conceptsData = ['OOP', 'Data Structures', 'Agile', 'SDLC', 'Networking (CCNA)'];

const Skills = () => {
  return (
    <section id="skills" className="py-38 md:py-24">
      <div className="text-center">
        <p className="font-mono text-sm uppercase text-text-dark">My Skills</p>
        <h2 className="text-4xl font-bold tracking-tight text-text-light sm:text-5xl">
          My Tool <span className="text-accent">Box</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
        {allSkills.map(({ name, icon: IconComponent, color }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-border-gray bg-main-gray/50 px-4 py-2 transition-all duration-300 hover:border-accent hover:bg-main-gray hover:-translate-y-2"
          >
            {/* The span now gets its color from the data object */}
            <span className={`text-2xl ${color}`}>
              <IconComponent />
            </span>
            <span className="text-text-light">{name}</span>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-text-light">Core Concepts</h3>
        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2">
          {conceptsData.map((concept, i) => (
            <span key={i} className="text-text-dark">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
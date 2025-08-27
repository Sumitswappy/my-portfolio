import {
  FaJava,
  FaPython,
  FaDatabase,
  FaReact,
  FaGithub,
  FaAws,
} from 'react-icons/fa6';
import { FaCog } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiSpringboot,
  SiPostman,
  SiSap,
  SiNextdotjs,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillsData = {
  languages: [
    { name: 'Java', icon: <FaJava size={20} /> },
    { name: 'Python', icon: <FaPython size={20} /> },
    { name: 'SQL', icon: <FaDatabase size={20} /> },
    { name: 'JavaScript', icon: <IoLogoJavascript size={20} /> },
    { name: 'SAP ABAP', icon: <SiSap size={20} /> },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: <SiSpringboot size={20} /> },
    { name: 'React.js', icon: <FaReact size={20} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={20} /> },
    { name: 'REST APIs', icon: <TbApi size={20} /> },
  ],
  'tools & platforms': [
    { name: 'GitHub', icon: <FaGithub size={20} /> },
    { name: 'AWS', icon: <FaAws size={20} /> },
    { name: 'Postman', icon: <SiPostman size={20} /> },
  ],
};

const conceptsData = ['OOP', 'Data Structures', 'Agile', 'SDLC', 'Networking (CCNA)'];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="mb-12 flex items-center gap-4 text-3xl font-bold uppercase tracking-wider text-text-light">
        <FaCog className="text-accent" />
        <span>Skills</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="border border-border-gray">
          <h3 className="border-b border-border-gray p-2 font-semibold">Languages</h3>
          <div className="space-y-2 p-4">
            {skillsData.languages.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-text-dark">
                <span className="text-accent">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border-gray">
          <h3 className="border-b border-border-gray p-2 font-semibold">Frameworks</h3>
          <div className="space-y-2 p-4">
            {skillsData.frameworks.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-text-dark">
                <span className="text-accent">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border border-border-gray">
          <h3 className="border-b border-border-gray p-2 font-semibold">Concepts</h3>
          <div className="space-y-2 p-4">
            {conceptsData.map((concept, i) => (
              <div key={i} className="text-text-dark">
                <span>{concept}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border border-border-gray">
          <h3 className="border-b border-border-gray p-2 font-semibold">Tools & Platforms</h3>
          <div className="space-y-2 p-4">
            {skillsData['tools & platforms'].map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-text-dark">
                <span className="text-accent">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
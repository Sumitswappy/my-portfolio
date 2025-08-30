import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Student Academic Portal',
    description: 'A role-based academic management system with secure JWT authentication and modules for enrollment, grades, and fees.',
    image: '/SAP.jpg',
    year: '2024',
    link: 'https://github.com/sumanulto/sapportal', 
  },
  {
    title: 'Unifind.in',
    description: 'A college discovery platform allowing students to search and compare over 100 colleges, featuring a 30% query performance optimization.',
    image: '/unifind.jpeg',
    year: '2023',
    link: 'https://github.com/Sumitswappy/MinorProject',
  },
   {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my projects, skills, and experience, built with Next.js and styled with TailwindCSS.',
    image: '/Portfolio.jpg',
    year: '2025',
    link: 'https://github.com/Sumitswappy/my-portfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-38 md:py-24">
      <div className="mb-12">
        {/* Header stacks and centers on mobile */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-text-light sm:text-5xl">
              My Works
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-accent md:mx-0"></div>
          </div>
          <p className="hidden font-mono text-2xl text-text-dark md:block">2023 - 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={project.link} key={project.title} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="group flex h-full flex-col rounded-[15px] border border-border-gray bg-main-gray transition-transform duration-300 hover:bg-[#D4FBFC] hover:-translate-y-2 hover:text-black sm:w-auto">
              <div className="rounded-[15px] relative h-48 w-full overflow-hidden">
                <Image src={project.image} alt={`Screenshot of ${project.title}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-grow flex-col p-4">
                <h3 className="mb-2 text-xl font-semibold lg:text-2xl">{project.title} <span className="text-text-dark">| {project.year}</span></h3>
                <p className="flex-grow text-text-dark">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
// Academics.tsx
import { FaEye } from "react-icons/fa6";
import Link from 'next/link';

const academicsData = [
  {
    university: 'Kalinga Institute of Industrial Technology',
    degree: 'Masters of Computer Application',
    dates: 'Sept 2024 - Aug 2026',
    grade: 'CGPA: 9.10',
    link: '/2NDSEM.pdf',
  },
  {
    university: 'Techno India College of Technology',
    degree: 'Bachelors of Computer Application',
    dates: 'Sept 2021 - July 2024',
    grade: 'CGPA: 8.85',
    link: '/provisionalcerti.pdf',
  },
  {
    university: 'Sunrise English Medium School',
    degree: 'ISC (Class 12)',
    dates: 'May 2020 - July 2021',
    grade: 'Percentage: 88.5%',
    link: '/12Res.pdf',
  },
];

const Academics = () => {
  return (
    <section id="academics" className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-light sm:text-5xl">
          My Jour<span className="text-[var(--color-accent-4)]">ney</span>
        </h2>
        
        {/* --- DESKTOP: Alternating Timeline --- */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 top-2 h-full w-0.5 -translate-x-1/2 bg-[var(--color-text-light)]/40"></div>
            <div className="space-y-12">
              {academicsData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-transparent shadow-[0_0_20px_var(--glow-color)] shadow-[var(--color-text-light)]/50 "></div>
                  <div className={`flex items-center md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <a href={item.link} target="_blank" download rel="noopener noreferrer" className="block w-1/2">
                      <div className="group rounded-lg border border-[var(--color-accent-3)]/30 bg-main-gray p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-none hover:shadow-[0_0_30px_var(--glow-color)]">
                        <h3 className="text-xl font-bold text-[var(--color-text-light)]">{item.university}</h3>
                        <p className="mt-1 text-[var(--color-text-light)]">{item.degree}</p>
                        <p className="mt-2 text-sm text-[var(--color-text-dark)]">{item.dates}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="font-mono text-sm text-text-[var(--color-text-dark)]">{item.grade}</p>
                          <span className="flex items-center gap-2 text-sm text-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <FaEye size={20} />
                            <span>Click to view</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- MOBILE: Simple Vertical Timeline --- */}
        <div className="relative md:hidden">
          <div className="absolute left-3 top-2 h-full w-0.5 -translate-x-1/2 bg-gray-700"></div>
          <div className="space-y-12">
            {academicsData.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative pl-12">
                  <div className="absolute top-0 left-3 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-accent bg-transparent shadow-[0_0_20px] shadow-accent/50"></div>
                  <div className="group rounded-lg border border-gray-700 bg-main-gray p-6">
                    <h3 className="text-xl font-bold text-text-light">{item.university}</h3>
                    <p className="mt-1 text-text-light">{item.degree}</p>
                    <p className="mt-2 text-sm text-text-dark">{item.dates}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-mono text-sm text-text-dark">{item.grade}</p>
                      <span className="flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <FaEye size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Academics;
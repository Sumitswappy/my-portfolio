import { SiSap, SiCisco, SiAccenture } from 'react-icons/si';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa6';

// --- THEME CHANGE #1: The hardcoded 'color' property is no longer needed and has been removed. ---
const certificationsData = [
  {
    name: 'Managing Clean Core for SAP S/4HANA Cloud - Record of Achievement',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    link: 'https://www.credly.com/badges/30b6e9a4-7e54-4c1e-892f-59c685ff4f2c/linked_in_profile',
  },
   {
    name: 'Exploring SAP Business Technology Platform',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    link: 'https://www.credly.com/badges/cd145134-ec6a-4dbb-8c9a-439d46721618/linked_in_profile',
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: 'Jun 2025',
    icon: SiCisco,
    color: 'text-[#00BCEB]',
    link: 'https://www.credly.com/badges/25bdeaea-35f4-4917-a5b1-fa80db314f5b/linked_in_profile',
  },
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'Accenture',
    date: 'Apr 2025',
    icon: SiAccenture,
    color: 'text-[#A100FF]',
    link: '/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_JE5RaCLLzT3NvjCjS_1745593533054_completion_certificate.pdf',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-38 md:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-[var(--color-text-light)] sm:text-4xl">
        My Certifi<span className="text-[var(--color-accent-4)]">cations</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map(({ name, issuer, date, icon: IconComponent,color, link }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            {/* --- THEME CHANGE #2: Card background now uses a semi-transparent theme color. --- */}
            <div
              className="group flex h-full flex-col justify-between rounded-[15px] border border-[var(--color-text-light)]/30  p-6 transition-transform duration-300 hover:shadow-[0_0_20px_var(--glow-color)] hover:border-none hover:-translate-y-2 sm:w-auto "
            >
              <div>
                <div className="flex items-start gap-4">
                  {/* --- THEME CHANGE #3: Icon color is now consistently from the theme. --- */}
                  <span className={`text-4xl ${color}`}>
                    <IconComponent />
                  </span>
                  <div>
                    {/* --- THEME CHANGE #4: All text now uses theme variables. --- */}
                    <h3 className="font-bold text-[var(--color-text-light)] ">{issuer}</h3>
                    <p className="text-sm text-[var(--color-text-light)] ">{name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                 {/* --- THEME CHANGE #5: "Click to view" text uses theme colors. --- */}
                <span className="flex items-center gap-2 text-sm text-[var(--color-text-dark)] opacity-0 transition-opacity duration-300 group-hover:text-[var(--color-accent)] group-hover:opacity-100 ">
                    <FaEye size={20} />
                    <span>Click to view</span>
                </span>
                <p className="font-mono text-sm text-[var(--color-accent)] ">{date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
import { SiSap, SiCisco, SiAccenture } from 'react-icons/si';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa6';

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
      <h2 className="mb-12 text-center text-3xl font-bold text-text-light sm:text-4xl">
        My Certifi<span className="text-accent">cations</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map(({ name, issuer, date, icon: IconComponent, color, link }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div
              className="group flex h-full flex-col justify-between rounded-lg border border-border-gray bg-main-gray  p-6 transition-transform duration-300 hover:shadow-[0_0_20px_var(--glow-color)] hover:-translate-y-2 sm:w-auto "
            >
              <div>
                <div className="flex items-start gap-4">
                  <span className={`text-4xl ${color}`}>
                    <IconComponent />
                  </span>
                  <div>
                    <h3 className="font-bold text-white ">{issuer}</h3>
                    <p className="text-sm text-white ">{name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex text-sm group-hover:text-accent transition-opacity duration-300 group-hover:opacity-100 ">
                    <FaEye size={20} />&nbsp;&nbsp;Click to view
                </span>
                <p className="font-mono text-sm text-accent ">{date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Certifications;
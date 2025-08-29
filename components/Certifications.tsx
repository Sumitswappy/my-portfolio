import { SiSap, SiCisco, SiAccenture } from 'react-icons/si';
import Link from 'next/link'; // 1. Import the Link component
// 2. Added a 'link' property to each certification
const certificationsData = [
  {
    name: 'Managing Clean Core for SAP S/4HANA Cloud - Record of Achievement',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    link: 'https://www.credly.com/badges/30b6e9a4-7e54-4c1e-892f-59c685ff4f2c/linked_in_profile', // ==> REPLACE with your actual URL
  },
   {
    name: 'Exploring SAP Business Technology Platform',
    issuer: 'SAP',
    date: 'Aug 2025',
    icon: SiSap,
    color: 'text-[#008FD3]',
    link: 'https://www.credly.com/badges/cd145134-ec6a-4dbb-8c9a-439d46721618/linked_in_profile', // ==> REPLACE with your actual URL
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: 'Jun 2025',
    icon: SiCisco,
    color: 'text-[#00BCEB]',
    link: 'https://www.credly.com/badges/25bdeaea-35f4-4917-a5b1-fa80db314f5b/linked_in_profile', // ==> REPLACE with your actual URL
  },
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'Accenture',
    date: 'Apr 2025',
    icon: SiAccenture,
    color: 'text-[#A100FF]',
    link: '/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_JE5RaCLLzT3NvjCjS_1745593533054_completion_certificate.pdf', // ==> REPLACE with your actual URL
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-38 md:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-text-light sm:text-4xl">
        My Certifications
      </h2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map(({ name, issuer, date, icon: IconComponent, color, link }, index) => (
          // 3. The entire card is now a clickable link
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div
              className="flex h-full flex-col justify-between rounded-lg border border-border-gray bg-main-gray p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div>
                <div className="flex items-start gap-4">
                  <span className={`text-4xl ${color}`}>
                    <IconComponent />
                  </span>
                  <div>
                    <h3 className="font-bold text-text-light">{issuer}</h3>
                    <p className="text-sm text-text-dark">{name}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 self-end font-mono text-sm text-text-dark">{date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import Link from 'next/link';

const contactDetails = [
  {
    icon: <FiPhone />,
    title: 'Phone & Mobile',
    details: ['(+91) 7980794966'],
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    details: ['sumitsarkar11598@gmail.com'],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    details: ['Uttarpara,Hooghly, West Bengal, India'],
  },
  {
    icon: <FaShareAlt />,
    title: 'Social Media',
    details: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-sarkar-0229b4222/' },
      { name: 'GitHub', href: 'https://github.com/Sumitswappy' },
    ],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-38 md:py-24">
      {/* --- THEME CHANGE #1: Dynamic background gradient --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-gradient-to-tr from-[var(--color-background)] via-[var(--color-accent)]/30 to-[var(--color-background)] rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-5xl px-4 text-center">
        {/* --- THEME CHANGE #2: Dynamic heading text colors --- */}
        <h2 className="text-4xl font-extrabold uppercase tracking-widest text-[var(--color-text-light)]">
          Get In <span className="text-[var(--color-accent)]">Touch</span>
        </h2>
        
        <p className="mt-2 text-lg text-[var(--color-accent)]">
          Let&apos;s Work Together
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* --- THEME CHANGE #3: Dynamic icon colors --- */}
              <div className="text-4xl text-[var(--color-accent-2)]">{item.icon}</div>
              <h3 className="text-xl font-bold text-[var(--color-text-light)]">{item.title}</h3>
              <div className="space-y-2 text-[var(--color-text-dark)]">
                {item.title === 'Social Media' ? (
                  item.details.map((detail, i) =>
                    typeof detail === 'object' && 'href' in detail ? (
                      <Link
                        key={i}
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // --- THEME CHANGE #4: Dynamic hover color for links ---
                        className="flex items-center justify-center gap-2 hover:text-[var(--color-accent)] hover:underline"
                      >
                        {detail.name === 'LinkedIn' && <FaLinkedin />}
                        {detail.name === 'GitHub' && <FaGithub />}
                        <span>{detail.name}</span>
                      </Link>
                    ) : null
                  )
                ) : (
                  item.details
                    .filter((detail): detail is string => typeof detail === 'string')
                    .map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;
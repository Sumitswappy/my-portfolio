import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="pt-8 pb-8 bg-repeat-x bg-top bg-[length:12px_2px] bg-[radial-gradient(circle_at_center,#ffffffff_3px,transparent_2px)]">
      <div className="container mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4">
        <div className="w-full text-center md:w-auto md-text-left">
          <p className="text-lg font-semibold">Sumit Sarkar</p>
          <p className="text-text-dark">sumitsarkar11598@gmail.com</p>
        </div>
        <div className="w-full text-center md:w-auto">
          <p className="text-lg">Follow me on :</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="https://github.com/Sumitswappy" className="text-text-dark hover:text-accent"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/sumit-sarkar-0229b4222/" className="text-text-dark hover:text-accent"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-text-dark">&copy; Copyright 2025. Made by Sumit Sarkar</p>
    </footer>
  );
};

export default Footer;
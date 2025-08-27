import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-40 w-full bg-background/95 backdrop-blur-lg py-4 md:relative md:py-8 border-t border-border-gray">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Sumit Sarkar</p>
          <p className="text-text-dark">sumitsarkar11598@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="hidden text-lg md:block">Media</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Sumitswappy" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/sumit-sarkar-0229b4222/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-text-dark hidden md:block">&copy; Copyright 2025. Made by Sumit Sarkar</p>
    </footer>
  );
};

export default Footer;
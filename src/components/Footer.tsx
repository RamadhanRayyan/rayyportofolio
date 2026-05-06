import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-2xl font-heading font-black tracking-tighter">
            RAYY<span className="text-blue-500">.</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
            Building impactful platforms at NUSA Boarding School.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        
        <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">
          &copy; {new Date().getFullYear()} MUHAMMAD RAMADHAN RAYYAN. ALL VIBES RESERVED.
        </p>
      </div>
    </footer>
  );
}

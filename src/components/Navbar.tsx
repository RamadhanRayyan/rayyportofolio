import { motion } from 'motion/react';
import { Sun, Moon, Menu, X, Github, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-heading font-extrabold tracking-tighter"
        >
          RAYY<span className="text-blue-500">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-blue-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          
          <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass shadow-2xl p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-blue-500 tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/RamadhanRayyan" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/rayy.programmer" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ramadhan-rayyan" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-blue-500" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

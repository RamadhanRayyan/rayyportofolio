/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[var(--bg)] dark:bg-[#020617]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-4xl font-heading font-black tracking-tighter">
                RAYY<span className="text-blue-500">.</span>
              </div>
              <div className="w-48 h-[2px] bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full bg-blue-500 transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <GithubStats />
              <Contact />
            </main>
            <Footer />
            
            {/* Smooth noise texture for futuristic feel */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

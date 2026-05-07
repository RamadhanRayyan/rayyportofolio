import { motion } from 'motion/react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-transparent">
      {/* Background blobs - more subtle in light mode */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-400/5 dark:bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-[0.2em] mb-6 uppercase text-blue-500">
            Available for New Opportunities
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter mb-6 leading-none">
            MUHAMMAD <br />
            <span className="text-gradient">RAMADHAN</span> <br />
            RAYYAN
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium">
            Fullstack Vibe Developer <span className="text-blue-500 mx-2">/</span> From idea <ArrowRight className="inline mx-1 text-blue-500" size={18} /> real website
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all"
            >
              View My Work
            </motion.a>
            <div className="flex items-center gap-2">
              <motion.a
                href="/CV.pdf"
                download="CV_Muhammad_Ramadhan_Rayyan.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-none text-sm"
              >
                Download CV <Download size={18} className="text-blue-500" />
              </motion.a>
              <motion.a
                href="https://docs.google.com/document/d/1CmzkU5RjViOxacAZff8J_el-PySDDJTuwOG6wr67phs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass rounded-2xl font-bold flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-none"
                title="View CV Online"
              >
                <ExternalLink size={18} className="text-blue-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}

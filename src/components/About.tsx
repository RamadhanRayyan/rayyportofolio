import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import myPhoto from '../assets/fotoku.JPG';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
              <img 
                src={myPhoto} 
                alt="Muhammad Ramadhan Rayyan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>
          </div>
          {/* Decorative tag */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-sm font-bold leading-tight">
              Based in Nusa, Indonesia 🇮🇩
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-extrabold mb-6">
            WHO IS <span className="text-blue-500">RAYY?</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            I am a student at <span className="font-bold text-blue-600 dark:text-blue-400">SMK Negeri 8 Semarang</span> (Software Engineering) and a <span className="font-bold text-blue-600 dark:text-blue-400">Dicoding IDCamp 2024</span> graduate.
          </p>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            My goal is to create impactful digital solutions. I believe in the <span className="italic font-semibold text-blue-500">"Vibecoder mindset"</span> — combining technical excellence with creative soul and high-performance user experience.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-heading font-black text-blue-500">15+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Finished Projects</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-blue-500">Fullstack</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Development Focus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

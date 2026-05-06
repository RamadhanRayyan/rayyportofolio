import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal, Cpu, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-blue-500" />,
      skills: ["JavaScript", "HTML", "CSS", "C++"]
    },
    {
      title: "Frameworks",
      icon: <Layout className="text-cyan-500" />,
      skills: ["React", "Next.js", "Vite", "Hono", "TanStack"]
    },
    {
      title: "Tools & Backend",
      icon: <Database className="text-indigo-500" />,
      skills: ["Git", "Supabase", "Netlify", "PostgreSQL"]
    },
    {
      title: "Specialty",
      icon: <Terminal className="text-emerald-500" />,
      skills: ["Vibecoder Mindset", "Fullstack Architecture", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Technical Prowess</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">MY TECH <span className="text-gradient">STACK</span></h3>
          </div>
          <p className="max-w-xs text-gray-500 dark:text-gray-400 font-medium">
            Building scalable digital solutions with a focus on modern, efficient architecture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase tracking-wider rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

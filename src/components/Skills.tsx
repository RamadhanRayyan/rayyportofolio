import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal, Cpu, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-blue-500" />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Layout className="text-cyan-500" />,
      skills: ["React", "Next.js", "Node.js", "Tanstack", "Tailwind CSS"]
    },
    {
      title: "Tools & Backend",
      icon: <Database className="text-indigo-500" />,
      skills: ["Git", "GitHub", "Supabase", "PostgreSQL", "Vercel"]
    },
    {
      title: "Specialty",
      icon: <Terminal className="text-emerald-500" />,
      skills: ["Fullstack Dev", "UI/UX Principles", "AI Integration", "Web Performance"]
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
          <p className="max-w-xs text-slate-600 dark:text-slate-400 font-medium">
            Building scalable digital solutions with a focus on modern, efficient architecture.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl hover:border-blue-500/50 transition-all group hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-slate-800/50 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {category.icon}
              </div>
              <h4 className="text-base md:text-xl font-bold mb-3 md:mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-md md:rounded-lg border border-blue-100 dark:border-slate-700"
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

import { motion } from 'motion/react';
import { ExternalLink, Github as GithubIcon, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Piparesapan Horisontal",
      desc: "Company profile website for horizontal water absorption pipe solutions.",
      tech: ["React", "Vite", "TanStack", "Supabase", "PostgreSQL"],
      link: "https://piparesapanhorisontal.com",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Omahmaduku",
      desc: "Landing page offering various types of high-quality honey products.",
      tech: ["React", "Vite"],
      link: "https://omahmaduku.web.id",
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Toko Amanah",
      desc: "POS system for store management with real-time inventory tracking.",
      tech: ["React", "Supabase"],
      link: "https://poskoe.netlify.app",
      color: "from-emerald-600 to-teal-500"
    },
    {
      title: "Nusa Track",
      desc: "School platform for assignments, materials, grading, and feedback.",
      tech: ["React", "Supabase", "PostgreSQL"],
      link: "https://nusatrack.netlify.app",
      color: "from-indigo-600 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">FEATURED <span className="text-gradient">PROJECTS</span></h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-8 mb-6 relative group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <Layers className="text-white/20 absolute -bottom-10 -right-10 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-3 glass rounded-2xl">
                      <ExternalLink className="text-white" size={20} />
                    </div>
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-white tracking-tight">{project.title}</h4>
                </div>
              </div>
              
              <div className="px-4">
                <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-500 group-hover:gap-4 transition-all"
                >
                  Explore Project <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

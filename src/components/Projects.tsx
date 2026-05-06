import { motion } from 'motion/react';
import { ExternalLink, Github as GithubIcon, Layers } from 'lucide-react';
import pipaResapanImg from '../assets/piparesapanss.png';
import omahMadukuImg from '../assets/omahmadukuss.png';
import poskoeImg from '../assets/poskoess.png';
import nusaTrackImg from '../assets/nusatrackss.png';

export default function Projects() {
  const projects = [
    {
      title: "Piparesapan Horisontal",
      desc: "Company profile website for horizontal water absorption pipe solutions.",
      tech: ["React", "Vite", "TanStack", "Supabase", "PostgreSQL"],
      link: "https://piparesapanhorisontal.com",
      image: pipaResapanImg,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Omahmaduku",
      desc: "Landing page offering various types of high-quality honey products.",
      tech: ["React", "Vite"],
      link: "https://omahmaduku.web.id",
      image: omahMadukuImg,
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Toko Amanah",
      desc: "POS system for store management with real-time inventory tracking.",
      tech: ["React", "Supabase"],
      link: "https://poskoe.netlify.app",
      image: poskoeImg,
      color: "from-emerald-600 to-teal-500"
    },
    {
      title: "Nusa Track",
      desc: "School platform for assignments, materials, grading, and feedback.",
      tech: ["React", "Supabase", "PostgreSQL"],
      link: "https://nusatrack.netlify.app",
      image: nusaTrackImg,
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
              <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 relative group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Subtle gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white/20"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </a>
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-white tracking-tight drop-shadow-lg">{project.title}</h4>
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

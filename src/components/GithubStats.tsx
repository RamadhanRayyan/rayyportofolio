import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, Users, BookMarked } from 'lucide-react';

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  avatar_url: string;
}

export default function GithubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/RamadhanRayyan')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) return null;

  const stats = [
    { label: 'Repositories', value: data.public_repos, icon: <BookMarked size={18} /> },
    { label: 'Followers', value: data.followers, icon: <Users size={18} /> },
    { label: 'Following', value: data.following, icon: <GitFork size={18} /> },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass rounded-[2rem] p-8 md:p-12 overflow-hidden relative"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12">
            <Github size={200} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl skew-x-3 rotate-3">
                <img src={data.avatar_url} alt="GitHub Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 flex items-center justify-center md:justify-start gap-2">
                <Github size={16} /> Open Source Activity
              </h3>
              <h4 className="text-3xl font-heading font-black mb-6 uppercase">Living on the <span className="text-gradient">Edge</span></h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-1">
                      {stat.icon}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <p className="text-3xl font-heading font-black">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:ml-auto">
              <a 
                href="https://github.com/RamadhanRayyan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform"
              >
                Follow on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

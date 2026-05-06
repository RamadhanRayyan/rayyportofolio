import { motion } from 'motion/react';
import { Mail, Github, Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'Email', icon: <Mail />, href: 'mailto:muhammadramadhanrayyan@gmail.com', value: 'muhammadramadhanrayyan@gmail.com' },
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/RamadhanRayyan', value: '@RamadhanRayyan' },
    { name: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com/rayy.programmer', value: '@rayy.programmer' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/muhammad-ramadhan-rayyan', value: 'Muhammad Ramadhan Rayyan' },
  ];

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-8">
              LET'S BUILD <br />
              SOMETHING <span className="text-gradient">AWESOME</span>
            </h3>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-lg font-medium">
              Have an idea or a project in mind? I'm always open to discussing new opportunities and collaborations.
            </p>
            
            <div className="space-y-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">{link.name}</p>
                    <p className="text-lg font-bold group-hover:text-blue-500 transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Form Placeholder / Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] relative z-10"
            >
              <h4 className="text-2xl font-heading font-bold mb-8">Send a Message</h4>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 py-4 font-medium focus:ring-2 focus:ring-blue-500 transition-shadow outline-none" placeholder="Rayy" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-60">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 py-4 font-medium focus:ring-2 focus:ring-blue-500 transition-shadow outline-none" placeholder="rayy@vibes.com" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-60">Your Message</label>
                  <textarea className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 py-4 font-medium focus:ring-2 focus:ring-blue-500 transition-shadow outline-none h-32 resize-none" placeholder="Let's vibe on a new project!" />
                </div>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20">
                  Coming Soon <Send size={18} />
                </button>
              </div>
            </motion.div>
            
            {/* Background blur blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

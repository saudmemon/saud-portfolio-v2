import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Secure IoT Gateway Simulator',
    category: 'Featured · Full-Stack',
    description: 'Final Year Project (FYP) – In Progress. A cloud-integrated monitoring platform for real-time traffic visualization and anomaly detection in IoT ecosystems.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  }
];

const projects = [
  {
    title: 'Stack Blogging Platform (MERN Stack)',
    category: 'Full-Stack',
    description: 'A robust content management system with Markdown support, persistent storage, and rich media handling.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    link: 'https://blog-platform-theta-two.vercel.app/',
    github: 'https://github.com/saudmemon/blog-platform',
  },
  {
    title: 'Task Management Tool',
    category: 'Frontend App',
    description: 'An interactive productivity tool for managing daily tasks with drag-and-drop features and local storage persistence.',
    tech: ['React', 'Tailwind', 'Context API'],
    link: 'https://task-management-frontend-rose-rho.vercel.app/login',
    github: 'https://github.com/saudmemon/task-management-frontend',
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative group">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              Showcasing production-level applications that balance security, performance, and scalability.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group/card relative rounded-[40px] overflow-hidden bg-bg-secondary border border-white/5 shadow-lg hover:shadow-[0_0_30px_rgba(178,129,53,0.3)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[16/10] relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 opacity-70 group-hover/card:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{project.category}</span>
                      {project.title.includes('IoT') && (
                        <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                          FYP In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-black text-text-primary leading-tight">{project.title}</h3>
                  </div>
                  
                  <p className="text-text-secondary line-clamp-2 md:line-clamp-3 mb-6 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:text-primary transition-all text-text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                      )}
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-all text-white shadow-lg shadow-primary/30 hover:scale-110">
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-text-secondary mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                       {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Code
                  </a>
                )}
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors">
                    <ArrowUpRight size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const featuredProject = {
  title: 'Secure IoT Gateway Simulator',
  category: 'Full-Stack · Enterprise Solution',
  description: 'A cloud-integrated monitoring platform for real-time traffic visualization and anomaly detection in IoT ecosystems. Features JWT authentication, PostgreSQL, and live device provisioning.',
  tech: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'WebSockets'],
  link: '#',
  github: '#',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  status: 'In Progress',
};

const projects = [
  {
    title: 'Stack Blogging Platform',
    category: 'MERN Stack',
    description: 'A robust content management system with Markdown support, persistent storage, and rich media handling.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    link: 'https://blog-platform-theta-two.vercel.app/',
    github: 'https://github.com/saudmemon/blog-platform',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Task Management Tool',
    category: 'Frontend App',
    description: 'An interactive productivity tool with drag-and-drop, local storage persistence, and clean UI.',
    tech: ['React', 'Tailwind', 'Context API'],
    link: 'https://task-management-frontend-rose-rho.vercel.app/login',
    github: 'https://github.com/saudmemon/task-management-frontend',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-lg">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Selected <span className="gradient-text">works</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-description md:text-right md:max-w-sm"
          >
            Production-level apps built with security, performance, and design in mind.
          </motion.p>
        </div>

        {/* Featured Project */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative rounded-2xl overflow-hidden mb-8 border border-text-primary/5 bg-bg-secondary/50"
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-bg-secondary/60 to-transparent" />
            </div>

            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {featuredProject.category}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full">
                  <Star size={10} className="fill-primary" />
                  Featured
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-text-primary">
                {featuredProject.title}
              </h3>

              <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tech.map((t, j) => (
                  <span key={j} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-text-primary/5 rounded-lg text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {featuredProject.github !== '#' && (
                  <a href={featuredProject.github} target="_blank" className="w-10 h-10 rounded-xl flex items-center justify-center border border-text-primary/10 text-text-secondary hover:text-primary hover:border-primary/30 transition-all">
                    <GithubIcon size={18} />
                  </a>
                )}
                {featuredProject.link !== '#' && (
                  <a href={featuredProject.link} target="_blank" className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all">
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Image Header */}
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 to-transparent" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex-grow flex flex-col justify-between relative z-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[11px] font-medium px-2.5 py-1 bg-white/5 border border-text-primary/5 rounded-md text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors">
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors">
                      <ArrowUpRight size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

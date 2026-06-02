import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star, Layers, Compass, Code2 } from 'lucide-react';

// Local PNG assets uploaded by the user:
import myaiImg from '../assets/Ai.png';
import iotImg from '../assets/IOT.png';
import mlsaImg from '../assets/MLSA.png';
import nexusImg from '../assets/BLOG.png';
import taskImg from '../assets/Task.png';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const featuredProjects = [
  {
    title: 'MyAI Chat — AI Chat Interface',
    category: 'Frontend · AI Integration',
    description: 'A fully functional conversational AI application inspired by ChatGPT. Integrated with the Groq API (Llama 3.3) for blazing-fast responses. Features real-time streaming, markdown rendering, multi-conversation history with localStorage, and voice recognition.',
    tech: ['React.js', 'Vite', 'Groq API', 'Vanilla CSS', 'localStorage', 'Web Speech API'],
    link: 'https://myai-chat-sepia.vercel.app/',
    github: 'https://github.com/saudmemon/myai-chat',
    image: myaiImg,
    status: 'Completed',
    bullets: [
      'Built a fully functional AI chat application utilizing React.js, Vite, and Groq API.',
      'Implemented real-time streaming, speech-to-text / text-to-speech, and markdown.',
      'Integrated multi-conversation history, export tools, and dark/light modes.'
    ]
  },
  {
    title: 'Secure IoT Gateway Simulator',
    category: 'Full-Stack · Final Year Project',
    description: 'A cloud-integrated gateway monitoring and traffic visualization dashboard with anomaly detection. Designed to simulate secure and insecure device communications, role-based JWT auth, and live security logging.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'RESTful API'],
    link: '#',
    github: 'https://github.com/saudmemon/secure-iot-gateway',
    image: iotImg,
    status: 'In Progress (FYP)',
    bullets: [
      'Developing monitoring platform for real-time secure IoT gateways.',
      'Designed gateway-device mapping with PostgreSQL structured relational database.',
      'Secured backend endpoints via JWT role-based access control.'
    ]
  }
];

const otherProjects = [
  {
    title: 'MLSA SZABIST Core Website (Redesign)',
    category: 'Frontend · Redesign',
    type: 'Frontend',
    description: 'Modernized and redesigned the official Microsoft Learn Student Ambassadors (MLSA) website for the SZABIST chapter. Migrated the code from vanilla JavaScript to React.js for component scalability and responsive design.',
    tech: ['React.js', 'Vite', 'Vanilla CSS', 'Framer Motion'],
    link: 'https://mlsa-szabist.vercel.app/',
    github: 'https://github.com/saudmemon/mlsa-website-redesign',
    image: mlsaImg,
  },
  {
    title: 'Stack Blogging Platform',
    category: 'Full-Stack · MERN',
    type: 'Full-Stack',
    description: 'A complete content publishing tool where users can write, manage, and share markdown-formatted blogs. Integrated Quill.js for rich text editing and secure file uploading.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Quill.js'],
    link: 'https://blog-platform-theta-two.vercel.app/',
    github: 'https://github.com/saudmemon/blog-platform',
    image: nexusImg,
  },
  {
    title: 'Task Management Tool',
    category: 'Full-Stack · NextJS',
    type: 'Full-Stack',
    description: 'Full-stack task manager featuring clean CRUD, protected backend routes via cookies/JWT, environments configuration, and separate code repositories. Deployed on Render and Vercel.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT'],
    link: 'https://task-management-frontend-rose-rho.vercel.app/login',
    github: 'https://github.com/saudmemon/task-management-frontend',
    image: taskImg,
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

interface ProjectsProps {
  recruiterMode: boolean;
}

export const Projects = ({ recruiterMode }: ProjectsProps) => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend'>('All');

  const filteredOtherProjects = otherProjects.filter((p) => {
    if (filter === 'All') return true;
    return p.type === filter;
  });

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
            Production-grade web applications built with rigorous architecture, speed, and sleek design.
          </motion.p>
        </div>

        {/* Featured Projects Section */}
        <div className="space-y-10 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={16} className="text-primary" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Featured Work</h3>
          </div>

          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden border border-text-primary/5 bg-bg-secondary/50 transition-all duration-500 ${
                recruiterMode ? 'border-primary/30 ring-1 ring-primary/10' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden border-b lg:border-b-0 lg:border-r border-text-primary/5 bg-bg-main">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 flex-wrap mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
                      <Star size={10} className="fill-primary text-primary" />
                      Featured
                    </span>
                    <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-text-primary">
                    {project.title}
                  </h4>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Recruiter highlights bullets */}
                  {recruiterMode && (
                    <ul className="mb-6 space-y-1.5 pl-1 border-l border-primary/20">
                      {project.bullets.map((b, idx) => (
                        <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-white/5 border border-text-primary/5 rounded-lg text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" className="w-11 h-11 rounded-xl flex items-center justify-center border border-text-primary/10 text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all">
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" className="px-5 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all">
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Compass size={16} className="text-secondary" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Academic & Personal Projects</h3>
            </div>

            {/* Interactive Filters */}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 p-1 rounded-xl w-fit">
              {(['All', 'Full-Stack', 'Frontend'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    filter === t
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredOtherProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  className="glass-card flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden relative border-b border-text-primary/5 bg-bg-main">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-750"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary mb-3 block">
                        {project.category}
                      </span>
                      <h4 className="text-lg font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mb-5">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] font-bold tracking-wider px-2.5 py-1 bg-white/5 border border-text-primary/5 rounded-md text-text-secondary">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                      {project.github && (
                        <a href={project.github} target="_blank" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-text-secondary hover:text-primary transition-colors">
                          <Code2 size={13} /> Code
                        </a>
                      )}
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-text-secondary hover:text-primary transition-colors">
                          <ArrowUpRight size={13} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};


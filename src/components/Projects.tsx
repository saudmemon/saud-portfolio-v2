import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star, Compass, Code2 } from 'lucide-react';

// Local PNG assets uploaded by the user:
import myaiImg from '../assets/Ai.png';
import iotImg from '../assets/IOT.png';
import mlsaImg from '../assets/MLSA.png';
import nexusImg from '../assets/BLOG.png';
import taskImg from '../assets/Task.png';

const projects = [
  {
    title: 'MyAI Chat — AI Chat Interface',
    category: 'Frontend · AI Integration',
    type: 'Frontend',
    description: 'A fully functional conversational AI application inspired by ChatGPT. Integrated with the Groq API (Llama 3.3) for blazing-fast responses. Features real-time streaming, markdown rendering, multi-conversation history with localStorage, and voice recognition.',
    tech: ['React.js', 'Vite', 'Groq API', 'Vanilla CSS', 'localStorage', 'Web Speech API'],
    link: 'https://myai-chat-sepia.vercel.app/',
    github: 'https://github.com/saudmemon/myai-chat',
    image: myaiImg,
    featured: true,
    status: 'Completed',
    bullets: [
      'Built a fully functional AI chat application utilizing React.js, Vite, and Groq API.',
      'Implemented real-time streaming, speech-to-text / text-to-speech, and markdown.',
      'Integrated multi-conversation history, export tools, and dark/light modes.'
    ]
  },
  {
    title: 'Secure IoT Gateway Simulator',
    category: 'Full-Stack · FYP In Progress',
    type: 'Full-Stack',
    description: 'A cloud-integrated gateway monitoring and traffic visualization dashboard with anomaly detection. Designed to simulate secure and insecure device communications, role-based JWT auth, and live security logging.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'RESTful API'],
    link: '#',
    github: 'https://github.com/saudmemon',
    image: iotImg,
    featured: true,
    status: 'In Progress (FYP)',
    bullets: [
      'Developing monitoring platform for real-time secure IoT gateways.',
      'Designed gateway-device mapping with PostgreSQL structured relational database.',
      'Secured backend endpoints via JWT role-based access control.'
    ]
  },
  {
    title: 'MLSA SZABIST Core Website (Redesign)',
    category: 'Frontend · In Progress',
    type: 'Frontend',
    description: 'Modernized and redesigned the official Microsoft Learn Student Ambassadors (MLSA) website for the SZABIST chapter. Migrated the code from vanilla JavaScript to React.js for component scalability and responsive design.',
    tech: ['React.js', 'Vite', 'Vanilla CSS', 'Framer Motion'],
    link: '',
    github: 'https://github.com/saudmemon',
    image: mlsaImg,
    featured: false,
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
    featured: false,
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
    featured: false,
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

  const filteredProjects = projects.filter((p) => {
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

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2">
            <Compass size={16} className="text-secondary" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Selected Projects</h3>
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

        {/* Unified Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className={`glass-card flex flex-col justify-between group relative overflow-hidden transition-all duration-500 ${
                  recruiterMode && project.featured ? 'border-primary/45 ring-1 ring-primary/10' : ''
                }`}
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
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-0.5 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
                          <Star size={8} className="fill-primary text-primary" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-xs text-text-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Recruiter highlights bullets inside card */}
                    {recruiterMode && project.bullets && (
                      <ul className="mb-5 space-y-1.5 pl-1 border-l border-primary/20">
                        {project.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-[10px] text-text-secondary leading-relaxed flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

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
    </section>
  );
};


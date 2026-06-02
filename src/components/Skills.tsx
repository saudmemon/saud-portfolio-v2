import { motion } from 'framer-motion';
import { GitHubStats } from './GitHubStats';
import { Code, Server, Cloud, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'var(--primary)',
    items: [
      { name: 'JavaScript', hot: true },
      { name: 'TypeScript', hot: false },
      { name: 'HTML/CSS', hot: false },
      { name: 'SQL (PostgreSQL)', hot: true }
    ]
  },
  {
    title: 'Frameworks & Stacks',
    icon: Server,
    color: 'var(--secondary)',
    items: [
      { name: 'React.js', hot: true },
      { name: 'Node.js / Express', hot: true },
      { name: 'MERN Stack', hot: true },
      { name: 'REST APIs', hot: false },
      { name: 'Groq AI API', hot: false },
      { name: 'Web Speech API', hot: false }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'var(--accent)',
    items: [
      { name: 'AWS', hot: false },
      { name: 'Render', hot: false },
      { name: 'Vercel', hot: false },
      { name: 'Secure Deployment', hot: true }
    ]
  },
  {
    title: 'Tools & Concepts',
    icon: Cpu,
    color: 'var(--primary)',
    items: [
      { name: 'Git & GitHub', hot: false },
      { name: 'Figma', hot: false },
      { name: 'OOP / DSA', hot: true },
      { name: 'Troubleshooting', hot: false }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

interface SkillsProps {
  recruiterMode: boolean;
}

export const Skills = ({ recruiterMode }: SkillsProps) => {
  return (
    <section id="skills" className="relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Tools I <span className="gradient-text">use</span>
          </motion.h2>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 relative overflow-hidden"
              >
                {/* Visual Glow */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-10 transition-all duration-500"
                  style={{ backgroundColor: category.color }}
                />

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)`,
                      color: category.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, j) => {
                    const isHot = skill.hot && recruiterMode;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.03, duration: 0.25 }}
                        whileHover={{ scale: 1.03, y: -1 }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-300 cursor-default flex items-center gap-1.5 ${
                          isHot
                            ? 'bg-primary/10 border-primary/40 text-primary shadow-glow shadow-primary/15'
                            : 'bg-text-primary/[0.02] border-text-primary/[0.05] text-text-secondary hover:text-text-primary hover:bg-white/5 hover:border-text-primary/10'
                        }`}
                      >
                        {skill.name}
                        {isHot && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        )}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Contributions */}
        <GitHubStats />
      </div>
    </section>
  );
};


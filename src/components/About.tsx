import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const highlights = [
  { icon: Zap, label: 'Full-Stack Engineering', desc: 'React, MERN & PostgreSQL', color: 'var(--primary)' },
  { icon: Users, label: 'Leadership & Teamwork', desc: 'Technical Coordinator @ MLSA & Ambassador @ AIESEC', color: 'var(--secondary)' },
  { icon: Target, label: 'Problem Solving & DSA', desc: 'Object-Oriented Programming & Troubleshooting', color: 'var(--accent)' },
];

interface AboutProps {
  recruiterMode: boolean;
}

export const About = ({ recruiterMode }: AboutProps) => {
  return (
    <section id="about" className="relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            <Sparkles size={12} className="inline mr-2 -mt-0.5" />
            About
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            A bit about <span className="gradient-text">me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bio Card — spans 3 columns */}
          <motion.div
            className={`lg:col-span-3 glass-card p-8 md:p-10 relative group overflow-hidden ${
              recruiterMode ? 'border-primary/30 ring-1 ring-primary/10 shadow-lg shadow-primary/5' : ''
            }`}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  Professional Profile
                </span>
                {recruiterMode && (
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase bg-primary/10 text-primary border border-primary/20 rounded">
                    Seeking Job Opportunities
                  </span>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight text-text-primary">
                Saud Ahmed
              </h3>
              <p className="text-text-secondary text-[15px] md:text-base leading-[1.8] mb-6">
                I am a final-semester BS Computer Science student at SZABIST Islamabad with a deep-rooted passion for software engineering and web development. Through my internships, personal projects, and active tech community coordination, I have gained hands-on expertise building responsive, high-performance web applications using React.js, JavaScript, and MongoDB.
              </p>
              <p className="text-text-secondary text-[15px] md:text-base leading-[1.8]">
                I pride myself on clean code architecture, modular design systems, and rapid responsiveness. Currently seeking internship, junior developer, and entry-level software engineering roles to contribute my problem-solving skills and teamwork drive.
              </p>
            </div>
          </motion.div>

          {/* Highlights Card — spans 2 columns */}
          <motion.div
            className="lg:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-8">
              Core Competencies
            </h4>
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group/item"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)`, color: item.color }}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary">{item.label}</h5>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


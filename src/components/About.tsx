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
  { icon: Zap, label: 'Frontend Engineering', desc: 'React.js, Next.js, JavaScript & CSS', color: 'var(--primary)' },
  { icon: Users, label: 'Leadership & Teamwork', desc: 'Technical Coordinator @ MLSA & Campus Ambassador @ AIESEC', color: 'var(--secondary)' },
  { icon: Target, label: 'Problem Solving & DSA', desc: 'Object-Oriented Programming, Agile & SDLC', color: 'var(--accent)' },
];

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag animate-pulse"
          >
            <Sparkles size={12} className="inline mr-2 -mt-0.5" />
            About Me
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
            className="lg:col-span-3 glass-card p-8 md:p-10 relative group overflow-hidden border border-black/[0.04] bg-white/60 shadow-md shadow-black/[0.01]"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-750 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Professional Profile
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight text-text-primary">
                Saud Ahmed Memon
              </h3>
              <p className="text-text-secondary text-[15px] md:text-base leading-[1.8] mb-6 font-medium">
                A BS Computer Science final year student at SZABIST Islamabad with a specialization in Frontend Web Development and a sound knowledge of software engineering fundamentals. Hands-on experience creating highly interactive, component-driven user interfaces using React.js, JavaScript, and CSS — through internship experience and independent projects.
              </p>
              <p className="text-text-secondary text-[15px] md:text-base leading-[1.8] font-medium">
                Currently looking for an internship, junior developer position, or Software Engineer Intern role in frontend technologies. I pride myself on clean code architecture, modular design systems, and building fast, responsive web experiences.
              </p>
            </div>
          </motion.div>

          {/* Highlights Card — spans 2 columns */}
          <motion.div
            className="lg:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center border border-black/[0.04] bg-white/60 shadow-md shadow-black/[0.01]"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-6">
              Core Competencies
            </h4>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/[0.04] bg-white/40 hover:bg-white/80 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group/item cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-105"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`, color: item.color }}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-text-primary transition-colors group-hover/item:text-primary">{item.label}</h5>
                    <p className="text-xs text-text-secondary mt-0.5 leading-relaxed font-medium">{item.desc}</p>
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

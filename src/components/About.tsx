import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const highlights = [
  { icon: Users, label: 'Leadership', desc: 'AIESEC & MLSA', color: 'var(--primary)' },
  { icon: Zap, label: 'Problem Solving', desc: 'Algorithms & Design', color: 'var(--secondary)' },
  { icon: Target, label: 'Collaboration', desc: 'Cross-functional teams', color: 'var(--accent)' },
];

export const About = () => {
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
            className="lg:col-span-3 glass-card p-8 md:p-10 relative group overflow-hidden"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">
                Saud Ahmed
              </h3>
              <p className="text-text-secondary text-[15px] md:text-base leading-[1.8] mb-6">
                I'm a Front-End Developer based in Islamabad with hands-on experience in React.js, MERN Stack, and AWS deployment. I've built and redesigned real projects — including the official MLSA SZABIST website — and I help businesses get a fast, professional online presence. Open to freelance projects.
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
              Core Strengths
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
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)`, color: item.color }}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary">{item.label}</h5>
                    <p className="text-xs text-text-muted">{item.desc}</p>
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

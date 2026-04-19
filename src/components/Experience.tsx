import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Campus Ambassador',
    company: 'AIESEC',
    period: 'Apr 2026 – Present',
    description: 'Spearheading campus initiatives, engaging students in leadership development programs and global exchange opportunities.',
    status: 'current',
  },
  {
    role: 'Technical Coordinator',
    company: 'MLSA SZABIST',
    period: 'Feb 2026 – Present',
    description: 'Leading technical deployments for events, maintaining student platforms, and coordinating hackathons.',
    status: 'current',
  },
  {
    role: 'Frontend Intern',
    company: 'Fidsor Pvt Ltd',
    period: 'Aug 2025 – Sep 2025',
    description: 'Developed production-ready React applications and collaborated on high-fidelity UI/UX design systems.',
    status: 'completed',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-md">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Where I've <span className="gradient-text">worked</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-description lg:text-right lg:max-w-sm"
          >
            Building expertise through meaningful roles in tech and leadership.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 group relative overflow-hidden"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    {exp.status === 'current' && (
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-medium text-text-muted bg-white/5 dark:bg-white/5 px-4 py-2 rounded-lg border border-white/5 w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed pl-0 md:pl-0">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

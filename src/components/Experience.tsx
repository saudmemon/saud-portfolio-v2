import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Campus Ambassador',
    company: 'AIESEC',
    period: 'Apr 2026 – Present',
    description: 'Spearheading campus initiatives, engaging students in leadership development programs.',
    accent: 'var(--primary)'
  },
  {
    role: 'Technical Coordinator',
    company: 'MLSA SZABIST',
    period: 'Feb 2026 – Present',
    description: 'Leading technical deployments for events and maintaining student initiative platforms.',
    accent: 'var(--secondary)'
  },
  {
    role: 'Frontend Intern',
    company: 'Fidsor Pvt Ltd',
    period: 'Aug 2025 – Sep 2025',
    description: 'Developed production-ready React applications and collaborated on high-fidelity UI/UX systems.',
    accent: 'var(--accent)'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="section-tag">Career Journey</span>
            <h2 className="section-title">Work <br /> <span className="gradient-text">Experience</span></h2>
            <p className="text-text-secondary text-lg mt-8 leading-relaxed max-w-sm">
              My professional trajectory is defined by a commitment to technical excellence and cross-functional leadership.
            </p>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-12 border-l border-white/10"
              >
                {/* Visual Dot */}
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />

                <div className="glass-card p-10 hover:border-white/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-text-primary/80 font-medium">{exp.company}</p>
                    </div>
                    <div className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-black tracking-widest uppercase text-text-primary">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

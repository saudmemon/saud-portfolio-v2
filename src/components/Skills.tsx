import { motion } from 'framer-motion';
import { GitHubStats } from './GitHubStats';

const skills = [
  'JavaScript', 'React.js', 'Node.js',
  'HTML5', 'CSS3', 'MERN Stack',
  'AWS', 'Vercel', 'Render',
  'Git', 'GitHub', 'TypeScript',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export const Skills = () => {
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

        {/* Skills Grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-xl bg-text-primary/[0.03] border border-text-primary/[0.06] text-sm font-medium text-text-primary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* GitHub Contributions */}
        <GitHubStats />
      </div>
    </section>
  );
};

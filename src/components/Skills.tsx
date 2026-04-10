import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { GitHubStats } from './GitHubStats';

export const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-tag"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div 
            className="glass-card p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Layers size={24} className="text-primary" />
              <h3 className="text-2xl font-bold tracking-wider">Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                'JavaScript', 'React.js', 'Node.js', 
                'HTML', 'CSS', 'MERN Stack', 
                'AWS', 'Vercel', 'Render', 
                'Git', 'GitHub'
              ].map((skill, j) => (
                <span key={j} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-lg font-medium text-text-primary hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all cursor-default shadow-md shadow-black/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* GitHub Contributions Enhancement */}
          <GitHubStats />
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { User, Users, Target, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-tag"
          >
            Overview
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </div>

        <div className="bento-grid">
          {/* Main About Card */}
          <motion.div 
            className="bento-item large glass-card p-10 flex flex-col justify-end relative group overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <User size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Saud Ahmed</h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
                Computer Science student with growing expertise in <span className="text-text-primary">React.js, JavaScript, </span> and web technologies. Currently a <span className="text-primary font-bold">Campus Ambassador at AIESEC</span> in Pakistan and <span className="text-secondary font-bold">Technical Coordinator at MLSA SZABIST</span>. Strong in teamwork, communication, and problem-solving.
              </p>
            </div>
          </motion.div>

           {/* Highlights */}
           <motion.div 
            className="bento-item tall glass-card p-8 flex flex-col justify-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Leadership</h4>
                    <p className="text-sm text-text-muted">AIESEC & MLSA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Problem Solving</h4>
                    <p className="text-sm text-text-muted">Algorithm & System Design</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Teamwork</h4>
                    <p className="text-sm text-text-muted">Cross-functional collaboration</p>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

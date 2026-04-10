// @ts-ignore
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export const GitHubStats = () => {
  return (
    <motion.div 
      className="glass-card p-10 flex flex-col items-center justify-center relative group overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold mb-2">GitHub Contributions</h3>
        <p className="text-text-secondary text-sm">A visual summary of my open-source and project commit history</p>
      </div>
      <div className="w-full flex justify-center overflow-x-auto pb-4">
        <GitHubCalendar 
          username="saudmemon" 
          colorScheme="dark"
          theme={{
            dark: ['var(--bg-secondary)', 'var(--primary)', 'var(--primary-hover)', 'var(--secondary)', 'var(--accent)']
          }} 
        />
      </div>
    </motion.div>
  );
};

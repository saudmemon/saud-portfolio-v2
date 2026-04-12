// @ts-ignore
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export const GitHubStats = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="glass-card p-8 md:p-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-1 tracking-tight">GitHub Activity</h3>
        <p className="text-xs text-text-muted">Commit history across open-source and personal projects</p>
      </div>
      <div className="w-full flex justify-center overflow-x-auto pb-2">
        <GitHubCalendar
          username="saudmemon"
          colorScheme={theme}
          theme={{
            dark: ['#161b22', '#B28135', '#c99540', '#6366f1', '#22d3ee'],
            light: ['#ebedf0', '#B28135', '#c99540', '#6366f1', '#22d3ee'],
          }}
        />
      </div>
    </motion.div>
  );
};

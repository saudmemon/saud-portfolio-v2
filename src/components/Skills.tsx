import { motion } from 'framer-motion';
import { GitHubStats } from './GitHubStats';

const track1 = [
  { name: 'JavaScript (ES6+)', color: 'var(--primary)' },
  { name: 'HTML5', color: 'var(--secondary)' },
  { name: 'CSS3', color: 'var(--accent)' },
  { name: 'C++', color: 'var(--primary)' },
  { name: 'Git & GitHub', color: 'var(--secondary)' },
  { name: 'Figma', color: 'var(--accent)' },
  { name: 'Webpack', color: 'var(--primary)' },
  { name: 'Software Architecture', color: 'var(--secondary)' },
  { name: 'Agile', color: 'var(--accent)' }
];

const track2 = [
  { name: 'React.js', color: 'var(--secondary)' },
  { name: 'Next.js', color: 'var(--primary)' },
  { name: 'Bootstrap', color: 'var(--accent)' },
  { name: 'MongoDB', color: 'var(--primary)' },
  { name: 'NoSQL', color: 'var(--secondary)' },
  { name: 'PostgreSQL', color: 'var(--accent)' },
  { name: 'Vercel', color: 'var(--primary)' },
  { name: 'Render', color: 'var(--secondary)' },
  { name: 'DSA & OOP', color: 'var(--accent)' },
  { name: 'CI/CD', color: 'var(--primary)' },
  { name: 'SDLC', color: 'var(--secondary)' },
  { name: 'Responsive Web Design', color: 'var(--accent)' }
];

export const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="container relative z-10">
        
        {/* Section Header */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary max-w-md mx-auto text-sm md:text-base mt-2"
          >
            A curated list of languages, frameworks, databases, and methodologies that I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Screen Reader Only (Accessibility Fallback) */}
        <div className="sr-only">
          <h3>Languages & Tools</h3>
          <ul>
            {track1.map((item) => <li key={item.name}>{item.name}</li>)}
          </ul>
          <h3>Frameworks & Core Competencies</h3>
          <ul>
            {track2.map((item) => <li key={item.name}>{item.name}</li>)}
          </ul>
        </div>

        {/* Sliding Skills Marquees */}
        <div className="space-y-6 mb-16 relative">
          {/* Subtle Ambient Background Glowing Spots */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-40 bg-primary/5 blur-[100px] rounded-full -z-10" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-40 bg-secondary/5 blur-[100px] rounded-full -z-10" />

          {/* Marquee Track 1 (Moves Left) */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Original Track */}
              {track1.map((item, idx) => (
                <div
                  key={`t1-${idx}`}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold tracking-wide text-text-primary border border-black/[0.04] bg-white/70 hover:border-primary/20 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-primary/5 cursor-default flex-shrink-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
              ))}
              {/* Duplicate Track */}
              {track1.map((item, idx) => (
                <div
                  key={`t1-dup-${idx}`}
                  aria-hidden="true"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold tracking-wide text-text-primary border border-black/[0.04] bg-white/70 hover:border-primary/20 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-primary/5 cursor-default flex-shrink-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2 (Moves Right / Reverse) */}
          <div className="marquee-container">
            <div className="marquee-content reverse">
              {/* Original Track */}
              {track2.map((item, idx) => (
                <div
                  key={`t2-${idx}`}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold tracking-wide text-text-primary border border-black/[0.04] bg-white/70 hover:border-primary/20 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-primary/5 cursor-default flex-shrink-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
              ))}
              {/* Duplicate Track */}
              {track2.map((item, idx) => (
                <div
                  key={`t2-dup-${idx}`}
                  aria-hidden="true"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold tracking-wide text-text-primary border border-black/[0.04] bg-white/70 hover:border-primary/20 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-primary/5 cursor-default flex-shrink-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* GitHub Contributions Section */}
        <GitHubStats />

      </div>
    </section>
  );
};

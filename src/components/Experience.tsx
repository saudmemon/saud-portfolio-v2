import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Campus Ambassador',
    company: 'AIESEC',
    type: 'Part-time | Flexible Engagement',
    period: 'Apr 2026 – Present',
    bullets: [
      'Built awareness and engagement on campus to motivate students by presenting global leadership possibilities and exchange programs to 50+ other students.',
      'Spearheaded promotions for 3+ key student events that contributed to an increase in attendance by 25%.',
      'Collaborated with team members to execute campaigns and outreach activities effectively.',
    ],
    status: 'current',
  },
  {
    role: 'Technical Coordinator',
    company: 'MLSA SZABIST Core Team',
    type: 'Part-time | Flexible Engagement',
    period: 'Feb 2026 – Present',
    bullets: [
      'Led a team of 5+ developers in migrating the official MLSA campus website from JavaScript to React.js, guaranteeing improved modularity in the codebase and decreasing first-page load time by 30%.',
      'Managed the deployment of the website, ensuring that the process included version control and continuous integration using GitHub, with 100% uptime in the production environment.',
      'Supported website development and handled technical tasks for multiple MLSA events and initiatives.',
    ],
    status: 'current',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Fidsor Private Limited, Islamabad',
    type: 'Internship | On-site',
    period: 'July 2025 – August 2025',
    bullets: [
      'Constructed and created over 15+ functional web components via React.js and JavaScript, integrating good coding practices in practical layout design.',
      'Architected high-fidelity user interface and wireframe design in Figma to implement design prototypes in an effective front-end web architecture of 2 client websites.',
      'Created highly responsive designs for live client applications, increasing cross-device responsiveness by 20%.',
    ],
    status: 'completed',
    highlight: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        
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
            className="section-description lg:text-right lg:max-w-sm font-medium"
          >
            Building expertise through meaningful roles in tech, leadership, and hands-on frontend development.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-black/[0.04] ml-4 md:ml-8 pl-6 md:pl-12 space-y-10">
          {/* Vertical light-up line */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className={`absolute left-[-35px] md:left-[-59px] top-6 w-4.5 h-4.5 rounded-full bg-white border-4 ${
                exp.highlight ? 'border-primary ring-4 ring-primary/10' : 'border-secondary'
              } flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110`} />

              {/* Card Container */}
              <div
                className={`glass-card p-6 md:p-8 relative overflow-hidden border border-black/[0.04] bg-white/60 shadow-md shadow-black/[0.01] hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${
                  exp.highlight
                    ? 'border-primary/20 bg-primary/[0.01]'
                    : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        <Briefcase size={18} className="text-primary flex-shrink-0" /> {exp.role}
                      </h3>
                      {exp.status === 'current' && (
                        <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-green-500/10 text-green-600 border border-green-500/20 rounded">
                          Current
                        </span>
                      )}
                      {exp.highlight && (
                        <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
                          Commercial Dev Experience
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary font-semibold">
                      <span>{exp.company}</span>
                      <span className="text-xs text-text-muted font-normal">•</span>
                      <span className="text-xs text-text-muted font-normal">{exp.type}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-text-secondary bg-black/[0.02] border border-black/5 px-4 py-2.5 rounded-xl w-fit flex items-center gap-1.5 flex-shrink-0">
                    <Calendar size={12} className="text-primary" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-3 text-sm md:text-[14px] text-text-secondary leading-relaxed pl-1 font-medium">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

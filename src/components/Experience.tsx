import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Campus Ambassador',
    company: 'AIESEC',
    type: 'Part-time | Flexible Engagement',
    period: 'Apr 2026 – Present',
    bullets: [
      'Represented AIESEC on campus and engaged with 50+ students to promote leadership and exchange programs.',
      'Contributed to event promotions that increased student participation and campus awareness.',
      'Collaborated with team members to execute campaigns and outreach activities effectively.'
    ],
    status: 'current',
  },
  {
    role: 'Technical Coordinator',
    company: 'MLSA SZABIST Core Team',
    type: 'Part-time | Flexible Engagement',
    period: 'Feb 2026 – Present',
    bullets: [
      'Supported website development and handled technical tasks for multiple MLSA events and initiatives.',
      'Improved website functionality to support student activities and events.',
      'Collaborated with team to troubleshoot technical issues and ensure smooth execution of events.'
    ],
    status: 'current',
  },
  {
    role: 'Front-End Developer',
    company: 'Fidsor Private Limited, Islamabad',
    type: 'Internship | On-site',
    period: 'Aug 2025 – Sep 2025',
    bullets: [
      'Developed responsive web applications using React.js, JavaScript, HTML, and CSS.',
      'Collaborated with a development team to design and build responsive web application interfaces.',
      'Improved UI/UX, debugged code, and implemented new features based on client requirements.',
      'Worked in an agile environment, followed project deadlines, and contributed to team-based development.'
    ],
    status: 'completed',
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

interface ExperienceProps {
  recruiterMode: boolean;
}

export const Experience = ({ recruiterMode }: ExperienceProps) => {
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
            Building expertise through meaningful roles in tech, leadership, and hands-on development.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const isFidsor = exp.company.includes('Fidsor');
            const shouldHighlight = recruiterMode && (exp.status === 'current' || isFidsor);

            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`glass-card p-6 md:p-8 group relative overflow-hidden transition-all duration-500 ${
                  shouldHighlight
                    ? 'border-primary/30 ring-1 ring-primary/10 shadow-lg shadow-primary/5 bg-primary/[0.01]'
                    : ''
                }`}
              >
                {/* Decorative left bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 ${
                  shouldHighlight
                    ? 'bg-primary'
                    : 'bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100'
                }`} />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        <Briefcase size={18} className="text-primary" /> {exp.role}
                      </h3>
                      {exp.status === 'current' && (
                        <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20 rounded">
                          Current
                        </span>
                      )}
                      {isFidsor && (
                        <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
                          Commercial Dev Experience
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                      <span>{exp.company}</span>
                      <span className="text-xs text-text-muted">•</span>
                      <span className="text-xs text-text-muted">{exp.type}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-text-secondary bg-text-primary/[0.04] border border-text-primary/5 px-4 py-2.5 rounded-xl w-fit flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2.5 text-sm md:text-[14px] text-text-secondary leading-relaxed pl-1">
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


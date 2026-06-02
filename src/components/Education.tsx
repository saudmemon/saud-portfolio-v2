import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BS Computer Science (Final Semester)',
    institution: 'Shaheed Zulfiqar Ali Bhutto University, Islamabad',
    year: 'Feb 2023 – Feb 2027',
    bullets: ['Actively participated in various university activities and technical events.']
  },
  {
    degree: 'Higher Secondary Certificate (HSC), Grade A1',
    institution: 'GBDC, Bhan Saeedabad',
    year: 'March 2020 – September 2022',
    bullets: []
  }
];

const certifications = [
  {
    title: 'Introduction to AI',
    issuer: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/records/FFHHO5WDQF67',
    bullets: []
  },
  {
    title: 'Master AI for Web App Development',
    issuer: 'Simplilearn',
    date: '2024',
    link: 'https://www.simplilearn.com/skillup',
    bullets: []
  },
  {
    title: 'Artificial Intelligence & Data Science Technical Training',
    issuer: 'SZABIST University, Islamabad',
    date: '2024',
    link: null,
    bullets: []
  },
  {
    title: 'FORGE Certificate',
    issuer: 'AIESEC in Islamabad',
    date: '2025',
    link: null,
    bullets: [
      'Successfully participated in the FORGE program organized by AIESEC in Islamabad.',
      'Contributed to activities aligned with United Nations Sustainable Development Goals (SDGs).',
      'Developed leadership, teamwork, and problem-solving skills through structured youth engagement sessions.'
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

interface EducationProps {
  recruiterMode: boolean;
}

export const Education = ({ recruiterMode }: EducationProps) => {
  return (
    <section id="education" className="relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Academic & <span className="gradient-text">Credentials</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Column */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary">Education History</h3>
            </div>

            {education.map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-6 md:p-7 border-l-[3px] border-l-primary/40 hover:border-l-primary transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-[15px] font-bold text-text-primary">{item.degree}</h4>
                  <span className="text-[10px] font-semibold text-text-secondary bg-text-primary/[0.04] px-3 py-1.5 rounded-lg border border-text-primary/5 w-fit flex items-center gap-1">
                    <Calendar size={10} className="text-primary" />
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-text-secondary font-medium mb-3 flex items-center gap-1.5">
                  <BookOpen size={12} className="text-primary" />
                  {item.institution}
                </p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-1 pl-1">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary">Certifications & Courses</h3>
            </div>

            {certifications.map((item, i) => {
              const hasLink = !!item.link;
              const isGlow = hasLink && recruiterMode;

              return (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`glass-card p-6 md:p-7 border-l-[3px] border-l-secondary/40 hover:border-l-secondary transition-all duration-300 ${
                    isGlow ? 'border-secondary/50 shadow-md shadow-secondary/5' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-[15px] font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-text-secondary font-medium">{item.issuer}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-text-secondary bg-text-primary/[0.04] px-3 py-1.5 rounded-lg border border-text-primary/5 w-fit flex items-center gap-1 self-start sm:self-auto">
                      <Calendar size={10} className="text-secondary" />
                      {item.date}
                    </span>
                  </div>

                  {item.bullets.length > 0 && (
                    <ul className="space-y-1.5 pl-1 mb-4">
                      {item.bullets.map((b, idx) => (
                        <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5 leading-relaxed">
                          <span className="text-secondary mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {hasLink && (
                    <a
                      href={item.link!}
                      target="_blank"
                      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all duration-300 ${
                        isGlow
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90'
                          : 'bg-white/5 border border-white/5 text-text-secondary hover:text-secondary hover:border-secondary/20 hover:bg-secondary/5'
                      }`}
                    >
                      Verify Credentials <ExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


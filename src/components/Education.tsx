import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  { degree: 'BS Computer Science', institution: 'SZABIST Islamabad', year: '2023 – 2027' },
  { degree: 'Higher Secondary Certificate', institution: 'Pre-Engineering', year: 'Grade A1' },
];

const certifications = [
  { title: 'Artificial Intelligence', issuer: 'Coursera', date: '2023' },
  { title: 'AI Web Development', issuer: 'Simplilearn', date: '2024' },
  { title: 'AI & Data Science Training', issuer: 'SZABIST', date: '2024' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const Education = () => {
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
            Academic <span className="gradient-text">journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-lg font-bold tracking-tight">Education</h3>
            </div>

            {education.map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-6 border-l-[3px] border-l-primary/50 hover:border-l-primary transition-colors"
              >
                <h4 className="text-base font-bold mb-1.5">{item.degree}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary font-medium">{item.institution}</span>
                  <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-md">
                    {item.year}
                  </span>
                </div>
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
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Award size={18} />
              </div>
              <h3 className="text-lg font-bold tracking-tight">Certifications</h3>
            </div>

            {certifications.map((item, i) => (
              <motion.div
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-6 border-l-[3px] border-l-secondary/50 hover:border-l-secondary transition-colors"
              >
                <h4 className="text-base font-bold mb-1.5">{item.title}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary font-medium">{item.issuer}</span>
                  <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-md">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

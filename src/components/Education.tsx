import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BS Computer Science (Final Year)',
    institution: 'Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology, Islamabad',
    year: 'Feb 2023 – Feb 2027',
    bullets: ['Actively participated in various university activities and technical events.']
  },
  {
    degree: 'Intermediate (HSC)',
    institution: 'GBDC, Bhan Saeedabad',
    year: 'Sep 2020 – Jun 2022',
    bullets: []
  }
];

const certifications = [
  {
    title: 'IBM Introduction to HTML, CSS & JavaScript',
    issuer: 'Coursera',
    date: '2023',
    link: null,
    bullets: []
  },
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
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MDY5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTM2OTU2OF85MTE0MjAzMTc2Mjc5MjI0MDc1Mi5wbmciLCJ1c2VybmFtZSI6IlNhdWQgQWhtZWQgTWVtb24ifQ%3D%3D',
    bullets: []
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export const Education = () => {
  return (
    <section id="education" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        
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
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
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
                className="glass-card p-6 md:p-7 border border-black/[0.04] bg-white/60 hover:border-primary/20 shadow-md shadow-black/[0.01] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-[15px] font-bold text-text-primary group-hover:text-primary transition-colors duration-300">{item.degree}</h4>
                  <span className="text-[10px] font-bold text-text-secondary bg-black/[0.02] px-3 py-1.5 rounded-lg border border-black/5 w-fit flex items-center gap-1">
                    <Calendar size={10} className="text-primary" />
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-text-secondary font-semibold mb-3 flex items-center gap-1.5">
                  <BookOpen size={12} className="text-primary flex-shrink-0" />
                  {item.institution}
                </p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-1.5 pl-1">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5 font-medium leading-relaxed">
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
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary">Certifications & Courses</h3>
            </div>

            {certifications.map((item, i) => {
              const hasLink = !!item.link;

              return (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass-card p-6 md:p-7 border border-black/[0.04] bg-white/60 hover:border-secondary/20 shadow-md shadow-black/[0.01] hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-secondary/30 group-hover:bg-secondary transition-colors duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-secondary transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-text-secondary font-semibold">{item.issuer}</p>
                    </div>
                    <span className="text-[10px] font-bold text-text-secondary bg-black/[0.02] px-3 py-1.5 rounded-lg border border-black/5 w-fit flex items-center gap-1 self-start sm:self-auto">
                      <Calendar size={10} className="text-secondary" />
                      {item.date}
                    </span>
                  </div>

                  {hasLink && (
                    <a
                      href={item.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all duration-300 bg-secondary/5 border border-secondary/10 text-secondary hover:bg-secondary hover:text-white min-h-[36px]"
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

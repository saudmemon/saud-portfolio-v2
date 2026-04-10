import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  { degree: 'BS Computer Science', institution: 'SZABIST Islamabad', year: '2023 - 2027' },
  { degree: 'Higher Secondary Certificate', institution: 'Pre-Engineering', year: 'Grade A1' },
];

const certifications = [
  { title: 'Artificial Intelligence', issuer: 'Coursera', date: '2023' },
  { title: 'AI Web Development', issuer: 'Simplilearn', date: '2024' },
  { title: 'AI & Data Science Training', issuer: 'SZABIST', date: '2024' },
];

export const Education = () => {
  return (
    <section id="education" className="relative bg-bg-secondary/50 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-tag">Academic Background</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={28} className="text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            {education.map((item, i) => (
              <div key={i} className="glass-card p-8 border-l-4 border-l-primary hover:border-l-primary-hover">
                <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                <div className="flex justify-between items-center text-text-secondary">
                  <span className="font-medium text-text-primary">{item.institution}</span>
                  <span className="text-sm font-bold bg-white/5 px-3 py-1 rounded-md">{item.year}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={28} className="text-secondary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            {certifications.map((item, i) => (
              <div key={i} className="glass-card p-8 border-l-4 border-l-secondary hover:border-l-secondary">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <div className="flex justify-between items-center text-text-secondary">
                  <span className="font-medium text-text-primary">{item.issuer}</span>
                  <span className="text-sm font-bold bg-white/5 px-3 py-1 rounded-md">{item.date}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

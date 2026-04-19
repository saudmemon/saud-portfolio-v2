import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import meImg from '../assets/me.png';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={fadeUp} className="mb-10 relative group">
            <div className="relative">
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden relative z-10 ring-2 ring-white/10 ring-offset-4 ring-offset-bg-main"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
              >
                <img
                  src={meImg}
                  alt="Saud Ahmed"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-[-12px] rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-24px] rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glow effect */}
              <div className="absolute inset-[-20px] rounded-full bg-primary/10 blur-2xl animate-pulse-glow -z-10" />
            </div>
          </motion.div>

          {/* Tag */}
          <motion.div variants={fadeUp}>
            <span className="section-tag">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Saud Ahmed</span>
          </motion.h1>

          {/* TypeWriter Subtitle */}
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-lg md:text-xl text-text-secondary font-medium">
              <TypeWriter
                words={[
                  'Frontend Developer',
                  'MERN Stack Enthusiast',
                  'CS Student at SZABIST',
                  'Open Source Contributor',
                ]}
                speed={70}
                deleteSpeed={35}
                pauseTime={2500}
              />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-text-muted text-base md:text-lg mb-10 max-w-lg leading-relaxed"
          >
            Crafting clean, performant web experiences with modern technologies and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm flex items-center gap-2.5 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-text-primary border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            {[
              { icon: GithubIcon, href: 'https://github.com/saudmemon', label: 'GitHub' },
              { icon: LinkedInIcon, href: 'https://linkedin.com/in/saudmemon', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:saudmemon581@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-[15%] right-[-15%] w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/8 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full -z-10" />
    </section>
  );
};

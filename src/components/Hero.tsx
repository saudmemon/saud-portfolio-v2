import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Download, Check, Sparkles } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import meImg from '../assets/saud.jpeg';

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

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

interface HeroProps {
  recruiterMode: boolean;
  setRecruiterMode: (mode: boolean) => void;
}

export const Hero = ({ recruiterMode, setRecruiterMode }: HeroProps) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'downloading' | 'completed'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownloadResume = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('preparing');
    setDownloadProgress(15);

    setTimeout(() => {
      setDownloadState('downloading');
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDownloadState('completed');

            // Create a physical link to download the PDF from the public folder
            const link = document.createElement('a');
            link.href = '/Saud_Ahmed.pdf';
            link.target = '_blank';
            link.download = 'Saud_Ahmed.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => setDownloadState('idle'), 3000);
            return 100;
          }
          return prev + 17;
        });
      }, 150);
    }, 600);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28">
      <div className="container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Profile Image & Status Badge */}
          <motion.div variants={fadeUp} className="mb-8 relative group">
            <div className="relative">
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden relative z-10 ring-2 ring-white/10 ring-offset-4 ring-offset-bg-main"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={meImg}
                  alt="Saud Ahmed"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Status Dot */}
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-bg-main z-20 animate-pulse" title="Available Immediately" />

              {/* Decorative rotation rings */}
              <motion.div
                className="absolute inset-[-12px] rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-24px] rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              />

              {/* Ambient Glow */}
              <div className="absolute inset-[-20px] rounded-full bg-primary/10 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Quick Toggle Action */}
          <motion.div variants={fadeUp} className="mb-4">
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${recruiterMode
                  ? 'bg-primary/20 text-primary border-primary/40 shadow-glow shadow-primary/20'
                  : 'bg-white/5 text-text-secondary border-white/10 hover:border-primary/30 hover:text-text-primary'
                }`}
            >
              <Sparkles size={12} className={recruiterMode ? 'text-primary fill-primary animate-pulse' : ''} />
              {recruiterMode ? 'Recruiter Mode Active' : 'Are you a recruiter? Click here'}
            </button>
          </motion.div>

          {/* Main Title Heading */}
          <AnimatePresence mode="wait">
            {recruiterMode ? (
              <motion.h1
                key="recruiter-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight"
                style={{ letterSpacing: '-0.04em' }}
              >
                Hi Recruiter! I build <span className="gradient-text">high-speed MERN apps</span>
              </motion.h1>
            ) : (
              <motion.h1
                key="default-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight"
                style={{ letterSpacing: '-0.04em' }}
              >
                I build <span className="gradient-text">fast, modern websites</span> for businesses
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Subtitle / Typewriter */}
          <motion.div variants={fadeUp} className="mb-6 h-8">
            <p className="text-lg md:text-xl text-text-secondary font-medium">
              <TypeWriter
                words={[
                  'React.js / Node.js Developer',
                  'MERN Stack Specialist',
                  'BS Computer Science (Final Semester)',
                  'Technical Coordinator @ MLSA',
                ]}
                speed={60}
                deleteSpeed={30}
                pauseTime={2500}
              />
            </p>
          </motion.div>

          {/* Recruiter Quick Summary Card */}
          <AnimatePresence>
            {recruiterMode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }}
                className="w-full glass-card p-6 md:p-8 mb-10 max-w-2xl text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 bg-primary/10 rounded-bl-2xl text-[10px] uppercase font-bold tracking-wider text-primary">
                  Recruiter Dashboard
                </div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> Executive Summary
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Final-semester BS CS student with hands-on front-end experience (React, JavaScript, Tailwind) and full-stack familiarity (MERN, SQL, AWS). Proven leadership as Technical Coordinator for Microsoft Learn Student Ambassadors (MLSA) and Campus Ambassador for AIESEC. Ready for entry-level Software Engineering roles or internships immediately.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Role Interest', val: 'SWE / Frontend' },
                    { label: 'Key Stack', val: 'React, Node, Mongo, SQL' },
                    { label: 'Availability', val: 'Immediate (Islamabad/Remote)' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-3.5 rounded-xl">
                      <p className="text-[10px] text-text-muted uppercase font-bold tracking-wide mb-1">{stat.label}</p>
                      <p className="text-sm font-semibold text-text-primary">{stat.val}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownloadResume}
                    className="flex-grow sm:flex-grow-0 group px-5 py-3 rounded-xl bg-primary text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 min-w-[190px]"
                  >
                    {downloadState === 'idle' && (
                      <>
                        Download Resume <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                      </>
                    )}
                    {downloadState === 'preparing' && 'Optimizing Bundle...'}
                    {downloadState === 'downloading' && `Downloading (${downloadProgress}%)`}
                    {downloadState === 'completed' && (
                      <>
                        Saved Successfully <Check size={14} />
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/923068292658"
                    target="_blank"
                    className="flex-grow sm:flex-grow-0 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all"
                  >
                    WhatsApp Chat <WhatsAppIcon size={14} />
                  </a>
                  <a
                    href="mailto:saudmemon581@gmail.com"
                    className="flex-grow sm:flex-grow-0 px-5 py-3 rounded-xl border border-white/10 hover:border-primary/30 text-text-primary hover:bg-primary/5 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    Send Email <Mail size={14} />
                  </a>
                </div>

                {/* Progress bar overlay */}
                {downloadState !== 'idle' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <motion.div
                      className="h-full bg-primary"
                      style={{ width: `${downloadProgress}%` }}
                      transition={{ ease: 'easeInOut' }}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fallback descriptions */}
          <AnimatePresence mode="wait">
            {!recruiterMode && (
              <motion.p
                key="default-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={fadeUp}
                className="text-text-muted text-base md:text-lg mb-10 max-w-xl leading-relaxed"
              >
                Crafting clean, performant web experiences with modern technologies and thoughtful design. Focused on writing robust components, clean code, and fast web loads.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Action CTAs (Standard view fallback) */}
          {!recruiterMode && (
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
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-text-primary border border-text-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            {[
              { icon: GithubIcon, href: 'https://github.com/saudmemon', label: 'GitHub' },
              { icon: LinkedInIcon, href: 'https://linkedin.com/in/saudmemon', label: 'LinkedIn' },
              { icon: WhatsAppIcon, href: 'https://wa.me/923068292658', label: 'WhatsApp' },
              { icon: Mail, href: 'mailto:saudmemon581@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 border border-text-primary/5 hover:border-primary/20 transition-all duration-300"
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


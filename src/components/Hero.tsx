import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Check } from 'lucide-react';
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

export const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 md:pt-36">
      {/* Dynamic Animated Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(178,129,53,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(178,129,53,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />
      
      <div className="container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Pulsing Status Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-500/5 border border-green-500/20 text-green-600 text-xs font-semibold tracking-wide shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for Internships & Junior Roles
          </motion.div>

          {/* Profile Image & Status Rings */}
          <motion.div variants={fadeUp} className="mb-8 relative group">
            <div className="relative">
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden relative z-10 ring-2 ring-primary/20 ring-offset-4 ring-offset-bg-main"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={meImg}
                  alt="Saud Ahmed Memon — Frontend Developer"
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                />
              </motion.div>

              {/* Status Dot */}
              <span className="absolute bottom-2 right-2 w-4.5 h-4.5 bg-green-500 rounded-full border-3 border-bg-main z-20 shadow-md shadow-black/10" title="Available for opportunities" />

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
              <div className="absolute inset-[-20px] rounded-full bg-primary/8 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-text-primary"
            style={{ letterSpacing: '-0.04em' }}
          >
            I build <span className="gradient-text">fast, modern frontend</span> experiences
          </motion.h1>

          {/* Subtitle / Typewriter */}
          <motion.div variants={fadeUp} className="mb-6 h-8 flex items-center justify-center">
            <p className="text-lg md:text-xl text-text-secondary font-medium tracking-wide">
              <TypeWriter
                words={[
                  'Frontend React Developer',
                  'React.js & Next.js Specialist',
                  'BS Computer Science (Final Year)',
                  'Technical Coordinator @ MLSA',
                  'Seeking SWE Intern / Junior Dev Role',
                ]}
                speed={60}
                deleteSpeed={30}
                pauseTime={2500}
              />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-base md:text-lg mb-10 max-w-xl leading-relaxed font-medium"
          >
            Final-year BS CS student specializing in Frontend Web Development. Hands-on experience building highly interactive, component-driven UIs with React.js, JavaScript, and CSS. Seeking internship or junior frontend developer roles.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-md"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto group px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 min-h-[44px]"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Download Resume Button */}
            <motion.button
              type="button"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Download Resume PDF"
              className="w-full sm:w-auto group px-8 py-3.5 rounded-xl border border-black/10 bg-white/60 hover:bg-white/90 text-text-primary text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 min-h-[44px] min-w-[180px] shadow-sm shadow-black/[0.01]"
            >
              {downloadState === 'idle' && (
                <>
                  Download CV <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
              {downloadState === 'preparing' && 'Preparing...'}
              {downloadState === 'downloading' && `Downloading (${downloadProgress}%)`}
              {downloadState === 'completed' && (
                <>
                  Saved! <Check size={15} className="text-green-600" />
                </>
              )}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-text-secondary border border-black/10 bg-white/40 hover:bg-white/60 transition-all duration-300 min-h-[44px] flex items-center justify-center"
            >
              Let's Talk
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
              { icon: WhatsAppIcon, href: 'https://wa.me/923068292658', label: 'WhatsApp' },
              { icon: Mail, href: 'mailto:saudmemon581@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 border border-black/[0.04] bg-white/50 hover:border-primary/20 transition-all duration-300 shadow-sm shadow-black/[0.01]"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Background Blur Mesh Spots */}
      <div className="absolute top-[15%] right-[-15%] w-[450px] h-[450px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/4 blur-[180px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

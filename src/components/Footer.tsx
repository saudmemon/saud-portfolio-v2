import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: GithubIcon, href: 'https://github.com/saudmemon', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/saudmemon', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:saudmemon581@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-black/5 bg-white/40 overflow-hidden">
      <div className="container relative z-10">
        
        {/* Footer Top: Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-black/5 pb-12 mb-8">
          
          {/* Brand/Profile Intro */}
          <div className="space-y-3">
            <a href="#home" className="flex items-center gap-1 w-fit group">
              <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                saud
              </span>
              <span className="text-primary font-bold text-xl">.</span>
            </a>
            <p className="text-xs text-text-secondary leading-relaxed font-semibold max-w-xs">
              Frontend React Developer seeking Software Engineer Intern & Junior roles. Building fast, clean, and accessible web experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="#home" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links & Mail */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">Let's Connect</h4>
            <p className="text-xs font-semibold text-text-secondary">Email: saudmemon581@gmail.com</p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-9.5 h-9.5 rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 border border-black/[0.04] bg-white/50 transition-all duration-300 shadow-sm"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-text-secondary font-semibold"
          >
            <span>Built with</span>
            <Heart size={13} className="text-primary fill-primary animate-pulse" />
            <span>by</span>
            <span className="font-bold text-text-primary">Saud Ahmed</span>
          </motion.div>

          {/* Right */}
          <p className="text-[11px] font-bold text-text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[120px] bg-primary/5 blur-[80px] rounded-full -z-10" />

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/30 border border-primary-hover transition-all min-h-[44px] min-w-[44px] cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (mode: boolean) => void;
}

export const Navbar = ({ recruiterMode, setRecruiterMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-3' : 'py-5 md:py-6'}`}>
      <div className="container">
        <div
          className={`rounded-2xl px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-700 ${
            scrolled
              ? 'bg-bg-main/70 dark:bg-bg-main/60 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/5'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-primary">
                saud
              </span>
              <span className="text-primary font-bold text-xl">.</span>
            </div>
            <div className="hidden lg:block h-4 w-[1px] bg-text-muted/30 mx-1" />
            <span className="hidden lg:block text-[11px] font-medium text-text-muted tracking-wider uppercase">
              React Developer | Islamabad
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Recruiter Toggle Switch */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                recruiterMode
                  ? 'bg-primary/20 border-primary/40 text-primary shadow-glow shadow-primary/20'
                  : 'bg-white/5 border-white/5 hover:border-primary/20 text-text-secondary hover:text-text-primary'
              }`}
              title="Toggle Recruiter Summary Dashboard"
            >
              <Briefcase size={12} className={recruiterMode ? 'animate-bounce' : ''} />
              Recruiter Mode
            </button>


            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`p-2 rounded-xl border transition-all ${
                recruiterMode
                  ? 'bg-primary/20 border-primary/40 text-primary'
                  : 'bg-white/5 border-white/5 text-text-muted'
              }`}
              aria-label="Toggle Recruiter Mode"
            >
              <Briefcase size={16} />
            </button>

            <button
              className="p-2 text-text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mx-5 mt-2 rounded-2xl bg-bg-secondary/95 backdrop-blur-xl border border-text-primary/5 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 rounded-xl bg-primary text-white text-sm font-medium"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

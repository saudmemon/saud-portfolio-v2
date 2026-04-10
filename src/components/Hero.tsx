import { motion } from 'framer-motion';
import { ArrowRight, Globe, Link, Mail, Download } from 'lucide-react';
import meImg from '../assets/me.png'; // Assuming me.png exists based on previous files

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 relative"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 p-1 bg-gradient-to-b from-primary/20 to-transparent backdrop-blur-3xl shadow-2xl relative z-10">
              <img 
                src={meImg} 
                alt="Saud Ahmed" 
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Animated Ring */}
            <motion.div 
              className="absolute inset-[-20px] rounded-full border border-primary/30"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="section-tag">Computer Science Student | Frontend Developer | MERN Stack Enthusiast</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Hi, I'm <span className="gradient-text">Saud Ahmed</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-medium">
              Passionate about web development, leadership, and building impactful digital solutions.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex gap-4">
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all"
                >
                  View Projects <ArrowRight size={18} />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/10 text-text-primary font-bold border border-white/10 hover:bg-white/20 transition-all"
                >
                  Contact Me
                </motion.a>
              </div>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-secondary/10 text-secondary font-bold flex items-center gap-2 border border-secondary/20 hover:bg-secondary/20 transition-all"
              >
                <Download size={18} /> Resume
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6">
              <a href="https://github.com/saudmemon" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                <Globe size={24} />
              </a>
              <a href="https://linkedin.com/in/saudmemon" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                <Link size={24} />
              </a>
              <a href="mailto:saudmemon581@gmail.com" className="text-text-muted hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Background Accents */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full -z-10" />
      
    </section>
  );
};

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    // Basic validation
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;
    
    if (!name || !email || !message || message.length < 10) {
      alert("Please fill in all fields with a descriptive message.");
      return;
    }

    setLoading(true);
    setStatus('idle');

    // PLACEHOLDER: Replace with actual Service ID, Template ID, and Public Key from your EmailJS dashboard
    // register at emailjs.com -> create service -> create template -> get public key
    emailjs.sendForm('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details Panel */}
          <div className="lg:w-1/3">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-tag">Get in Touch</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title text-5xl">
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <p className="text-text-secondary text-lg mt-6 leading-relaxed mb-12">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8">
              <a href="mailto:saudmemon581@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">saudmemon581@gmail.com</p>
                </div>
              </a>

              <a href="tel:+923068292658" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg border border-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">Phone</h4>
                  <p className="text-lg font-medium group-hover:text-secondary transition-colors">+92 3068292658</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/saudmemon" target="_blank" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all shadow-lg border border-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">LinkedIn</h4>
                  <p className="text-lg font-medium group-hover:text-[#0A66C2] transition-colors">saudmemon</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg border border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">Location</h4>
                  <p className="text-lg font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 glass-card p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-0 left-0 right-0 bg-green-500/20 text-green-500 p-4 flex items-center justify-center gap-2 border-b border-green-500/30">
                <CheckCircle size={20} /> Message sent successfully! I will get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-0 left-0 right-0 bg-red-500/20 text-red-500 p-4 flex items-center justify-center gap-2 border-b border-red-500/30">
                <XCircle size={20} /> Something went wrong. Please try again!
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_name" className="text-sm font-bold text-text-muted uppercase tracking-widest pl-2">Full Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full bg-bg-secondary/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/5 transition-all text-text-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_email" className="text-sm font-bold text-text-muted uppercase tracking-widest pl-2">Email Address</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full bg-bg-secondary/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/5 transition-all text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-text-muted uppercase tracking-widest pl-2">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/5 transition-all text-text-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-text-muted uppercase tracking-widest pl-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/5 transition-all resize-none text-text-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-hover shadow-xl shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? <Loader2 className="animate-spin" size={24} /> : <><Send size={24} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

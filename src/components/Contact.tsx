import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'saudmemon581@gmail.com', href: 'mailto:saudmemon581@gmail.com', color: 'var(--primary)' },
  { icon: Phone, label: 'Phone', value: '+92 306 829 2658', href: 'tel:+923068292658', color: 'var(--secondary)' },
  { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: undefined, color: 'var(--accent)' },
];

const FloatingField = ({
  id, label, type = 'text', name, required = false, rows,
}: {
  id: string; label: string; type?: string; name: string; required?: boolean; rows?: number;
}) => {
  const Tag = rows ? 'textarea' : 'input';
  return (
    <div className="relative">
      <Tag
        id={id}
        name={name}
        type={type}
        required={required}
        rows={rows}
        placeholder=" "
        className="floating-input peer"
        style={rows ? { resize: 'none' } : undefined}
      />
      <label htmlFor={id} className="floating-label">
        {label}
      </label>
    </div>
  );
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message || message.length < 10) {
      alert('Please fill in all fields with a descriptive message.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    emailjs
      .sendForm('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Panel */}
          <div className="lg:w-2/5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Let's <span className="gradient-text">connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-description mb-10"
            >
              Have a project idea or just want to say hi? I'd love to hear from you.
            </motion.p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} className="flex items-center gap-4 group">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                          color: item.color,
                        }}
                      >
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-muted uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                          color: item.color,
                        }}
                      >
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-muted uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium text-text-primary">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="lg:w-3/5 glass-card p-7 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Status Toast */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`absolute top-0 left-0 right-0 p-3.5 flex items-center justify-center gap-2 text-sm font-medium z-10 ${
                    status === 'success'
                      ? 'bg-green-500/10 text-green-500 border-b border-green-500/20'
                      : 'bg-red-500/10 text-red-500 border-b border-red-500/20'
                  }`}
                >
                  {status === 'success' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                  {status === 'success' ? 'Message sent! I\'ll get back to you soon.' : 'Something went wrong. Please try again.'}
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatingField id="user_name" name="user_name" label="Full Name" required />
                <FloatingField id="user_email" name="user_email" label="Email Address" type="email" required />
              </div>
              <FloatingField id="subject" name="subject" label="Subject (Optional)" />
              <FloatingField id="message" name="message" label="Your Message" rows={5} required />

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

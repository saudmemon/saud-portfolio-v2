import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="loader-screen"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Elegant spinner */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-1 rounded-full border-2 border-transparent border-b-secondary"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ boxShadow: '0 0 30px rgba(178, 129, 53, 0.2)' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-1"
            >
              <span className="text-2xl font-bold tracking-[0.3em] text-text-primary">
                S<span className="text-primary">A</span>UD
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

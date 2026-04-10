

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-text-secondary text-sm font-medium">
          &copy; {new Date().getFullYear()} Saud Ahmed. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
          Built with <span className="text-primary font-bold">React.js</span> & <span className="text-[#38bdf8] font-bold">Tailwind CSS</span>
        </div>
      </div>

      {/* Footer glow */}
      <div className="absolute bottom-[-100px] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10" />
    </footer>
  );
};

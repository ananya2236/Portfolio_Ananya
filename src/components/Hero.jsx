import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  "Software Developer",
  "Full-Stack Developer",
  "AI & ML Enthusiast",
  "Problem Solver",
  "DSA-Focused Engineer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-24 right-0 w-80 h-80 bg-amber-300/10 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-24 left-0 w-80 h-80 bg-slate-700/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             <h2 className="text-amber-300 font-medium tracking-wider mb-2">HELLO, I'M</h2>
             <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-100 mb-4">
              Ananya Singh
            </h1>
            <div className="h-12 md:h-16 overflow-hidden relative w-full flex justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-slate-300 font-light absolute top-0"
                >
                  {roles[roleIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>
         </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 max-w-lg text-lg leading-relaxed mx-auto md:mx-0"
          >
            This space reflects clarity of thought, precision in execution, and a constant pursuit of growth.
            <br />
            <span className="mt-2 inline-block text-sm font-semibold text-cyan-400 tracking-wide">
              Worth a closer look!
            </span>
          </motion.p>
            

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-8 py-3 rounded-full text-slate-900 font-medium bg-amber-300 hover:bg-amber-400 transition-colors duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <FileText size={20} />
              <span>Resume</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Contact</span>
            </button>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 max-w-xs origin-center mx-auto md:mx-0"
          >
            <div className="center-thick-line rounded-full" />
          </motion.div>

        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
            {/* Abstract Shapes */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-500/20 rounded-full w-[280px] h-[280px] md:w-[400px] md:h-[400px] m-auto border-dashed opacity-50 md:opacity-100"
            />
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-500/20 rounded-full w-[320px] h-[320px] md:w-[450px] md:h-[450px] m-auto opacity-50 md:opacity-100"
            />

            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 z-10 bg-slate-800 group hover:scale-[1.02] transition-transform duration-500">
               {/* Placeholder for user photo */}
               <img 
                 src="/profile.png"
                 alt="Ananya Singh" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay group-hover:from-black/40 transition-all duration-500" />
            </div>
            
            <div className="absolute top-10 right-10 w-14 h-14 bg-amber-300/10 rounded-2xl rotate-12 z-20 hidden md:block" />
            <div className="absolute bottom-10 left-10 w-10 h-10 bg-slate-600/10 rounded-full z-20 hidden md:block" />
        </motion.div>

      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-amber-300 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

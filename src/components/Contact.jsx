import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code, Check, Copy } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("+917695072283");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
        {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 mx-auto rounded-full mb-6 animate-gradient-x" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-8 mb-20">
            <div className="flex flex-wrap justify-center gap-6">
                 <motion.a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=singhananya2236@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                >
                    <Mail size={20} className="text-cyan-500 group-hover:animate-bounce" />
                    <span className="font-medium">singhananya2236@gmail.com</span>
                </motion.a>
                
                <motion.button 
                    onClick={handleCopyPhone}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
                >
                    {copied ? <Check size={20} className="text-green-500" /> : <Phone size={20} className="text-blue-500" />}
                    <span className="font-medium">+91 76950 72283</span>
                    {copied && (
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded"
                        >
                            Copied!
                        </motion.span>
                    )}
                </motion.button>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="flex flex-col items-center border-t border-slate-800 pt-10"
        >
            <div className="flex gap-8 mb-8">
                <a href="https://www.linkedin.com/in/singhananya22" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:-translate-y-1">
                    <Linkedin size={28} />
                </a>
                <a href="https://github.com/ananya2236" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                    <Github size={28} />
                </a>
                <a href="https://leetcode.com/u/ananya36/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-500 transition-colors transform hover:-translate-y-1">
                    <Code size={28} /> {/* LeetCode generic icon */}
                </a>
            </div>
            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Ananya Singh. Built with React & Tailwind CSS.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

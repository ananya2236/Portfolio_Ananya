import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
        {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-8 mb-20">
            <div className="flex flex-wrap justify-center gap-6">
                 <motion.a 
                    href="mailto:ananyasingh@example.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                    <Mail size={20} className="text-cyan-500" />
                    <span className="font-medium">ananyasingh@example.com</span>
                </motion.a>
                
                <motion.a 
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                    <Phone size={20} className="text-blue-500" />
                    <span className="font-medium">+91 98765 43210</span>
                </motion.a>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center border-t border-slate-800 pt-10"
        >
            <div className="flex gap-8 mb-8">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:-translate-y-1">
                    <Linkedin size={28} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                    <Github size={28} />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors transform hover:-translate-y-1">
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

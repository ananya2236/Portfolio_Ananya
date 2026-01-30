import { motion } from 'framer-motion';
import TechStack from './TechStack';
import { Code, Server, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-lg text-slate-400 leading-relaxed"
            >
                <p>
                    I am a <span className="text-cyan-400 font-medium">Software Developer</span> with a strong foundation in <span className="text-cyan-400 font-medium">AI & Full-Stack Development</span>. My journey in tech is driven by a curiosity to understand how things work and a passion for building impactful solutions.
                </p>
                <p>
                    I thrive on solving complex problems and am a consistent learner, always exploring new technologies to stay ahead in the rapidly evolving tech landscape. Whether it's building intelligent voice agents or scalable web platforms, I love turning ideas into reality.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center hover:border-cyan-500/30 transition-colors">
                        <Code className="mx-auto mb-2 text-cyan-500" size={24} />
                        <span className="text-sm font-medium text-slate-300">Frontend</span>
                    </div>
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center hover:border-cyan-500/30 transition-colors">
                        <Server className="mx-auto mb-2 text-blue-500" size={24} />
                        <span className="text-sm font-medium text-slate-300">Backend</span>
                    </div>
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center hover:border-cyan-500/30 transition-colors">
                        <Brain className="mx-auto mb-2 text-purple-500" size={24} />
                        <span className="text-sm font-medium text-slate-300">AI / ML</span>
                    </div>
                </div>
            </motion.div>
            
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 transform rotate-6" />
                <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-100 mb-4">Academic Background</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-500 font-bold shrink-0">
                                2027
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-slate-200">B.Tech CSE (AI)</h4>
                                <p className="text-slate-400">Jain University, Bengaluru</p>
                                <p className="text-cyan-400 text-sm mt-1">GPA: 9.5/10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
             <h3 className="text-2xl font-bold text-slate-100 text-center mb-10">Technologies I Work With</h3>
             <TechStack />
        </motion.div>

      </div>
    </section>
  );
};

export default About;

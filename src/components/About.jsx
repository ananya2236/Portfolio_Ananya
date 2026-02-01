import { motion } from 'framer-motion';
import { Code, Server, Brain, GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-900/30 overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
            {/* Left Content - Wider */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3 space-y-6 text-lg text-slate-400 leading-relaxed"
            >
                <p>
                    I’m <span className="text-cyan-400 font-medium">Ananya Singh</span>, a third-year Computer Science student based in Bangalore. I work across <span className="text-cyan-400 font-medium">full-stack development, Data Structures and Algorithms, and AI/ML</span>, with a strong focus on problem-solving, system thinking, and disciplined execution. I build projects end to end while continuously strengthening my fundamentals with structure and consistency.
                </p>
                <p>
                    I take ownership early, stay focused in demanding situations, and hold myself to clear standards. I plan, execute, reflect, and improve, prioritizing <span className="text-slate-200 font-medium">quality, accountability, and follow-through</span> over shortcuts. I aim to contribute meaningfully and raise the level of work wherever I’m involved.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 text-center hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                        <Server className="mx-auto mb-2 text-cyan-500 group-hover:scale-110 transition-transform" size={24} />
                        <span className="text-sm font-medium text-slate-300">Full-Stack Development</span>
                    </div>
                    <div className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 text-center hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                        <Code className="mx-auto mb-2 text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                        <span className="text-sm font-medium text-slate-300">Data Structures & Algorithms</span>
                    </div>
                    <div className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 text-center hover:border-purple-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                        <Brain className="mx-auto mb-2 text-purple-500 group-hover:scale-110 transition-transform" size={24} />
                        <span className="text-sm font-medium text-slate-300">AI / ML</span>
                    </div>
                </div>
            </motion.div>
            
            {/* Right Content - Premium Education Box */}
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 relative h-full"
            >
                <div className="relative bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl h-full flex flex-col justify-center overflow-hidden group">
                    {/* Decorative Gradients */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
                    
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-cyan-400">
                            <GraduationCap size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100">Education</h3>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="relative pl-6 border-l-2 border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
                            <h4 className="text-xl font-bold text-slate-200">B.Tech Computer Science</h4>
                            <p className="text-cyan-400 font-medium mt-1">Jain University</p>
                            
                            <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={14} />
                                    <span>Bengaluru, India</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    <span>2023 – 2027</span>
                                </div>
                            </div>

                            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                <p className="text-cyan-400 text-sm font-bold tracking-wide">CGPA: 8.9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

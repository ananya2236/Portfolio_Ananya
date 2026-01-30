import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, SiMysql, SiGithub, SiFastapi } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Brain } from 'lucide-react'; // For AI/ML

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'AI/ML', icon: Brain, color: '#FF6F00' },
];

const TechStack = () => {
  return (
    <div className="py-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        
        <div className="flex">
            <motion.div 
                className="flex gap-12 px-12"
                animate={{ x: "-25%" }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear",
                }}
                style={{ width: "max-content" }}
            >
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2 group min-w-[80px]">
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300">
                             <skill.icon size={32} style={{ color: skill.color }} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{skill.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  );
};

export default TechStack;

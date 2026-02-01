import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Anyra',
    description: 'Advanced AI Voice Agent capable of natural conversations and task execution.',
    tech: ['Python', 'NLP', 'React', 'FastAPI'],
    github: 'https://github.com/ananya2236/Anyra',
    demo: 'https://anyra.onrender.com',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'TranNexa',
    description: 'Real-time multi-language AI translator breaking communication barriers.',
    tech: ['AI/ML', 'Python', 'React', 'TensorFlow'],
    github: 'https://github.com/ananya2236/TranNexa',
    demo: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Ratna Jewellery',
    description: 'Modern e-commerce platform for a jewellery brand with secure payments.',
    tech: ['MERN Stack', 'Tailwind', 'Stripe'],
    github: 'https://github.com/ananya2236/Ratna',
    demo: '#',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'GlobeVista',
    description: 'Immersive virtual travel platform offering 360-degree tours.',
    tech: ['React', 'Three.js', 'Node.js'],
    github: 'https://github.com/ananya2236/GLOBEVISTA',
    demo: '#',
    color: 'from-emerald-500 to-teal-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/30">
      {/* Subtle Background Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-cyan-900/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] max-w-md mx-auto w-full"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                   <span className="text-white font-bold text-xl">{project.title[0]}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 line-clamp-2 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs rounded-full border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-300">
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors hover:translate-x-1 duration-300">
                        <ExternalLink size={20} />
                        <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

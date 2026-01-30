import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Anyra',
    description: 'Advanced AI Voice Agent capable of natural conversations and task execution.',
    tech: ['Python', 'NLP', 'React', 'FastAPI'],
    github: '#',
    demo: '#',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'TranNexa',
    description: 'Real-time multi-language AI translator breaking communication barriers.',
    tech: ['AI/ML', 'Python', 'React', 'TensorFlow'],
    github: '#',
    demo: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Ratna Jewellery',
    description: 'Modern e-commerce platform for a jewellery brand with secure payments.',
    tech: ['MERN Stack', 'Tailwind', 'Stripe'],
    github: '#',
    demo: '#',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'GlobeVista',
    description: 'Immersive virtual travel platform offering 360-degree tours.',
    tech: ['React', 'Three.js', 'Node.js'],
    github: '#',
    demo: '#',
    color: 'from-emerald-500 to-teal-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                   <span className="text-white font-bold text-xl">{project.title[0]}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </a>
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

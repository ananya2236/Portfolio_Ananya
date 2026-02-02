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
    color: 'from-purple-500 to-indigo-500',
    image: '/assets/projects/anyra.png',
  },
  {
    title: 'Ratna Jewellery',
    description: 'Modern e-commerce platform for a jewellery brand with secure payments.',
    tech: ['MERN Stack', 'Tailwind', 'Stripe'],
    github: 'https://github.com/ananya2236/Ratna',
    demo: 'https://ratna-jewellery.vercel.app/',
    color: 'from-amber-500 to-orange-500',
    image: '/assets/projects/ratna.png',
  },
  {
    title: 'GlobeVista',
    description: 'Immersive virtual travel platform offering 360-degree tours.',
    tech: ['React', 'Three.js', 'Node.js'],
    github: 'https://github.com/ananya2236/GLOBEVISTA',
    demo: 'https://globevista-ten.vercel.app/',
    color: 'from-emerald-500 to-teal-500',
    image: '/assets/projects/globevista.png',
  },
  {
    title: 'TranNexa',
    description: 'Real-time multi-language AI translator breaking communication barriers.',
    tech: ['AI/ML', 'Python', 'React', 'TensorFlow'],
    github: 'https://github.com/ananya2236/TranNexa',
    demo: '#',
    color: 'from-blue-500 to-cyan-500',
    image: '/assets/projects/trannexa.png',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" />

        <div className="mt-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-start md:items-center gap-8 py-10 border-t border-slate-800`}
              >
                <div className="md:w-1/2 space-y-3">
                  <h3 className="text-3xl font-bold text-slate-100 tracking-tight">{project.title}</h3>
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900/60 text-slate-300 text-xs rounded-full border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors">
                          <ExternalLink size={20} />
                          <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2">
                  {project.demo && project.demo !== '#' ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 md:h-56 object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </a>
                  ) : (
                    <div className="rounded-xl overflow-hidden border border-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 md:h-56 object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

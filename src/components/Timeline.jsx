import { motion } from 'framer-motion';

const timelineEvents = [
  { year: '2006', title: 'Born', description: 'The journey began' },
  { year: '2021', title: '10th Grade', description: 'Completed Secondary Education \n Percentage: 90% ' },
  { year: '2023', title: '12th Grade', description: 'Completed Higher Secondary \n Percentage: 77%' },
  { year: '2023', title: 'Joined Jain University', description: 'B.Tech CSE (AI) - Started' },
  { year: '2026', title: 'Current Status', description: 'Building & Learning \n Current CGPA: 8.9' },
  { year: '2027', title: 'Expected Graduation',  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 mx-auto rounded-full animate-gradient-x" />
        </motion.div>

        <div className="relative mt-12 overflow-hidden">
            {/* Horizontal Line */}
            <div className="absolute top-[calc(100%-2rem)] left-0 w-full h-1 bg-slate-800 rounded-full" />
            
            <motion.div 
              className="flex gap-8 pb-12 pt-4 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
              style={{ width: "max-content" }}
            >
              {[...timelineEvents, ...timelineEvents].map((event, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center min-w-[280px] group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card */}
                  <div className="w-full mb-8 p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl 
                                  shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 
                                  relative overflow-hidden group-hover:bg-slate-900/80">
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     
                     <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{event.year}</span>
                     <h3 className="text-slate-100 font-bold text-base mt-2 group-hover:text-cyan-300 transition-colors">
                       {event.title}
                     </h3>
                     {event.description && (
                       <p className="text-slate-400 text-sm mt-2 leading-relaxed whitespace-pre-line">
                         {event.description}
                       </p>
                     )}
                  </div>
                  
                  {/* Dot */}
                  <div className="relative z-10">
                     <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-[0_0_0_4px_rgba(6,182,212,0.2)] 
                                     group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(6,182,212,0.3)] transition-all duration-300" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

      </div>
    </section>
  );
};

export default Timeline;

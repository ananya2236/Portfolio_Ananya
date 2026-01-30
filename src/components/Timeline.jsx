import { motion } from 'framer-motion';

const timelineEvents = [
  { year: '22 March', title: 'Born', description: 'The journey began' },
  { year: '2021', title: '10th Grade', description: 'Completed Secondary Education' },
  { year: '2023', title: '12th Grade', description: 'Completed Higher Secondary' },
  { year: '2023', title: 'Joined Jain University', description: 'B.Tech CSE (AI) - Started' },
  { year: '2026', title: 'Current Status', description: 'Building & Learning' },
  { year: '2027', title: 'Expected Graduation', description: 'Future AI Engineer' },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative mt-20">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 h-full w-1 bg-slate-800 md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative md:text-center pl-12 md:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-[0_0_0_4px_rgba(6,182,212,0.2)] -translate-x-1/2 -translate-y-1/2 z-10" />

                <div className={`md:absolute w-full ${index % 2 === 0 ? 'md:bottom-full md:pb-8' : 'md:top-full md:pt-8'}`}>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                    <span className="text-cyan-400 font-bold text-sm">{event.year}</span>
                    <h3 className="text-slate-200 font-bold mt-1">{event.title}</h3>
                    <p className="text-slate-400 text-sm mt-2">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

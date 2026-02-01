import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useRef, useEffect, useState } from 'react';

const timelineEvents = [
  { year: '2006', title: 'Born', description: 'The journey began' },
  { year: '2021', title: '10th Grade', description: 'Completed Secondary Education \n Percentage: 90% ' },
  { year: '2023', title: '12th Grade', description: 'Completed Higher Secondary \n Percentage: 77%' },
  { year: '2023', title: 'Joined Jain University', description: 'B.Tech CSE (AI) - Started' },
  { year: '2026', title: 'Current Status', description: 'Building & Learning \n Current CGPA: 8.9' },
  { year: '2027', title: 'Expected Graduation',  },
];

const Timeline = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only run auto-scroll logic on desktop if we ever wanted it, 
    // BUT the requirement is: "Allow users to manually scroll... Automatic animations... can remain".
    // AND "Vertical Alignment... in a single column" for mobile.
    // So for mobile, we are completely changing the structure to vertical.
    // The previous auto-scroll logic was for the horizontal scroll view.
    // We should disable that complex auto-scroll logic for mobile since we are going vertical.
    
    if (isMobile) return; 
    // Desktop logic remains for marquee... 
    // Actually the marquee logic is handled by Framer Motion's `animate` prop in the JSX.
    // So we don't need this complex useEffect for desktop unless we wanted to pause it on hover (which we do via whileHover).
    // The previous complex logic was specifically for the "mobile horizontal scroll".
    // Since we are switching mobile to VERTICAL stack, we don't need this effect at all for mobile.
    // And for desktop, the marquee is pure CSS/Framer.
    
    // So we can remove this entire useEffect block that was handling the custom mobile auto-scroll.
  }, [isMobile]);

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionHeading title="My Journey" />

        <div className="relative mt-12">
            
            {/* Desktop View (Horizontal Marquee) */}
            {!isMobile && (
            <div className="overflow-hidden relative">
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
                    <TimelineCard key={`desktop-${index}`} event={event} />
                ))}
                </motion.div>
            </div>
            )}

            {/* Mobile View (Vertical Stack) */}
            {isMobile && (
                <div className="relative pl-8 border-l-2 border-slate-800 space-y-12 ml-4">
                    {timelineEvents.map((event, index) => (
                        <div key={`mobile-${index}`} className="relative">
                            {/* Dot on the line */}
                            <div className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 bg-slate-950 border-2 border-cyan-500 rounded-full z-10">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            </div>

                            <TimelineCard event={event} isMobile={true} />
                        </div>
                    ))}
                </div>
            )}

          </div>

      </div>
    </section>
  );
};

const TimelineCard = ({ event, isMobile = false }) => (
    <motion.div
      className={`flex flex-col group cursor-pointer ${isMobile ? 'w-full' : 'items-center min-w-[280px]'}`}
      initial={isMobile ? { opacity: 0, x: -20 } : {}}
      whileInView={isMobile ? { opacity: 1, x: 0 } : {}}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
    >
      {/* Card */}
      <div className={`w-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl 
                      shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 
                      relative overflow-hidden group-hover:bg-slate-900/80
                      ${isMobile ? 'p-4 mb-2' : 'p-5 mb-8'}`}>
         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
         
         <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase block mb-1">{event.year}</span>
         <h3 className="text-slate-100 font-bold text-base group-hover:text-cyan-300 transition-colors">
           {event.title}
         </h3>
         {event.description && (
           <p className="text-slate-400 text-sm mt-2 leading-relaxed whitespace-pre-line">
             {event.description}
           </p>
         )}
      </div>
      
      {/* Dot for Desktop (hidden on mobile as it's on the line) */}
      {!isMobile && (
        <div className="relative z-10">
            <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-[0_0_0_4px_rgba(6,182,212,0.2)] 
                            group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(6,182,212,0.3)] transition-all duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
    </motion.div>
);

export default Timeline;

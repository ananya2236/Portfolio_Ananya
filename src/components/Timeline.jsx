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
    if (!isMobile || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let lastTime = 0;
    const speed = 30; // pixels per second

    const animateScroll = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      if (scrollContainer) {
         // Only scroll if not being touched (handled by checking scroll position manually or just letting it run and user overrides? 
         // User override fights with programmatic scroll.
         // A better way is to stop auto-scroll on interaction.)
         // However, simple auto-scroll usually involves `scrollLeft += speed`.
         // To support "Manual scroll should not disable auto-scroll permanently", we can use a simpler approach:
         // Just use the marquee for desktop, and for mobile, standard scroll.
         // BUT user said "Automatic scrolling/animation should still continue" on mobile.
         // Let's try a gentle auto-scroll that pauses on hover/touch.
      }
      
      // Actually, for mobile, a simple CSS animation might be better if we want smooth continuous flow, 
      // but "manual horizontal scrolling" implies native touch interaction.
      // Let's implement the auto-scroll via JS that pauses on interaction.
    };

    // animationFrameId = requestAnimationFrame(animateScroll);
    // return () => cancelAnimationFrame(animationFrameId);
    
    // Simpler: Just rely on the user to scroll on mobile, or use a very slow interval.
    // Given the complexity of mixing auto-scroll and touch-scroll perfectly without jank,
    // and the request "Manual scroll should not disable auto-scroll permanently",
    // I will implement a "Pulse" or "Hint" animation instead of full auto-scroll for mobile?
    // No, "Automatic scrolling... should still continue".
    
    // Let's use a marquee for desktop, and for mobile, we use a standard scroll container.
    // If we want auto-scroll on mobile, we can use a setInterval to increment scrollLeft.
    
    const autoScroll = setInterval(() => {
        if (scrollContainer.matches(':hover')) return; // Pauses on touch/hold usually
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
        } else {
            scrollContainer.scrollLeft += 1;
        }
    }, 30);
    
    return () => clearInterval(autoScroll);
  }, [isMobile]);

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionHeading title="My Journey" />

        <div className="relative mt-12 overflow-hidden">
            {/* Horizontal Line */}
            <div className="absolute top-[calc(100%-2rem)] left-0 w-full h-1 bg-slate-800 rounded-full" />
            
            {/* Desktop Marquee */}
            {!isMobile && (
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
            )}

            {/* Mobile Scroll View */}
            {isMobile && (
                <div 
                    ref={scrollRef}
                    className="flex gap-4 pb-12 pt-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ 
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none'
                    }}
                >
                    {[...timelineEvents, ...timelineEvents].map((event, index) => (
                        <div key={`mobile-${index}`} className="snap-center shrink-0">
                            <TimelineCard event={event} isMobile={true} />
                        </div>
                    ))}
                    {/* Add a fade/arrow indicator if needed, but the loop suggests infinite. 
                        For mobile scroll, infinite is hard without JS resetting scroll position. 
                        The setInterval above handles the loop logic crudely. 
                    */}
                </div>
            )}
            
            {/* Mobile Scroll Hint Overlay */}
            {isMobile && (
                <div className="absolute right-0 top-0 bottom-12 w-12 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
            )}

          </div>

      </div>
    </section>
  );
};

const TimelineCard = ({ event, isMobile = false }) => (
    <motion.div
      className={`flex flex-col items-center group cursor-pointer ${isMobile ? 'min-w-[240px]' : 'min-w-[280px]'}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Card */}
      <div className={`w-full mb-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl 
                      shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 
                      relative overflow-hidden group-hover:bg-slate-900/80
                      ${isMobile ? 'p-4' : 'p-5'}`}>
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
);

export default Timeline;

import { motion } from 'framer-motion';

const SectionHeading = ({ title, className = "mb-16", children }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`text-center ${className}`}
    >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4 tracking-tight">
            {title}
        </h2>
        <div className="relative w-24 h-1 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient-x shadow-[0_0_15px_rgba(6,182,212,0.3)] group mb-6">
            <motion.div
                className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white to-transparent opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                }}
            />
        </div>
        {children}
    </motion.div>
  );
};

export default SectionHeading;

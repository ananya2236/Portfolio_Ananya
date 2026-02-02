import { motion } from 'framer-motion';

const SectionHeading = ({ title, className = "mb-16", children }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`text-center ${className}`}
    >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 tracking-tight">
            {title}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-[2px] bg-amber-300/80 translate-y-[1px]" />
            <span className="inline-block w-16 h-[1px] bg-slate-600 translate-y-[1px]" />
            <span className="inline-block w-2 h-[6px] bg-amber-400 rounded-sm" />
        </div>
        {children}
    </motion.div>
  );
};

export default SectionHeading;

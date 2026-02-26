import { motion } from 'framer-motion'

export default function NeonGlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
      <div className="relative w-[min(92vw,1200px)] h-[38vh] max-h-[460px]">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[1100px] h-[160px] rounded-full blur-[120px]"
          style={{
            background: 'linear-gradient(90deg, rgba(57,255,20,0) 0%, rgba(57,255,20,0.8) 35%, rgba(57,255,20,0) 70%)',
            opacity: 0.22,
          }}
          animate={{ x: [-40, 40], y: [0, -8, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[980px] h-[140px] rounded-full blur-[100px]"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(204,255,0,0.75) 35%, rgba(0,0,0,0) 70%)',
            opacity: 0.2,
          }}
          animate={{ x: [-60, 60], y: [6, -4, 6] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[860px] h-[180px] rounded-full blur-[140px]"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,16,240,0.5) 30%, rgba(0,0,0,0) 70%)',
            opacity: 0.15,
          }}
          animate={{ x: [-30, 30], y: [-6, 2, -6] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

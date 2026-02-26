import React from 'react'

export default function MeshWaveBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute -left-[20vw] top-[8%] w-[140vw] h-[28rem] rounded-[50%] blur-3xl opacity-30 bg-mesh-green animate-mesh-wave-slow will-change-transform" />
      <div className="absolute -left-[10vw] top-[32%] w-[150vw] h-[26rem] rounded-[50%] blur-3xl opacity-25 bg-mesh-yellow animate-mesh-wave-medium will-change-transform" />
      <div className="absolute -left-[25vw] top-[55%] w-[160vw] h-[24rem] rounded-[60%] blur-3xl opacity-15 bg-mesh-pink animate-mesh-wave-slower will-change-transform" />
    </div>
  )
}

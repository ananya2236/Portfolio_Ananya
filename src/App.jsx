import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'

import TechStack from './components/TechStack'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(6, 182, 212, 0.1)",
      border: "1px solid rgba(6, 182, 212, 0.3)",
      boxShadow: "0 0 20px 2px rgba(6, 182, 212, 0.2)",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(6, 182, 212, 0.2)",
      border: "none",
      mixBlendMode: "screen",
      boxShadow: "0 0 40px 5px rgba(6, 182, 212, 0.3)",
    }
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Inner Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 1500, damping: 20 }}
      />

      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default App

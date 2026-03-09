import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TechStack from './components/TechStack'
import LightWavesBackground from './components/LightWavesBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden selection:bg-amber-300/25 selection:text-slate-100">
      <LightWavesBackground />
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

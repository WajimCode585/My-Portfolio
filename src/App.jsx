import Cursor        from './components/Cursor'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Experience     from './components/Experience'
import Projects       from './components/Projects'
import Education      from './components/Education'
import Contact        from './components/Contact'
import Footer         from './components/Footer'

export default function App() {
  return (
    <>
      {/* Global */}
      <Cursor />
      <ParticleCanvas />

      {/* Layout */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

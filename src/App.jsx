
import './App.css'
import Hero from './pages/hero/hero'
import About from './pages/about/about'
import Skills from './pages/skills/skills'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', viewport.content + `, height=${window.innerHeight}`);
      }
    }
  }, []);
  
  return (
    <>
     <Hero/>
     <About/>
     <Skills/>
     <Projects />
     <Contact />
    </>
  )
}

export default App

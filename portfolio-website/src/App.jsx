import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="min-h-screen relative">
    
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
      </div>
    </div>
  )
}

export default App
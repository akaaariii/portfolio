import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import SectionDivider from './components/SectionDivider';
import Skills from './components/Skills';


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <SectionDivider position="top" />
      <About />
      <Skills />
      <Projects />
      <SectionDivider position="bottom" />
      <Contact />
      <Footer />
    </>
  )
}

export default App

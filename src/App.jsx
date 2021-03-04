import React from 'react';
import { Wrapper } from './styles.jsx';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMepage from './pages/AboutMepage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <AboutMepage />
      <Projectspage />
      <Contactpage />
      <Footer />
    </div>
  )
}

export default App

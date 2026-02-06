import React, { useState } from 'react';
import './styles/Portfolio.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="portfolio-A">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main-A">
        {activeSection === 'hero' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
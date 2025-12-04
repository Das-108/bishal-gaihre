import React, { useEffect, useState } from 'react';
import Navbar from './Componets/Navbar';
import Hero from './Componets/Hero';
import AboutMe from './Componets/AboutMe';
import Skills from './Componets/Skills';
import Certificates from './Componets/Certificates';
import Footer from './Componets/Footer';
import Contact from './Componets/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <main className="pt-24"> {/* offset for fixed navbar */}
        <section id="hero">
          <Hero />
        </section>

        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id='Contact'>
          <Contact />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;

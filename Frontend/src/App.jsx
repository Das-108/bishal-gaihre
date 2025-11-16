import React from 'react'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import AboutMe from './Componets/AboutMe'
import Skills from './Componets/Skills'
import Certificates from './Componets/Certificates'
import LetsConnect from './Componets/LetsConnect'
import Footer from './Componets/Footer'





const App = () => {
  return (
    <div className='min-h-screen px-4 lg:px-12'>      
      <Navbar />
      <main>
        <Hero className="py-20" />
        <AboutMe className="py-20" />
        <Skills className='py-20' />
        <Certificates className='py-20'  />
        <LetsConnect className='py-20' />
      </main>      
      <Footer />
    </div>
  )
}

export default App
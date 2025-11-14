import React from 'react'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import AboutMe from './Componets/AboutMe'
import Skills from './Componets/Skills'
import Certificates from './Componets/Certificates'
import LetsConnect from './Componets/LetsConnect'



const App = () => {
  return (
    <div className='ml-12 mr-12'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Certificates  />
      <LetsConnect />
    </div>
  )
}

export default App
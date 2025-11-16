import React, { useEffect, useState } from 'react'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import AboutMe from './Componets/AboutMe'
import Skills from './Componets/Skills'
import Certificates from './Componets/Certificates'
import LetsConnect from './Componets/LetsConnect'
import Footer from './Componets/Footer'




const App = () => {

  const [isdarkMode, setisDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setisDarkMode((prevMode => !prevMode))    
  }

  useEffect(()=> {
    const body = document.body

    if(isdarkMode) {
      body.classList.add('dark')
    }else{
      body.classList.remove('dark')
    }
  },[isdarkMode])


  return (
    <div className={`${isdarkMode ? "dark" : ""} min-h-screen px-4 lg:px-12`}>
      <Navbar toggleDarkMode={toggleDarkMode} isdarkMode= {isdarkMode} />
        <main>
          <Hero />
          <AboutMe  />
          <Skills  />
          <Certificates />
          <LetsConnect />
        </main>
      <Footer />      
    </div>
  )
}

export default App
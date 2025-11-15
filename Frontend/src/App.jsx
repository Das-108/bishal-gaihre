import React from 'react'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import AboutMe from './Componets/AboutMe'
import Skills from './Componets/Skills'
import Certificates from './Componets/Certificates'
import LetsConnect from './Componets/LetsConnect'
import Footer from './Componets/Footer'


const certification = [
  {
    cetificateImg: 'https://campus.w3schools.com/cdn/shop/files/certificate_of_completion_python_professional_995x786.jpg?v=1711022843',
    title: 'Python Certificate',
    descripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },
  {
    cetificateImg: 'https://cdn.educba.com/academy/wp-content/uploads/2022/07/JavaScript-Certification-Course-Certification.jpg',
    title: 'Basic Javascript',
    descripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },
  {
    cetificateImg: 'https://global.discourse-cdn.com/freecodecamp/optimized/3X/1/a/1a10b3336896b7939a35c42b4d18de70205f81ef_2_1024x669.png',
    title: 'Javasxript Algorithms and Data structures',
    descripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },

]


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
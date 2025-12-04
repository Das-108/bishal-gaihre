import React from 'react'

const AboutMe = () => {
  return (
    // Outer section container: Increased vertical padding for more space
    <section id="about" className=' lg:px-8 py-16 lg:py-32 bg-amber-50  dark:bg-border'>
      <div 
        className='flex flex-col lg:flex-row gap-8 lg:gap-16 
                   bg-soft-gold p-8 sm:p-12 lg:p-16 rounded-xl shadow-subtle 
                   items-center transition-colors duration-500 
                   dark:bg-dark-bg dark:text-dark-text'
      >
        
        {/* Text Content */}
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            {/* H2 Title: Increased text size on desktop (lg:text-5xl) and added bottom margin (mb-8) */}
            <h2 
                className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 lg:mb-8'
                style={{ color: 'var(--text-default)' }}
            >
              About Me
            </h2>
            
            {/* Paragraph Text: Used consistent text size for readability */}
            <p className='text-base sm:text-lg font-body mb-5 lg:mb-6 leading-relaxed'>
              **Hello! I'm Bishal Gaihre.** I am a dedicated Full Stack Developer specializing in creating dynamic and user-centric web applications. My focus is on delivering seamless functionality, clean code, and intuitive user experiences.
            </p>
            
            <p className='text-base sm:text-lg font-body mb-5 lg:mb-6 leading-relaxed'>
              My core competency lies in the MERN stack (MongoDB, Express, React, Node.js), where I excel at bridging the gap between design and functionality. I thrive on solving complex technical challenges and continuously learning new technologies to improve efficiency.
            </p>
            
            <p className='text-base sm:text-lg font-body leading-relaxed'>
              I believe that the best applications are rooted in clarity and purpose. Let's build something exceptional together!
            </p>
        </div>

        {/* Image Container: Hidden on small screens, visible from 'md' breakpoint */}
        <div 
            className='hidden md:block w-full lg:w-1/2 h-full order-1 lg:order-2'
        >
            <img 
                className='rounded-xl w-full h-full object-cover shadow-soft-glow aspect-square'  
                src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="A photo of the portfolio owner" 
            />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
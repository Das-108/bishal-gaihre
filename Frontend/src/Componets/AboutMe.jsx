import React from 'react'

const AboutMe = () => {
  return (
    // Outer container:
    // 1. Corrected custom color: Use 'bg-soft-gold' (from your converted @theme variable)
    // 2. Used custom shadow: shadow-subtle
    // 3. Added responsive padding: py-12 lg:py-20
    <section className='mx-auto max-w-7xl px-4 lg:px-8'>
      <div 
        className='flex flex-col lg:flex-row gap-8 lg:gap-12 bg-soft-gold p-8 lg:p-16 rounded-xl shadow-subtle items-center transition-colors duration-500 dark:bg-dark-bg dark:text-dark-text'
      >
        
        {/* Text Content */}
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            {/* Using your custom font-heading and custom text color */}
            <h2 className='text-4xl font-heading font-bold mb-6 text-text dark:text-dark-text'>
              About Me
            </h2>
            
            {/* Using your custom font-body */}
            <p className='text-lg font-body mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolorem facere sunt numquam ducimus vel doloremque soluta. Vitae sunt neque ex distinctio et totam, est nulla. Harum, iure possimus.
            </p>
            
            <p className='text-lg font-body mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi pariatur deleniti quo voluptas modi ipsam aliquam laboriosam amet nesciunt incidunt, sit dignissimos odit nobis temporibus, eligendi autem quod debitis!
            </p>
            
            <p className='text-lg font-body'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia doloribus soluta optio qui nemo doloremque, dolores quam nulla veniam incidunt a repellendus ad beatae rerum dolor fuga! Iste, nemo numquam.
            </p>
        </div>

        {/* Image Container */}
        {/* 1. Added aspect-square on small screens for better initial shape */}
        {/* 2. Used w-full on small screens, then w-1/2 on large screens */}
        <div className='w-full lg:w-1/2 h-full order-1 lg:order-2'>
            <img 
                // 1. Removed conflicting h-45 class
                // 2. Added h-full and w-full to fill parent container
                // 3. object-cover ensures the image fills the space without stretching
                className='rounded-xl w-full h-full object-cover shadow-soft-glow'  
                src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="A photo of the portfolio owner" 
            />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
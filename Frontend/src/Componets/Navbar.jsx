import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-background sticky top-0 z-10 '>    
      <div className='max-w-7xl mx-auto flex justify-between items-center py-6'>
          <h2 className='font-heading text-2xl font-semibold text-textC'>Bishal Gaihre</h2>
          <div className='hidden md:flex gap-8 text-lg font-body text-textC'>
            <a className='hover:text-accent transition-colors' href="">Home</a>
            <a className='hover:text-accent transition-colors' href="">Cerificates</a>
            <a className='hover:text-accent transition-colors' href="">Contact</a>
            <a className='hover:text-accent transition-colors' href="">About Me</a>            
          </div>

          <button className='text-2xl text-textC hover:text:accent transition-colors' aria-label='Toggle dark mode'>
            <i class="ri-moon-fill"></i>
          </button>
      </div>
      <hr />      
    </nav>
  )
}

export default Navbar
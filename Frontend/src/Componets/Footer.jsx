import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto py-10'>
        <div className='flex justify-between items-center pb-6'>
            <h2 className='font-heading text-3xl text-textC'>Bishal Gaihre</h2>
            <div className='flex gap-4'>
                <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-3xl text-textC hover:text-accent transition-colors"></i></a>
                <a href="#" aria-label="GitHub"><i className="ri-github-fill text-3xl text-textC hover:text-accent transition-colors"></i></a>            
            </div>
        </div>
        <hr className='border-border mb-4' />
        <p className='text-center text-sm font-body text-textC/70'>© 2024 Bishal Gaihre. Crafted with mindfulness and purpose.</p>
    </div>
  )
}

export default Footer
import React from 'react'

const Skills = () => {
  return (
    <section className='flex flex-col items-center p-4'>
        <div className='mt-6 text-center'>
            <h2 className='font-heading text-7xl tracking-tight'>Skills & Expertise</h2>
            <p className='font-body text-textC'>Tooks and technology I work with</p>        
        </div>
        <div className='flex flex-col lg:flex-row  gap-4 items-center text-center p-12'>
            <div className='Card bg-accent rounded-xl p-4'>
                <div className='bg-gray-50 mb-2 rounded-2xl w-14 h-8'>
                    <i class="ri-palette-line"></i>
                </div>
                <h2 className='mb-2 font-bold '>Design</h2>
                <p>Figma,canva</p>
            </div>
            <div className='Card bg-accent rounded-xl p-4'>
                <div className='bg-gray-50 mb-2 rounded-2xl w-14 h-8'>
                    <i class="ri-palette-line"></i>
                </div>
                <h2 className='mb-2 font-bold '>Design</h2>
                <p>Figma,canva</p>
            </div>
            <div className='Card bg-accent rounded-xl p-4'>
                <div className='bg-gray-50 mb-2 rounded-2xl w-14 h-8'>
                    <i class="ri-palette-line"></i>
                </div>
                <h2 className='mb-2 font-bold '>Design</h2>
                <p>Figma,canva</p>
            </div>
            <div className='Card bg-accent rounded-xl p-4'>
                <div className='bg-gray-50 mb-2 rounded-2xl w-14 h-8'>
                    <i class="ri-palette-line"></i>
                </div>
                <h2 className='mb-2 font-bold '>Design</h2>
                <p>Figma,canva</p>
            </div>
            
        </div>
    </section>
  )
}

export default Skills
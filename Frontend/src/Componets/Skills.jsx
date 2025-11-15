import React from 'react'

const Skills = () => {
  return (
    <section className='flex flex-col items-center p-4'>

        <div className='mt-6 text-center'>
            <h2 className='font-heading text-4xl tracking-tight lg:text-5xl'>Skills & Expertise</h2>
            <p className='font-body text-textC/70 mt-2 text-lg'>Tooks and technology I work with</p>        
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl'>

            {/* map here using funtion */}

            <div className='Card bg-blue-200 rounded-xl p-6 flex flex-col items-center text-center shadow hover:sha'>
                <div className='bg-background mb-2 rounded-2xl w-28 h-28 flex items-center justify-center text-2xl text-accent'>
                    <i class="ri-palette-line text-6xl"></i>
                </div>
                <h3 className='mb-1 font-bold text-lg font-body'>Design</h3>
                <p className='text-sm text-textC/80'>Figma,canva</p>
            </div>            
            
        </div>
    </section>
  )
}

export default Skills
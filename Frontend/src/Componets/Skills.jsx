import React from 'react'

const skillsData = [
    {
        logo: 'ri-palette-line text-6xl',
        title: 'Design',
        tools: 'Figma, Framer, Adobe XD'
    },
    {
        logo: 'ri-reactjs-fill text-6xl',
        title: 'Frontend',
        tools: 'React, Tailwind, Vite'
    },
    {
        logo: 'ri-server-line text-6xl',
        title: 'Backend',
        tools: 'Node, Express, MongoDB'
    },
    {
        logo: 'ri-tools-fill text-6xl',
        title: 'Tools',
        tools: 'Git, REST API, UI Libraries'
    },
]

const Skills = () => {
  return (
    <section className='flex flex-col items-center p-4'>

        <div className='mt-6 text-center'>
            <h2 className='font-heading text-4xl tracking-tight lg:text-5xl'>Skills & Expertise</h2>
            <p className='font-body text-textC/70 mt-2 text-lg'>Tooks and technology I work with</p>        
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl'>

            {
                skillsData.map((elem,index) => {

                    return (
                        <div key={index} className='Card bg-blue-200 rounded-xl p-6 flex flex-col items-center text-center shadow hover:sha'>
                            <div className='bg-background mb-2 rounded-2xl w-28 h-28 flex items-center justify-center text-2xl text-accent'>
                                <i class={elem.logo}></i>
                            </div>
                            <h3 className='mb-1 font-bold text-lg font-body'>{elem.title}</h3>
                            <p className='text-sm text-textC/80'>{elem.tools}</p>
                        </div> 
                    )
                })
            }
                       
            
        </div>
    </section>
  )
}

export default Skills
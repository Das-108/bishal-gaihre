import React from 'react'

// Define data outside the component function (good practice)
const skillsData = [
    {
        logo: 'ri-palette-line text-3xl',
        title: 'Design',
        tools: 'Figma, Framer, Adobe XD'
    },
    {
        logo: 'ri-reactjs-fill text-3xl',
        title: 'Frontend',
        tools: 'React, Tailwind, Vite'
    },
    {
        logo: 'ri-server-line text-3xl',
        title: 'Backend',
        tools: 'Node, Express, MongoDB'
    },
    {
        logo: 'ri-tools-fill text-3xl',
        title: 'Tools',
        tools: 'Git, REST API, UI Libraries'
    },
]

const Skills = ({ className }) => { // Use className prop for consistency
  return (
    <section className={`flex flex-col items-center max-w-7xl mx-auto ${className}`}>

        <div className='m-4 text-center'>
            <h2 className='font-heading text-4xl tracking-tight lg:text-5xl'>Skills & Expertise</h2>
            <p className='font-body text-textC/70 mt-2  mb-4 text-lg'>Tools and technology I work with</p>        
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl'>

            {skillsData.map((elem, index) => (

                // 💡 STEP 1: Add the 'group' class to the main card container
                <div 
                    key={index} 
                    className='bg-background rounded-xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 ease-in-out group hover:shadow-soft-glow hover:-translate-y-1' // Added your desired card hover effects
                >
                    
                    {/* 💡 STEP 2: Use group-hover:bg-accent and remove the 'text-accent' default */}
                    <div 
                        className='bg-accent/20 mb-4 rounded-xl w-16 h-16 flex items-center justify-center text-3xl transition-colors duration-300 group-hover:bg-accent'
                    >
                        {/* 💡 STEP 3: Use group-hover:text-white for the icon color */}
                        <i 
                            className={`${elem.logo} text-accent transition-colors duration-300  group-hover:text-white`} // Default color is accent, changes to white on group-hover
                        ></i>
                    </div>

                    <h3 className='mb-1 font-bold text-lg font-body text-textC'>{elem.title}</h3>
                    <p className='text-sm text-textC/80'>{elem.tools}</p>
                </div> 
            ))}
        </div>
    </section>
  )
}

export default Skills
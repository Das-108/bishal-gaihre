import React from 'react'
// Assuming you have 'remixicon' installed for the logos
// Example: import 'remixicon/fonts/remixicon.css';

// Define data outside the component function (good practice)
const skillsData = [
    {
        logo: 'ri-palette-line', // Removed text-3xl here, adding it below
        title: 'Design',
        tools: 'Figma, Framer, Adobe XD'
    },
    {
        logo: 'ri-reactjs-fill',
        title: 'Frontend',
        tools: 'React, Tailwind, Vite'
    },
    {
        logo: 'ri-server-line',
        title: 'Backend',
        tools: 'Node, Express, MongoDB'
    },
    {
        logo: 'ri-tools-fill',
        title: 'Tools',
        tools: 'Git, REST API, UI Libraries'
    },
]

// The component function
const Skills = ({ className }) => {
  return (
    // Outer section: Added vertical padding for spacing from adjacent sections
    <section id="skills" className={`py-16 lg:py-24 flex flex-col items-center max-w-7xl mx-auto px-4 lg:px-8 ${className}`}>

        {/* Header Content: Adjusted spacing and text sizes for better hierarchy */}
        <div className='m-4 text-center mb-12 lg:mb-16'>
            {/* Title: Scales from 3xl on mobile to 5xl on desktop */}
            <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
                Skills & Expertise
            </h2>
            {/* Subtitle: Scales text slightly and adjusts bottom margin */}
            <p className='font-body text-textC/70 mt-2 text-base sm:text-lg max-w-xl mx-auto'>
                Tools and technology I work with
            </p>        
        </div>

        {/* Skills Grid: Uses responsive columns and fixed width constraints */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl'>

            {skillsData.map((elem, index) => (

                <div 
                    key={index} 
                    className='bg-background rounded-xl p-4 sm:p-4 flex flex-col items-center text-center shadow-md transition-all duration-300 ease-in-out group hover:shadow-soft-glow hover:-translate-y-1 dark:shadow-[#47476a] dark:shadow-[0_-2px_10px]'
                >
                    
                    {/* Icon Container: Ensures the box size is uniform */}
                    <div 
                        className='bg-accent/20 mb-4 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent'
                    >
                        {/* Icon: Scales the icon size */}
                        <i 
                            className={`${elem.logo} text-2xl sm:text-3xl text-accent transition-colors duration-300 group-hover:text-white`}
                        ></i>
                    </div>

                    {/* Title: Ensures font is prominent */}
                    <h3 className='mb-1 font-bold text-base sm:text-lg font-body text-textC'>{elem.title}</h3>
                    {/* Tools List: Smaller font for secondary info */}
                    <p className='text-xs sm:text-sm text-textC/80'>{elem.tools}</p>
                </div> 
            ))}
        </div>
    </section>
  )
}

export default Skills
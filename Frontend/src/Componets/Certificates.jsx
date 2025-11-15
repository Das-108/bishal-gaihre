import React from 'react'

const Certificates = () => {
  return (
    <section className=' max-w-full mx-auto'>
     
        <div className='text-center mb-12'>
            <h2 className='font-heading text-4xl lg:text-5xl text-textC '> Certificates</h2>
            <p className='font-body text-lg text-textC/70'>Recent work that showcase my approach</p>
        </div>
        

        <div className='flex gap-4 p-8 overflow-x-scroll scrollbar-hide'>

            {/* map ceritficates here using funtion */}

            <div className='bg--softgold p-6 rounded-xl text-center w-[300px] md:w-[480px] shadow items-center shrink-0'>
                <div className='h-[200px] md:h-[250px] mb-4'>
                    <img className='w-full h-full object-cover rounded-lg'
                     src="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt='Certificate {index+1}' />
                </div>
                <h2 className='font-heading text-xl font-bold mb-2 text-textC'>Javascript</h2>         
                <p className='font-body text-base text-textC/80 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum, quod quasi placeat itaque voluptas assumenda asperiores maiores quia, unde, illo sint maxime aliquam quo? Veniam quaerat pariatur repudiandae amet!</p>
            </div>


            

        </div>


    </section>
  )
}

export default Certificates
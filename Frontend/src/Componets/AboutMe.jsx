import React from 'react'

const AboutMe = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex gap-8 flex-col lg:flex-row lg:gap-12 bg--softgold p-8 lg:p-16 rounded-xl shadow-subtle transition-colors dark:bg-dark-bg dark:text-darkText items-center'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                <h2 className='text-4xl font-heading font-bold mb-6 text-textC dark:text-darkText'>About Me</h2>
                <p className='text-lg font-body mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolorem facere sunt numquam ducimus vel doloremque soluta. Vitae sunt neque ex distinctio et totam, est nulla. Harum, iure possimus.</p>
                <p className='text-lg font-body mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi pariatur deleniti quo voluptas modi ipsam aliquam laboriosam amet nesciunt incidunt, sit dignissimos odit nobis temporibus, eligendi autem quod debitis!</p>
                <p className='text-lg font-body mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia doloribus soluta optio qui nemo doloremque, dolores quam nulla veniam incidunt a repellendus ad beatae rerum dolor fuga! Iste, nemo numquam.</p>
            </div>

            <div className='w-full lg:w-1/2 h-full order-1 lg:order-2'>
                <img className='w-full h-full shadow--softgold rounded-xl object-cover'  src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
        </div>
    </section>
    
  )
}

export default AboutMe
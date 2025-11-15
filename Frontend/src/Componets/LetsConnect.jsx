import React from 'react'

const LetsConnect = () => {
  return (
    <div className='text-center items-center max-w-4xl mx-auto p-12 bg-soft-gold rounded-xl'>
        <div className='mb-10'>
            <h2 className='font-heading text-4xl lg:text-5xl text-textC'>Let's Connect</h2>
            <p className='font-body text-lg text-textC/70 mt-2'>Ready to Create something Meaningful together</p>
        </div>

        <form action="" className='flex flex-col items-center space-y-4'>
            <div className='flex flex-col md:flex-row gap-4 w-full'>
                <input className='border border-border p-4 bg-gray-50 rounded-xl focus:outline-accent transition-colors duration-300' 
                  type="text" placeholder='Your Name' 
                />

                <input className='border p-4 bg-gray-50 rounded-xl ' 
                  type="text" 
                  name="" 
                  id="" 
                  placeholder='Your Email'
                />
            </div>

            <textarea className='border w-full h-40 p-4 bg-gray-50 rounded-xl transition-shadow duration-300 resize-none focus:outline-accent' name="" id="" placeholder='Your Message' />

        </form>

        <input type="button" value="Send Message" className='text-white p-4 bg-accent rounded-3xl m-4' />
        <p className='mt-4 text-sm text-textC/70'>or reach me at Social links provided below</p>

    </div>
  )
}

export default LetsConnect
import React from 'react'

const LetsConnect = () => {
  return (
    <div className='text-center items-center bg-blue-100'>
        <div>
            <h2 className='font-heading text-7xl '>Let's Connect</h2>
            <p>Ready to Create something Meaningful together</p>
        </div>

        <form action="" className='flex lg:flex-col items-center'>
            <div className='flex gap-8 m-4'>
                <input className='border p-4 bg-amber-50 rounded-xl w-[300px]' type="text" placeholder='Your Name' />
                <input className='border p-4 bg-amber-50 rounded-xl w-[300px]' type="text" name="" id="" placeholder='Your Email'/>
            </div>

            <textarea className='border w-[630px] h-[250px] p-4 bg-amber-50 rounded-xl' name="" id="" placeholder='Your Message' />

        </form>

        <input type="button" value="Send Message" className='text-white p-4 bg-accent rounded-3xl m-4' />
        <p className='mb-2'>or reach me at Social links provided below</p>

    </div>
  )
}

export default LetsConnect
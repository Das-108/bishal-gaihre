import React from 'react'

const Hero = () => {
  return (
    <div className='flex w-full h-[90vh] items-center bg-black'>
        <div className='bg-red-400 w-1/2 h-full'>
            <p>Hi,I'm Bishal Gaihre 🌿</p>
            <h2>Full Stack Developer</h2>
            <p>"I bulid expriences rooted in clarity and purpose."</p>
            <div className='gap-8 mt-6'>
                <button className='bg-amber-500 p-4 rounded-xl text-white ml-4'>View My Work</button>
                <button className='bg-amber-500 p-4 rounded-xl text-white ml-4'>Contact Me</button>
            </div>
        </div>
        <div className='bg-blue-500 w-1/2 h-full py-50 px-50'>
            <img className='h-100 w-100 rounded-full ' src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Hero
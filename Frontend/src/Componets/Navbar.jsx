import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-background'>
        <div className='flex justify-between border py-8 p-8 '>
            <h2 className='font-medium text-2xl'>Bishal Gaihre</h2>
            <div className='flex justify-between gap-12 text-xl text-black-300'>
                <h4>home</h4>
                <h4>Projects</h4>
                <h4>Experice</h4>
                <h4>Contact</h4>
            </div>
            <div>
                <i class="ri-moon-fill"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar
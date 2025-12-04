import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <section id="hero" className='min-h-screen flex items-center'>
      <div className='max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

        {/* Left Content */}
        <div className='space-y-6 sm:space-y-8'>
          <p className='text-lg sm:text-xl font-medium text-accent'>
            Hi, I'm Bishal Gaihre 🌿
          </p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-(--text-default)'>
            UI/UX Designer &amp;<br />
            <span className='text-accent'>Full Stack Developer</span>
          </h1>
          <p className='text-lg sm:text-xl italic text-gray-500'>
            "I build experiences rooted in clarity and purpose."
          </p>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
            <button
              className='px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl transition-all duration-300 hover:bg-accent hover:text-(--bg-primary)'
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
              View My Work
            </button>
            <button
              className='px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center gap-2 transition-all duration-300 hover:shadow-lg bg-accent text-(--bg-primary)'
            >
              Contact Me <RiArrowRightLine />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex justify-center lg:justify-end mt-8 lg:mt-0'>
          <div className='w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 rounded-full overflow-hidden border-4 border-(--bg-secondary) shadow-2xl'>
            <img
              className='w-full h-full object-cover'
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3317ae77af-af24e45f8449b552a915.png"
              alt="Bishal Gaihre Portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

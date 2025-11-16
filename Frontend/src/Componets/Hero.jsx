import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri'; // Example icon for button

const Hero = () => {
  return (
    <section id="hero" className='h-[800px] pt-24 flex items-center'>
      <div className='max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center'>
        {/* Left Content */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <p 
              className='text-xl font-medium'
              style={{ color: 'var(--color-accent)' }} // Accent color
            >
              Hi, I'm Bishal Gaihre 🌿
            </p>
            <h1 
              className='font-heading text-5xl lg:text-6xl font-semibold leading-tight'
              style={{ color: 'var(--text-default)' }} // Default text color
            >
              UI/UX Designer &amp;<br />
              <span style={{ color: 'var(--color-accent)' }}>Full Stack Developer</span>
            </h1>
            <p className='text-xl italic text-gray-500'>
              "I build experiences rooted in clarity and purpose."
            </p>
          </div>
          <div className='flex gap-6'>
            {/* Outline Button */}
            <button 
              className='px-8 py-4 border-2 rounded-xl transition-all duration-300 hover:glow'
              style={{ 
                borderColor: 'var(--color-accent)', 
                color: 'var(--color-accent)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            >
              View My Work
            </button>
            {/* Filled Button */}
            <button 
              className='px-8 py-4 rounded-xl hover:shadow-lg hover:glow transition-all duration-300 flex items-center gap-2'
              style={{ 
                backgroundColor: 'var(--color-accent)', 
                color: 'var(--bg-primary)' // Text color should contrast with accent
              }}
            >
              Contact Me <RiArrowRightLine />
            </button>
          </div>
        </div>

        {/* Right Image + Particles - Note: Particle CSS needed in index.css */}
        <div className='relative flex justify-center'>
          {/* Particles omitted for brevity but should remain in HTML/CSS */}
          <div className='w-80 h-80 rounded-full overflow-hidden border-4 shadow-2xl'
            // Using a secondary color for the border
            style={{ borderColor: 'var(--bg-secondary)', boxShadow: '0 0 40px rgba(var(--color-accent-rgb, 155, 135, 245), 0.3)' }}
          >
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
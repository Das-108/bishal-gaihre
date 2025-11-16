import React from 'react';

const AboutMe = () => {
  return (
    <section 
      id="about" 
      // Background uses the secondary color variable (assuming you set secondary/20)
      className='py-24'
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 20%, transparent)' }}
    >
      <div className='max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center'>
        <div className='space-y-6'>
          <h2 
            className='font-heading text-4xl font-medium'
            style={{ color: 'var(--text-default)' }}
          >
            About Me
          </h2>
          <div className='space-y-4 text-lg leading-relaxed text-(--text-default)'>
            <p>
              My journey in design and development is guided by principles of 
              <span className='font-medium' style={{ color: 'var(--color-accent)' }}> clarity</span> and 
              <span className='font-medium' style={{ color: 'var(--bg-secondary)' }}> purpose</span>. Interfaces should serve function and bring peace to users.
            </p>
            <p>Drawing inspiration from bhakti philosophy, I approach each project with mindfulness and dedication.</p>
            <p>Outside work, I explore spiritual texts, meditate, or contribute to community service projects.</p>
          </div>
        </div>
        <div className='relative'>
          <div 
            className='absolute inset-0 rounded-2xl transform rotate-6'
            style={{ 
              background: `linear-gradient(to bottom right, color-mix(in srgb, var(--color-accent) 20%, transparent), color-mix(in srgb, var(--bg-secondary) 20%, transparent))`
            }}
          ></div>
          <div 
            className='relative p-8 rounded-2xl shadow-lg'
            style={{ backgroundColor: 'var(--bg-primary)' }} // Inner card uses primary background
          >
            <img 
              className='w-full h-64 object-cover rounded-xl mb-6' 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/70a519674c-82c0ba640f8f084f6d3c.png" 
              alt="Workspace"
            />
            <p className='text-center text-sm text-gray-500 italic'>
              "Design is not just what it looks like - design is how it works and how it makes you feel."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className='py-24 sm:py-28 lg:py-32'
      style={{
        background: `linear-gradient(to bottom right, 
          color-mix(in srgb, var(--color-accent) 5%, transparent), 
          color-mix(in srgb, var(--bg-secondary) 10%, transparent)
        )`
      }}
    >
      <div className='max-w-2xl mx-auto px-6 sm:px-8 lg:px-12'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-(--text-default) mb-2'>
            Let's Connect
          </h2>
          <p className='text-lg sm:text-xl text-gray-500'>
            Ready to create something meaningful together?
          </p>
        </div>

        <form className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <input 
              type="text" 
              placeholder="Your Name" 
              className='w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 transition-all'
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--color-border)',
                color: 'var(--text-default)',
                '--tw-ring-color': 'var(--color-accent)'
              }}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className='w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 transition-all'
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--color-border)',
                color: 'var(--text-default)',
                '--tw-ring-color': 'var(--color-accent)'
              }}
            />
          </div>
          <textarea 
            rows="6" 
            placeholder="Your Message" 
            className='w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none'
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--color-border)',
              color: 'var(--text-default)',
              '--tw-ring-color': 'var(--color-accent)'
            }}
          ></textarea>

          <div className='text-center'>
            <button 
              type="submit" 
              className='px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-accent text-(--bg-primary) hover:shadow-lg transition-all'
            >
              Send Message
            </button>
            <p className='mt-4 text-gray-500 text-sm sm:text-base'>
              or reach me at <a href="mailto:hello@bishalgaihre.com" className='hover:underline text-accent'>hello@bishalgaihre.com</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

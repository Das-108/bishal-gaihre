import React from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri'; 

// Note: Ensure your parent component passes toggleDarkMode and isDarkMode
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header 
      // Use CSS variable for background and border colors
      className='fixed top-0 w-full z-50 bg-(--bg-primary)/80 backdrop-blur-md border-b border-border transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-8 py-4 flex justify-between items-center'>
        <div 
          className='font-heading text-2xl font-semibold'
          style={{ color: 'var(--text-default)' }} // Ensure heading uses default text color
        >
          Bishal Gaihre
        </div>

        <nav className='hidden md:flex space-x-8 text-(--text-default)'>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              // Use the accent color variable for hover state
              className='hover:text-accent transition-colors'
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className='text-2xl text-(--text-default) hover:text-accent transition-colors'
          aria-label='Toggle dark mode'
        >
          {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
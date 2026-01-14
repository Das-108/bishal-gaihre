import React from 'react';
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='py-12 bg-(--bg-primary) dark:bg-border border-t border-border'>
      <div className='max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='text-xl font-semibold text-(--text-default)'>
          Bishal Gaihre
        </div>
        <div className='flex gap-4'>
          <a target='_blank' href="https://www.linkedin.com/in/bishal-gaihre-063243326/" className='text-gray-500 hover:text-accent transition-colors'><RiLinkedinFill size={24} /></a>
          <a target='_blank' href="https://github.com/Das-108" className='text-gray-500 hover:text-accent transition-colors'><RiGithubFill size={24} /></a>
          
        </div>
      </div>
      <div className='text-center mt-8 pt-8 border-t border-border text-gray-500 text-sm sm:text-base'>
        &copy; {new Date().getFullYear()} Bishal Gaihre. Crafted with mindfulness and purpose.
      </div>
    </footer>
  );
};

export default Footer;

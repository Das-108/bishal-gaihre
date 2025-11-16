import React from 'react';
import { RiLinkedinFill, RiGithubFill, RiDribbbleFill } from 'react-icons/ri'; // Example icons

const Footer = () => {
    return (
        <footer 
            id="footer" 
            className='py-12'
            style={{ borderTop: '1px solid var(--color-border)' }} // Use border variable
        >
            <div className='max-w-6xl mx-auto px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div 
                      className='font-heading text-xl font-semibold mb-4 md:mb-0'
                      style={{ color: 'var(--text-default)' }}
                    >
                      Bishal Gaihre
                    </div>
                    <div className='flex space-x-6'>
                        <a href="#" className='text-gray-500 hover:text-accent transition-colors'>
                            <RiLinkedinFill className='text-xl' />
                        </a>
                        <a href="#" className='text-gray-500 hover:text-accent transition-colors'>
                            <RiGithubFill className='text-xl' />
                        </a>
                        <a href="#" className='text-gray-500 hover:text-accent transition-colors'>
                            <RiDribbbleFill className='text-xl' />
                        </a>
                    </div>
                </div>
                <div 
                    className='text-center mt-8 pt-8 text-gray-500'
                    style={{ borderTop: '1px solid var(--color-border)' }}
                >
                    <p>&copy; 2024 Bishal Gaihre. Crafted with mindfulness and purpose.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
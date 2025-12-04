import React from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'aboutme' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-(--bg-primary)/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-heading text-2xl font-semibold" style={{ color: 'var(--text-default)' }}>
          Bishal Gaihre
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-(--text-default) hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl text-(--text-default) hover:text-accent transition-colors"
        >
          {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

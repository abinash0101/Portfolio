import React from 'react';
import { Link } from 'react-scroll';
import Logo from './assets/Logo.jpg'


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 bg-#171637 text-white">
      <img src={Logo} alt="Logo" className="h-10 w-auto" style={{borderRadius:'5px'}}/>
      

      {/* Center Nav Menu */}
      <nav className="bg-[#1f1f1f]/80 backdrop-blur-md flex gap-6 items-center px-6 py-2 rounded-full border border-gray-700 shadow-md text-sm font-light">
        
        <Link to="home" smooth={true} duration={500} className="px-4 py-1 rounded-full cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={700} className="hover:text-gray-300 cursor-pointer">About</Link>
        <Link to="projects" smooth={true} duration={700} className="hover:text-gray-300 cursor-pointer">projects</Link>
        <Link to="Techstack" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Tech Stack</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Contact</Link>
         
      </nav>

      {/* Right Icon */}
      <div className="text-2xl">⌘</div>
    </nav>
  );
};

export default Navbar;

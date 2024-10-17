import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className='h-[70px] flex flex-row items-center justify-between bg-[#0B9586]'>
        {/* Logo as a link */}
        <div className='ml-12 text-xl text-white'>
          <a href="/" className="hover:text-[#FFBB1C] transition-colors duration-300">LOGO</a>
        </div>
        <ul className='flex'>
          <li className='text-white px-8 font-inter'>
            <a 
              href="#" 
              className='px-6 shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded-sm py-1 bg-[#08776B] hover:bg-[#0B9586] transition duration-300'
            >
              Home
            </a>
          </li>
          <li className='text-white px-8 font-inter'>
            <a 
              href="#" 
              className='hover:text-[#FFBB1C] transition duration-300'
            >
              Trade
            </a>
          </li>
          <li className='text-white px-8 font-inter'>
            <a 
              href="#" 
              className='hover:text-[#FFBB1C] transition duration-300'
            >
              Projects
            </a>
          </li>
          <li className='text-white px-8 font-inter'>
            <a 
              href="#" 
              className='hover:text-[#FFBB1C] transition duration-300'
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className='mr-12 text-xl text-white'>User</div>
      </nav>
    </>
  );
}

export default Navbar;

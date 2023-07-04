import React from 'react'
import Logo from "../Asset/Logo2.png"
import { FaArrowDown } from 'react-icons/fa'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex cust--font justify-between lg:mx-10 md:mx-6 pt-10 md:items-center mx-6'>
      <img src={Logo} alt='logo' className='h-14 hover:-translate-x-1' />

      <span className='cursor-pointer md:hidden block' onClick={toggleMenu}>
        <FaArrowDown />
      </span>
      
      <div
        className={`nav-links md:flex md:space-x-8 md:items-center ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        } transition-all ease-in duration-500`}
      >
        <ul className='nav--links md:flex md:space-x-8 z-[-1] md:z-auto md:static'>
          <li className='md:mt-0 mb-2'>
            <span className='mr-1 text-green-200'>01.</span>
            <a href='#'>About</a>
          </li>
          <li className='md:mt-0 mb-2'>
            <span className='mr-1 text-green-200'>02.</span>
            <a href='#'>About</a>
          </li>
          <li className='md:mt-0 mb-2'>
            <span className='mr-1 text-green-200'>03.</span>
            <a href='#'>About</a>
          </li>
          <li className='md:mt-0 mb-2'>
            <span className='mr-1 text-green-200'>04.</span>
            <a href='#'>About</a>
          </li>
        </ul>
        <button type='button' className='border border-green-200 p-2 rounded hover:bg-slate-950 md:mt-0'>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;

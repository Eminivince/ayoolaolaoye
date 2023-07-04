import React from 'react'
import Logo from "../Asset/Logo2.png"

const Navbar = () => {
  return (
    <div className='flex cust--font justify-between lg:mx-10 mx-6 pt-10 items-center'>
        <img src={Logo} alt='logo' className='h-14 hover:-translate-x-1' />
        <div className='nav-links lg:flex space-x-8 items-center hidden'>
            <ul className='nav--links flex space-x-8'>
                <li><span className='mr-1 text-green-200'>01.</span><a href='#'>About</a></li>
                <li><span className='mr-1 text-green-200'>02.</span><a href='#'>About</a></li>
                <li><span className='mr-1 text-green-200'>03.</span><a href='#'>About</a></li>
                <li><span className='mr-1 text-green-200'>04.</span><a href='#'>About</a></li>
            </ul>
            <button type='button' className='border border-green-200 p-2 rounded hover:bg-slate-950'>Resume</button>
        </div>
        
    </div>
  )
}

export default Navbar
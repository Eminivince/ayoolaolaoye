import React, {useState} from 'react'
import Logo from "../Asset/Logo2.png"
import { FaArrowDown } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
  const [navState, setnavState] = useState(false);

  function handleMobileNav(){
    setnavState(!navState)
    console.log("Clicked")
  }

  return (
    <div className='flex cust--font justify-between lg:mx-10 md:mx-6 pt-10 md:items-center mx-6 relative'>
        <img src={Logo} alt='logo' className='h-14 hover:-translate-x-1' onClick={handleMobileNav} />

        

        <div className='absolute right-[3%] top-[40%] md:hidden text-4xl' onClick={handleMobileNav}>

            <AiOutlineMenu   />

        </div>
                

        
                
        {navState && <div className='nav-links md:flex md:space-x-8 md:items-center md:opacity-100  absolute md:static  right-3 top-[90%] md:bg-slate-900 bg-slate-950 w-[50%] md:w-auto p-4 rounded space-y-4 md:space-y-0'>
            <ul className='nav--links md:flex md:space-x-8 z-[-1] md:z-auto md:static space-y-4 md:space-y-0'>
                <li className='md:mt-0 mb-2'><span className='mr-1 text-green-300'>01.</span><a href='#'>About</a></li>
                <li className='md:mt-0 mb-2'><span className='mr-1 text-green-300'>02.</span><a href='#'>Experience</a></li>
                <li className='md:mt-0 mb-2'><span className='mr-1 text-green-300'>03.</span><a href='#'>Work</a></li>
                <li className='md:mt-0 mb-2'><span className='mr-1 text-green-300'>04.</span><a href='#'>Contact</a></li>
            </ul>


            <button type='button' className='border border-green-300 py-2 px-4 rounded md:hover:bg-slate-950 hover:bg-slate-800 duration-200 md:mt-0'>Resume</button>
        </div>}
        
        
    </div>
  )
}

export default Navbar

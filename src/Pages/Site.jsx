import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from './Hero'
import { FaDiscord, FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa'



const Site = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Hero />

        <div>
          <div className='border-l-2 h-48 absolute bottom-0 left-16 hidden md:block' />
          <div className='space-y-4 absolute left-14 bottom-52'>
              <FaTwitter className='hidden md:block' />
              <FaTelegram className='hidden md:block'/>
              <FaFacebook className='hidden md:block'/>
              <FaDiscord className='hidden md:block'/>
          </div>
        </div>


        <div className='border-l-2 h-48 absolute bottom-0 right-16 hidden md:block' />
        <p className='cust--font -right-5 absolute bottom-72 rotate-90 hidden md:block'>olaoye.esq@gmail.com</p>
    </div>
  )
}
export default Site
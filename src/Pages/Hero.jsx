import React from 'react'
import Picture from '../Asset/Logo2.png'

const Hero = () => {
  return (
    <div className='mt-24 mx-[5%] md:mx-[15%] pb-10'>
        <div className='h-screen'>
            <p className='mb-4 text-green-200 cust--font md:text-xl'>
                Hi, my name is
            </p>
            <h1 className='md:text-6xl text-2xl font-bold mb-4'>
                Ayoola Olaoye.
            </h1>
            <h1 className='md:text-4xl text-2xl font-bold mb-8 text-slate-400'>A frontend and Blockchain developer.</h1>
            <p className='md:w-[70%] md:text-xl mb-10'>I am a lawyer, frontend and blockchain web developer. Currently, I'm focused on building smart contract in the <span className='text-green-300'>web3</span> space and developing fantastic <span className='text-green-300'>frontend</span> to enable seamless interaction while activily focusing on 
            <span className=' text-green-300'> responsiveness, accessibilty and secuirity</span>.</p>

            <button type='button' className='py-3 px-20 border border-green-200 rounded text-green-200 hover:bg-slate-950'>Say Hello</button>
        </div>

        
        
        
        
        <div className='flex md:flex-row flex-col h-screen items-center md:space-x-10'>

            <div className='md:text-lg'>
                <div className='flex w-[100%] items-center md:pb-10 pb-5 space-x-3 basis-2-3'>
                    <span className='cust--font text-green-200'>01. </span>
                    <h1 className='md:text-3xl text-lg font-semibold'>About Me</h1>
                    <div></div>
                    <hr className='w-[60%]'/>
                </div>
                <h1 className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore qui hic ipsum officia animi magnam fuga ex, temporibus nobis magni deleniti dolorum distinctio esse quasi voluptatum quis? Ea, ut.</h1>
                <h1 className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore qui hic ipsum officia animi magnam fuga ex, temporibus nobis magni deleniti dolorum distinctio esse quasi voluptatum quis? Ea, ut.</h1>
                <h1 className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore qui hic ipsum officia animi magnam fuga ex, temporibus nobis magni deleniti dolorum distinctio esse quasi voluptatum quis? Ea, ut.</h1>

                <h1 className='mb-6'>Here are the few technologies I've been working with recently:</h1>
                <div className='flex space-x-20 cust--font md:mb-0 mb-6'>
                    <ul className='flex flex-col text-green-200'>
                        <l1 className='mb-2'>HTML</l1>
                        <l1 className='mb-2'>CSS</l1>
                        <l1 className='mb-2'>JavaScript (ES6+)</l1>
                    </ul>
                    <ul className='flex flex-col text-green-200'>
                        <l1 className='mb-2'>React</l1>
                        <l1 className='mb-2'>TailwindCSS</l1>
                        <l1 className='mb-2'>Solidity</l1>
                    </ul>
                </div>
            </div>
            


            <div className='basis-1-3'>
                <img src={Picture} alt='Pic' className='w-[70%] mx-auto' />
            </div>
                
        </div>


    </div>
  )
}




export default Hero
import React from 'react'
import Picture from '../Asset/ImageNFT.jpg'
import MyProjects from './MyProjects'

const Hero = () => {
  return (
    <div className='md:mt-24 mt-44 mx-[5%] md:mx-[15%] pb-10'>
        <div className='md:h-screen mb-[50%] md:mb-0'>
            <p className='mb-4 text-green-300 cust--font md:text-xl'>
                Hi, my name is
            </p>
            <h1 className='md:text-6xl text-2xl font-bold mb-4'>
                Ayoola Olaoye.
            </h1>
            <h1 className='md:text-4xl text-2xl font-bold mb-8 text-slate-400'>A frontend and Blockchain developer.</h1>
            <p className='md:w-[70%] md:text-xl mb-10'>I am a lawyer, frontend and blockchain web developer. Currently, I'm focused on building smart contract in the <span className='text-green-300'>web3</span> space and developing fantastic <span className='text-green-300'>frontend</span> to enable seamless interaction while activily focusing on 
            <span className=' text-green-300'> responsiveness, accessibilty and secuirity</span>.</p>

            <button type='button' className='py-3 px-20 border border-green-300 rounded text-green-300 hover:bg-slate-950 duration-200'>Say Hello to Me 👋</button>
        </div>

        
        
        
        
        <div className='flex md:flex-row flex-col md:h-screen items-center md:space-x-10'>

            <div className='md:w-[65%]'>
                <div className='flex w-[100%] items-center md:pb-10 pb-5 space-x-3 basis-2/3'>
                    <span className='cust--font text-green-300'>01. </span>
                    <h1 className='md:text-3xl text-lg font-semibold'>About Me</h1>
                    <div></div>
                    <hr className='w-[60%]'/>
                </div>
                
                <h1 className='mb-3 text-justify'>My journey into web development began with a curiosity for creating interactive and user-friendly interfaces. I have mastered the art of crafting elegant frontend experiences, paying special attention to responsiveness and accessibility. I believe that well-designed and intuitive user interfaces are key to enhancing user engagement and satisfaction.</h1>
                <h1 className='mb-3 text-justify'>In the dynamic field of blockchain technology, I am focused on building smart contracts and decentralized applications (dApps). I embrace the decentralized nature of blockchain networks and the potential they offer to transform industries. By leveraging my legal background and technical skills, I strive to create secure and efficient solutions that enable seamless interactions and foster trust in the decentralized ecosystem.</h1>
                <h1 className='mb-3 text-justify'>I am committed to continuous learning and staying up-to-date with the latest advancements in both law and technology. This allows me to adapt to evolving trends and leverage emerging tools and frameworks to deliver high-quality results.</h1>
                <h1 className='mb-3 text-justify'>I am passionate about collaborating with like-minded professionals and contributing to projects that have a positive impact. By combining my legal expertise, frontend development skills, and blockchain knowledge, I aim to drive innovation and empower individuals and businesses to navigate the digital landscape successfully.</h1>

                <h1 className='md:mb-6 mb-12'>Here are the few technologies I've been working with recently:</h1>
                <div className='flex space-x-20 cust--font md:mb-0 mb-6'>
                    <ul className='flex flex-col text-green-300 text-lg'>
                        <l1 className='mb-2'>HTML</l1>
                        <l1 className='mb-2'>CSS</l1>
                        <l1 className='mb-2'>JavaScript (ES6+)</l1>
                    </ul>
                    <ul className='flex flex-col text-green-300 text-lg'>
                        <l1 className='mb-2'>React</l1>
                        <l1 className='mb-2'>TailwindCSS</l1>
                        <l1 className='mb-2'>Solidity</l1>
                    </ul>
                </div>
            </div>
            


            <div className='basis-1/3 md:mt-0 mt-6'>
                <img src={Picture} alt='Pic' className='mx-auto rounded-full overflow-hidden' />
            </div>
                
        </div>

        <MyProjects />


    </div>
  )
}




export default Hero
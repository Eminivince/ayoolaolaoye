import React from 'react'
import Xeleron from '../Asset/Xeleron.jpeg'

const MyProjects = () => {
    const XeleronImage = '../Asset/Xeleron.jpeg'

  return (
    <div className='md:mt-[10%] mb-[5%]'>
        <div className='flex space-x-3 items-center my-14'>
            <h1 className='cust--font text-green-300'>03.</h1>
            <h1 className='md:text-3xl text-lg font-semibold'>Some Things I've Built</h1>
            <hr className='md:w-[60%] w-[30%]' />
        </div>

        <div className='md:relative'>
            <div className='md:flex w-[100%] hidden'>
                <div className='bg-slate-700 rounded-md'>
                    <img src={Xeleron} alt='Xeleron' className='basis-1/2 w-[100%] h-[100%] object-cover mix-blend-overlay hover:mix-blend-normal rounded-md' />
                </div>
                
                <div className='basis-1/2  text-right flex flex-col justify-between'>
                    <div>
                        <h1 className='cust--font text-green-300'>Featured Project</h1>
                        <h1 className='md:text-3xl text-lg font-semibold'>Xeleron DApp</h1>
                    </div>
                    <div  >
                        <ul className='flex cust--font text-xs space-x-2 text-green-300 justify-end'>
                            <li>Solidity</li>
                            <li>Smart Contract</li>
                            <li>React</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='md:w-[55%] bg-slate-950 md:bg-slate-800 p-5 rounded md:text-right md:absolute relative md:top-24 md:left-[45%]'>
                {/* <img src={Xeleron} alt='Xeleron' className='absolute w-full h-full top-0 left-0 md:hidden'/> */}
                <div>
                    <div className='md:hidden mb-8'>
                        <h1 className='cust--font text-green-300'>Featured Project</h1>
                        <h1 className='md:text-3xl text-lg font-semibold'>Xeleron DApp</h1>
                    </div>
                    <h1 className='mb-8 text-justify'>Xeleron is a groundbreaking <span className='text-green-300'>Decentralized Finance</span> hub that offers diverse range of products such as the ability to pool tokens, swap, farm, stake and launch tokens.
                    </h1>
                    <div className='mb-8'>
                        <ul className='flex  cust--font text-xs space-x-1 text-green-300 md:justify-end md:hidden'>
                            <li>Solidity</li>
                            <li>Smart Contract</li>
                            <li>React</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <a href='https://xelerondeployment.vercel.app'>
                        <button type='button' className='border p-2 border-green-300 hover:bg-slate-950 duration-200 rounded '>CHECK IT OUT! 👀</button>
                    </a>
                    

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MyProjects
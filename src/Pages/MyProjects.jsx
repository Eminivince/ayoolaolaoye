import React from 'react'
import Xeleron from '../Asset/Xeleron.jpeg'

const MyProjects = () => {
  return (
    <div>
        <div className='flex space-x-3 items-center my-14'>
            <h1 className='cust--font text-green-200'>03.</h1>
            <h1 className='md:text-3xl text-lg font-semibold'>Some Things I've Built</h1>
            <hr className='w-[60%]' />
        </div>

        <div className='relative'>
            <div className='flex w-[100%]'>
                <img src={Xeleron} alt='Xeleron' className='basis-1/2 w-[50%]' />
                <div className='basis-1/2  text-right flex flex-col justify-between'>
                    <div>
                        <h1 className='cust--font text-green-200'>Featured Project</h1>
                        <h1 className='md:text-3xl text-lg font-semibold'>Xeleron DApp</h1>
                    </div>
                    <div  >
                        <ul className='flex cust--font md:text-base text-xs space-x-2 text-green-200 justify-end'>
                            <li>Blockchain</li>
                            <li>Solidity</li>
                            <li>Smart Contract</li>
                            <li>React</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='w-[55%] bg-slate-800 p-5 rounded text-right absolute top-24 left-[45%]'>
                <h1>Xeleron is a groundbreaking Decentralized Finance hub that offers diverse range of products such as the ability to pool tokens, swap, farm, stake and launch tokens.</h1>
            </div>
        </div>
    </div>
  )
}

export default MyProjects
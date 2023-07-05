import React from 'react'
import Xeleron from '../Asset/Xeleron.jpeg'

const MyProjects = () => {
  return (
    <div>
        <div>
            <h1 className='cust--font text-green-200'>03.</h1>
            <h1>Some Things I've Built</h1>
            <hr className='w-24' />
        </div>

        <div>
            <div>
                <img src={Xeleron} alt='Xeleron' />
                <div>
                    <h1>Featured Project</h1>
                    <h1>Xeleron DApp</h1>
                </div>
                <div>
                    <ul>
                        <li>Blockchain</li>
                        <li>Solidity</li>
                        <li>Smart Contract</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione et tempora natus autem? Soluta iure voluptate repudiandae nemo tempora molestias, minima omnis aperiam et!</h1>
            </div>
        </div>
    </div>
  )
}

export default MyProjects
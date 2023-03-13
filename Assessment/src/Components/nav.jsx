import React from 'react'
import { useEffect,useState } from 'react';
import {Menu1LineIcon, CloseLineIcon} from '../assets/icons';

const nav = () => {

    const [open, setopen] = useState(true);

  return (
    <div className=" max-w-6xl mx-auto py-5">
        <div className=' relative grid grid-flow-row md:flex md:justify-between gap-10 items-center mx-5'>
            <div className="">
                <p className=' font-bold text-2xl text-yellow-500'>BOOKRY</p>
            </div>


            {open === true 
          ? <div className=" absolute top-0 right-4 md:hidden cursor-pointer" onClick={() => setopen(false)}>
            <Menu1LineIcon size={35} />
          </div>

          :<div className=" absolute top-0 right-4 md:hidden cursor-pointer" onClick={() => setopen(true)}>
            <CloseLineIcon size={43} />
          </div>

            }

            <div className={`md:flex ${!open ? 'block':'hidden'}`}>
                <ul className='md:flex gap-10 md:gap-0  cursor-pointer font-medium'>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500 hover:bg-yellow-500 hover:text-white hover:active:text-white rounded-lg'><a href="#">Home</a></li>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500 hover:bg-yellow-500 hover:text-white hover:active:text-white rounded-lg'><a href="#">About Us</a></li>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500 hover:bg-yellow-500 hover:text-white hover:active:text-white rounded-lg'><a href="#">Publish</a></li>
                    <li className=' px-5 py-3 mx-2 mb-5 md:mb-0 active:text-yellow-500 hover:bg-yellow-500 hover:text-white hover:active:text-white rounded-lg'><a href="#">Get Started</a></li>
                    <li className=' px-8 py-3 mx-2 active:text-yellow-500 bg-black text-white rounded-lg font-medium shadow-2xl inline-grid'><a href="#">Read</a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default nav
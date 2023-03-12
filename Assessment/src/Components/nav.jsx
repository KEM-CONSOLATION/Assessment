import React from 'react'
import { useEffect,useState } from 'react';
import {Menu1LineIcon, CloseLineIcon} from '../assets/icons';

const nav = () => {

    const [open, setopen] = useState(true);

  return (
    <div className=" max-w-6xl mx-auto py-5">
        <div className=' flex justify-between items-center'>
            <div className="">
                <p className=' font-bold text-2xl'>BOOKRY</p>
            </div>


            {open === true 
          ? <div className=" absolute top-10 right-4 md:hidden cursor-pointer" onClick={() => setopen(false)}>
            <Menu1LineIcon size={35} />
          </div>

          :<div className=" absolute top-10 right-4 md:hidden cursor-pointer" onClick={() => setopen(true)}>
            <CloseLineIcon size={45} />
          </div>

            }

            <div className="">
                <ul className=' flex'>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500'><a href="#">Home</a></li>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500'><a href="#">About Us</a></li>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500'><a href="#">Publish</a></li>
                    <li className=' px-5 py-3 mx-2 active:text-yellow-500'><a href="#">Get Started</a></li>
                    <li className=' px-8 py-3 mx-2 active:text-yellow-500 bg-black text-white rounded-lg font-semibold'><a href="#">Read</a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default nav
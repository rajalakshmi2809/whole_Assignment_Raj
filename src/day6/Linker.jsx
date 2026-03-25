import React from 'react'
import { CiSearch } from "react-icons/ci";

import { Link } from 'react-router-dom'
const Linker = () => {
  return (
    <>
    <div className=' bg-pink-300 flex justify-between items-center p-5 font-bold '>

    <div className=' flex items-center gap-10'>
     
        <h1 className=' italic  font-sans text-2xl mx-5 '>Dribble</h1>
     
      <div className=' flex items-center bg-gray-100 rounded-full px-4 py-2 '> 
        <input type ="text" placeholder=" What are You lookin for" className="bg-amber-300 "/>
     <select className='bg-red-200 text-black rounded-2xl p-1 gap-2'>
    <option value="" >Shots</option>
    <option value="" >Designers</option>
    <option value="" >Services</option>
     </select>
     <button className="bg-pink-500 p-5 rounded-full ml-2   text-white">
      <CiSearch />
      </button>
     
     </div> 
     

    </div>

    <div className='flex  mr-10 gap-10  font-bold'>
    <div>
    <Link to="/">Home</Link>
    </div>
    <div>
    <Link to="/about">About</Link>
    </div>
    <div>
     <Link to="/explore">Explore</Link>
    </div>
    <div>
     <Link to="/gethired">Gethired</Link>
    </div>
    <div>
    <Link to="/contact">Contact</Link>
    </div>
    </div>


    <div>
    <div className='flex mx-10 gap-7 font-bold'>
        <div>
        <h1>Signup</h1>
    </div>
    <div>
        <h1>Login</h1>
    </div>
   </div>
    </div>


    </div>
    <hr className='mb-10' />
    
    
    
    </>
  )
}

export default Linker
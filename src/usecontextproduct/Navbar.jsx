import React, { useContext } from 'react'
import { CartContext } from './CartContext'


const Navbar = () => {
    const {count} = useContext(CartContext)
  return (
    <>
    <div className=' bg-blue-800 p-4 justify-center text-center font-bold'>
    <h1>cart:{count}</h1>
    </div>
    
    <div>
        </div>
    </>
  )
}

export default Navbar


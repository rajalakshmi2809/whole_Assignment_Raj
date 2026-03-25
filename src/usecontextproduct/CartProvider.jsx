import  { useState } from 'react'
import { CartContext } from '../usecontextproduct/CartContext'

const CartProvider = ({children}) => {

    const [count , setCount] = useState(0);
  return (
    <>
    <CartContext.Provider  value={{count,setCount}}>
    {children}
    </CartContext.Provider>
    
    </>
  )
}

export default CartProvider
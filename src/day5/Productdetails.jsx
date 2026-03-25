import React from 'react'
import Productlist from './Productlist'

const Productdetails = () => {
   const product = [{id:1,productname:"Lenovo",price:50000},
    {id:2,productname:"Hp",price:80000},
    {id:3,productname:"Acer",price:60000}
   ]

  return (
    <div className='bg-red-400 p-10'>

   <h1 className='font-bold'>ProductList</h1>
   <Productlist  passdata = {product}/>
    </div>
  )
}

export default Productdetails
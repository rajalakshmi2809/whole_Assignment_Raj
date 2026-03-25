import React from 'react'

const Productlist = ({passdata}) => {

    
  return (
    <div>
   {passdata.map((product)=>(
      <div key = { product.id}>
        <h1>Productname:{product.productname}</h1>
        <h1>Price:{product.price}</h1>

      </div>






















   ))}


    </div>
  )
}

export default Productlist
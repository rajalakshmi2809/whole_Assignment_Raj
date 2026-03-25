import React from 'react'

const Variablerenering = () => {

    const Name = "Rajalakshmi";
    const age = 20
  return (
    <div className='bg-black text-white justify-around flex flex-col items-center  p-7'>
        <h1 className='bg-white text-black'>Variable Rendering</h1>
    <h1>Name:{Name}</h1>
    <h1>Age:{age}</h1>

    </div>
  )
}

export default Variablerenering
import React from 'react'

const Objectrendering = () => {

    const user = {

        name: "Raj",
        age: 20,
        city:"chennai"
    }
  return (
    <div   className='bg-black text-white justify-around flex flex-col items-center  p-7'>

        <h1 className='bg-white text-black'>Object Rendering</h1>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>city:{user.city}</h1>
    </div>
  )
}

export default Objectrendering

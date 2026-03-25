import React from 'react'

const Arrayofrendering = () => {
  
    const arr = ["Apple","Banana","Mango","Strawberry"]


  return (
    <div className='bg-black text-white justify-around flex flex-col items-center  p-7'>
    <h1 className='bg-white text-black'>Array of rendering</h1>
    <h1>Fruits</h1>
    {arr.map((ele,i)=>(
        <p key ={i}>{ele}</p>
    ))}

    </div>
  )
}

export default Arrayofrendering
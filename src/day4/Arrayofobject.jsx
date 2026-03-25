import React from 'react'

const Arrayofobject = () => {

    const student = [
        {id:1,name:"Raj",age:"20" },
     {id:2,name:"Lakshmi",age:"20" },
      {id:3,name:"Aarthi",age:"20" },
       {id:4,name:"Janani",age:"20" }]
  return (
    
    <div className='bg-black text-white justify-around flex flex-col items-center  p-7'>
     
     <h1 className='bg-white text-black'>Array of object</h1>

     {student.map((ele,i)=>
    
    <div key = {i+1} className=' flex gap-10 '>

    <h2>{ele.id}</h2>
    <h2>{ele.name}</h2>
    <h2>{ele.age}</h2>


    </div>)}
    </div>


  )
}

export default Arrayofobject
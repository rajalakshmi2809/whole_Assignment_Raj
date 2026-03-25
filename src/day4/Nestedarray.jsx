import React from 'react'

const Nestedarray = () => {

const data = {
    name:"Raj",
    age:20,
    Skill:["HTML","REACT","NODE","Java"]
}

  return (
    <div className='bg-black text-white justify-around flex flex-col items-center  p-7' >
    
        <h1 className='bg-white text-black'>Nested array</h1>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <p>Skill:</p>
         <ul >
            {data.Skill.map((Skill, index) => (
              <li key={index}>{Skill}</li>
            ))}
          </ul>


    </div>
  )
}

export default Nestedarray
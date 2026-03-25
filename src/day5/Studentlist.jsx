import React from 'react'

const Studentlist = ({studendata}) => {
  return (
    <>
    <div>
     {studendata.map((studendata)=>(
      <div key = {studendata.id}>
        <h1>Name:{studendata.name}</h1>
        <h1>Marks:{studendata.marks}</h1>
        <p>Results: {studendata.marks >= 40 ? "pass":"fail"}</p>

      </div>

     ))}

    </div>
    
    
    
    </>
  )
}

export default Studentlist
import React from 'react'
import Studentlist from './Studentlist';
const Studentdetails = () => {

    const student = [{id:1,name:"Raj",marks:75},
        {d:2,name:"Moni",marks:55},
        {d:3,name:"Sandhiya",marks:65}];
  return (
    <div className='bg-red-400 p-10'>
     <h1 className='font-bold'>Studet marks</h1>
     <Studentlist studendata = {student}></Studentlist>


    </div>
  )
}

export default Studentdetails
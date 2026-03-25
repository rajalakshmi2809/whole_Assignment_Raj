import React from 'react'
import Mainpage from '../day5/Mainpage'
import { useNavigate } from 'react-router-dom'

const Day5 = () => {
        const navigate = useNavigate()
    const handleclick5=()=>{
         navigate("/")
        }
  return (
    <>
    <div>

   <Mainpage/>
    <button onClick={handleclick5}>Assignement5</button>


    </div>
    
    
    </>
  )
}

export default Day5
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Counter from '../tasksday28/Counter'
import FetchData from '../tasksday28/FetchData'
import InputFocus from '../tasksday28/InputFocus'

const Day17 = () => {
    const navigate = useNavigate()
    const handleclick17=()=>{
         navigate("/")
        }
  return (
    <>
    
    <div className='bg-amber-300 p-7  gap-3'>
      <div className='bg-green-400 mb-4 p-4'>
        <h1 className='font-bold'>Counter</h1>
    <Counter/>
    </div>
    <div className='bg-red-400 mb-4  p-4 '>
      <h1 className='font-bold'>Fetch data</h1>
    <FetchData/>
    </div>
    <div className='bg-blue-400 p-4 '>
      <h1 className='font-bold '>Inputfocus</h1>
    <InputFocus/>
    </div>
    </div>
    <button onClick={handleclick17}>Go to home</button>
    
    </>
  )
}

export default Day17



import { useNavigate } from 'react-router-dom'
import FunctionalRendering from '../day4/FunctinalRendering'



const Day4 = () => {
    const navigate = useNavigate()
    const handleclick=()=>{
         navigate("/")
         
    }
  return (
    <>
    <FunctionalRendering />
     <button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>
    
    </>
  )
}

export default Day4

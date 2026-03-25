

import { useNavigate } from 'react-router-dom'
import FunctionalRendering from '../day4/FunctinalRendering'



const Day4 = () => {
    const navigate = useNavigate()
    const handleclick4=()=>{
         navigate("/")
         
    }
  return (
    <>
    <FunctionalRendering />
     <button onClick={handleclick4}>Go to Homepage</button>
    
    
    </>
  )
}

export default Day4
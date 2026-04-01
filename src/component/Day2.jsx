import Homepage from "../day2/Homepage"
import { useNavigate } from "react-router-dom"

const Day2 = () => {
     const navigate = useNavigate()
    const handleclick=()=>{
         navigate("/")
         
    }


  return (
    <>
    <div>
        
        <Homepage/> 
        <button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>
      
    </div>
    
    </>
  )
}

export default Day2

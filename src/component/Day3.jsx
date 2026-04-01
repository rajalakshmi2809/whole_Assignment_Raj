import Homepage from "../day3/Homepage"
import { useNavigate } from "react-router-dom"


const Day3 = () => {

    const navigate = useNavigate()
    const handleclick=()=>{
         navigate("/")
         
    }
  return (
    <>
    <Homepage/>
    <button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>
    
    </>
  )
}

export default Day3;
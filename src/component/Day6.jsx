import Mainpage from "../day6/Mainpage"
import { useNavigate } from "react-router-dom"


const Day6 = () => {
    const navigate = useNavigate()
    const handleclick=()=>{
         navigate("/")
        }
        
  return (
    <>
    <div>
    <Mainpage/>
    <button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>

    </div>
    </>
  )
}

export default Day6


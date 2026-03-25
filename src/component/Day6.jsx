import Mainpage from "../day6/Mainpage"
import { useNavigate } from "react-router-dom"


const Day6 = () => {
    const navigate = useNavigate()
    const handleclick6=()=>{
         navigate("/")
        }
        
  return (
    <>
    <div>
    <Mainpage/>
     <button onClick={handleclick6}>Assignement6</button>

    </div>
    </>
  )
}

export default Day6
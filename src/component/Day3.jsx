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
    <button onClick={handleclick}>Go to Homepage</button>
    
    </>
  )
}

export default Day3
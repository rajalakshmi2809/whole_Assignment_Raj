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
        <button onClick={handleclick} className="bg-red-500 border-2 rounded-2xl ml-500 p-10 " >Go to Homepage</button>
        <Homepage/> 
      
    </div>
    
    </>
  )
}

export default Day2
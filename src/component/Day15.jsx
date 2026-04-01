
import {   useNavigate } from "react-router-dom"
import TypingTracker from "../useref/TypingTracker"
import CountRef from "../useref/CountRef"
import Form from "../useref/Form"
import SearchForm from "../useref/SearchForm"



const Day15 = () => {
    const navigate = useNavigate()
    const handleclick=()=>{
         navigate("/")
        }
        
  return (
    <>
    <div className="bg-red-400 p-5  ">
        <h1 className="font-bold text-center"> USING USEREF</h1>
   <div className=" bg-blue-500 p-4 w-80 "> 
    <h1 className="font-bold">Task 1</h1>
    <TypingTracker/>

   </div>
   <div className="bg-amber-300 p-4 w-80">
    <h1 className="font-bold">Task 2</h1>
    <CountRef/>
   </div>
   <div className="bg-red-600 p-4 w-80 ">
     <h1 className="font-bold">Task 3</h1>
    <Form/>
   </div>
   <div className="bg-green-400 p-4 w-80">
    <h1 className="font-bold">Task 4</h1>
    <SearchForm/>
   </div>
   <button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>

    </div>
    </>
  )
}

export default Day15
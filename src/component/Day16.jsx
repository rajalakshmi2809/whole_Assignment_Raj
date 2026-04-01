
import { useNavigate } from 'react-router-dom'
import Register from '../localstorage/Register'
import Login from '../localstorage/Login'
import Mainpage from "../localstorage/Mainpage"


const Day16 = () => {
     const navigate = useNavigate()
    let  handleclick=()=>{
         navigate("/")
        }
  return (
<>
<div >
   <div className='bg-red-400 p-4 '>
    <h1 className='font-bold text-center'>Local Storge</h1>
    <h1 className='font-bold'>Task 1</h1>
    <Register/>
    </div>
    <div className='bg-red-400 p-4 '>
        <h1 className='font-bold'>Task 2</h1>
        <Login/>
    </div>
    <div className='bg-red-400 p-4 ' >
        <h1 className='font-bold'>Task 3</h1>
    
    <Mainpage/>
    </div>
   </div>


<button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>
</>
  )
}

export default Day16

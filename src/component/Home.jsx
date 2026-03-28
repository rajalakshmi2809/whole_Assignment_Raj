import { useNavigate } from "react-router-dom"



const Home = () => {
     const navigate = useNavigate()
    const handleclick2=()=>{
         navigate("/assignment2")
    }
    const handleclick3=()=>{
         navigate("/assignment3")
         
    }
    const handleclick4=()=>{
      navigate("/assignment4")
    }
    const handleclick5=()=>{
      navigate("/assignment5")
    }
    const handleclick6=()=>{
      navigate("/assignment6")
    }
    const handleclick7=()=>{
      navigate("/usecontext")
    }
     const handleclick15=()=>{
      navigate("/useref")
    }
     const handleclick16=()=>{
      navigate("/localstorage")
    }
  return (
    <>
    <div className="bg-green-400 p-3 h-500 text-center mb-100 ">
      <div >
        <h1 className="bg-black text-white rounded-2xl mb-20 p-5  ">Home page</h1>
        </div>
        <div className="flex flex-col   mb-5 gap-10 justify-center items-center">
        <button onClick={handleclick2} className="bg-red-500 rounded-2xl p-4   w-50  font-bold">Assignement2</button>
         <button onClick={handleclick3} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement3</button>
         <button onClick={handleclick4} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement4</button>
         <button onClick={handleclick5} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement5</button>
         <button onClick={handleclick6} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement6</button>
         <button onClick={handleclick7} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement14</button>
          <button onClick={handleclick15} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement15</button>
          <button onClick={handleclick16} className="bg-red-500 rounded-2xl p-4  w-50  font-bold">Assignement16</button>






         </div>
    
    
    </div>
    </>
  )
}

export default Home
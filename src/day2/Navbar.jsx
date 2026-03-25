
const Navbar=()=>{
    return(<>
    <h1 className="bg-green-400 justify-center flex items-center">Assignment 1</h1>
    <div className="flex items-center justify-between px-8 py-4 bg-black text-white shadow-md">
      <div className="w-32 ">
     <Logo/>
     </div>
          <div className="flex gap-10 text-sm font-medium">
            <div className="flex gap-10 text-sm font-medium">
                <a href="" className="hover:text-red-400 transition ">All</a>
                <a href="" className="hover:text-red-400 transition ">Shopping</a>
                <a href="" className="hover:text-red-400 transition ">Videos</a>
                <a href=""className="hover:text-red-400 transition ">Short videos</a>
                <a href=""className="hover:text-red-400 transition ">Forums</a>
          </div>
         </div >
         <div>
         <Button/>
         </div>
      </div>
    </>)
}
export default Navbar

const Button=()=>{

   return(<>
   
   <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition duration-300 shadow-md">Login</button>
   </>)



}

 export const Logo =()=>{

   return(<>
   <div >
       <img src="./images/spiderlogo.png" />
     </div>
   </>)
}

 
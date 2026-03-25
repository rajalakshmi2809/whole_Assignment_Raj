   import React from 'react'
 import Variablerenering from '../day4/Variablerenering'
 import Objectrendering from '../day4/Objectrendering'
 import Arrayofrendering from '../day4/Arrayofrendering'
 import Arrayofobject from '../day4/Arrayofobject'
 import Nestedarray from '../day4/Nestedarray'
  import logo from '../assets/images2/flw1.jpg'
  import yiolet from '../assets/images2/img22.avif'
  import rose from '../assets/images2/img23.avif'
  import red from '../assets/images2/img24.avif'

  const FunctionalRendering=()=>{
    return (
    <>
    <div  className="bg-amber-300 flex p-8  justify-between font-extrabold items-center text-2xl">
      <div>
     <img src={logo} alt="" className='rounded-4xl w-22' />
     </div>
    <div className="  p-2 flex gap-30 ">
       <a href="#">Home</a>
       <a href="#">About</a>
       <a href="#">Contact</a>
       <a href="#">Help</a>
       <a href="#">More</a>
            </div>
     <div>
      <button className="bg-white rounded p-3 text-black hover:bg-green-500 w-22">Login</button>
      </div>

     </div>
     <div>
 <div className='p-0  flex justify-center items-center '>

  <img  src={red} className=' items-center'/> 
 </div>

     </div>

     <div className="bg-red-400 p-10 h-100 flex flex-col justify-center items-center gap-8 font-bold  text-center  " >
    
       <h1 className="bg-white  rounded-2xl  p-2 border-0    gap-8">This is my Websites</h1>
       <p className="text-center p-3 text-2xl ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum quisquam cum cumque voluptatem exercitationem provident, labore aperiam similique voluptatum numquam? Voluptatum officia rem quidem suscipit possimus animi eveniet doloremque facilis, 
        accusantium laudantium mollitia culpa sint voluptates perspiciatis expedita aliquid?
       </p>
       <button className="bg-black rounded-2xl w-50 text-white p-5">click the button</button>
     </div>
   <div className="bg-pink-500 flex p-8 h-150 gap-40 justify-center items-center">
     <div>
       <img src={yiolet} className='h-100 w-100 ' />
       <p className='font-bold bg-black text-white rounded-2xl p-2 w-20 items-center justify-center text-center ml-40 mt-5'>Lily</p>
     </div>
     <div className='gap-20'>
       <img src={rose} className=' h-100 w-80'/>
       <p className='font-bold bg-black text-white rounded-2xl p-2  gap-10 w-20 items-center justify-center text-center ml-30 mt-5'>Lotus</p>
     </div>
  
     </div>

     <div className='bg-red-400  justify-around items-center p-10 flex flex-row'>
      
       <Variablerenering/>
       <Objectrendering/>
       <Arrayofrendering/>
       <Arrayofobject/>
       <Nestedarray/>     </div>
  

     </>
   )
 }
 export default FunctionalRendering


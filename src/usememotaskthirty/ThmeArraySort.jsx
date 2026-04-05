import React, { useState } from 'react'

const ThmeArraySort = () => {
   const [theme,setTheme] = useState(false)


 const themechange =()=>{
    setTheme(!theme)

 }


  return (



    <>
    
    <div className={theme ? "bg-black text-white  p-2 ":"bg-yellow-300 text-black p-2"}>

        <button   onClick={themechange} className='bg-red-400 rounded-2xl p-2  text-black font-bold'>Theme change</button>
    </div>
    
    
    
    
    </>
  )
}

export default ThmeArraySort

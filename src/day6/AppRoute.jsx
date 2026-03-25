import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../day6/Home'
import About from '../day6/About'
import Contact from '../day6/Contact'



const AppRoute = () => {
  return (
    <>
    <Routes>

   <Route  path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>

    

    </Routes>
    
    
    
    </>
  )
}

export default AppRoute
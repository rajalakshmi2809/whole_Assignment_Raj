import {Component} from 'react'
import Button from './Button'
import Logo from './Logo'

class Anchorpage extends Component{
    render(){
        return(<>
        <h1 className="bg-green-400 justify-center flex items-center">Assignment 2</h1>
        <div  className="flex items-center justify-between px-8 py-4 bg-amber-300 text-white shadow-md">
            <Logo/>
         <div className="flex gap-8 text-sm font-medium">
            <a href='#' className="hover:text-red-400 transition">Home</a>
            <a href='#' className="hover:text-red-400 transition">More</a>
            <a href='#' className="hover:text-red-400 transition">Apps</a>
            <a href='#' className="hover:text-red-400 transition">Wildlife</a>
            <a href='#' className="hover:text-red-400 transition">About</a>
            <a href='#' className="hover:text-red-400 transition">Contact</a>
         </div>
         <div><Button/>
         </div>
            
         </div>


    
        
        </>)
    }
}

export default Anchorpage
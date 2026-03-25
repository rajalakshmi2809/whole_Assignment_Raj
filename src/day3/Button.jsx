import { Component } from 'react'


class Button extends Component{
    render(){
    return(<>
    
    <div  className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-xl font-semibold shadow-md transition">
    
        <button className='btn'>Login</button>
    </div>
    
    
    
    </>)
    }
}
export default Button
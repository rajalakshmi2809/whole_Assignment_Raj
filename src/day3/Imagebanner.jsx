import { Component } from "react";

class Imagebanner extends Component{
    render(){
        return(<>
        
        <div className="bg-blue-200 p-10 flex justify-center">
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
     
    <div>
    
       <img src="./elephant/elephant.jpg" className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover"/>
    
    </div>
       
      <img src="./elephant/Lion.jpg " className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover" />


    <div>
       
       <img src="./elephant/tiger.jpg" alt="tiger" className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover"
/>
    </div>
    </div>
    </div>
        
        </>)
    }
}
export default Imagebanner
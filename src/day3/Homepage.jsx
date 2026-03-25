import { Component } from "react";

import Banner from "../day3/Banner";
import Imagebanner from "../day3/Imagebanner";
import Anchorpage from "./Anchorpage";

class Homepage extends Component{
    render(){
        return(<>
        
        <Anchorpage/>
         <Banner/>
         <Imagebanner/>
        
        </>)
    }
}
export default Homepage
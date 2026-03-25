import {Routes,Route} from 'react-router-dom'
import Home from '../component/Home'
import Day2 from '../component/Day2'
import Day3 from '../component/Day3'
import Day4 from '../component/Day4'
import Day5 from '../component/Day5'
import Day6 from '../component/Day6'
import Day14 from '../component/Day14'


const Approuter = () => {
  return (
    <>
    <Routes>
       <Route path ="/" element = {<Home/>}/>
        
              <Route path ="/assignment2" element ={<Day2/>} />
              <Route path ="/assignment3" element ={<Day3/>} />
              <Route path ="/assignment4" element ={<Day4/>} />
              <Route path ="/assignment5" element ={<Day5/>} />
              <Route path ="/assignment6" element ={<Day6/>} />
              <Route path ="/usecontext" element ={<Day14/>} />
      </Routes>
    
    </>
  )
}

export default Approuter
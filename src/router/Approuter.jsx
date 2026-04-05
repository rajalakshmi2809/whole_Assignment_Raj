// import {Routes,Route} from 'react-router-dom'
// import Home from '../component/Home'
// import Day2 from '../component/Day2'
// import Day3 from '../component/Day3'
// import Day4 from '../component/Day4'
// import Day5 from '../component/Day5'
// import Day6 from '../component/Day6'
// import Day14 from '../component/Day14'
// import Day15 from '../component/Day15'
// import Day16 from '../component/Day16'
// import Day17 from '../component/Day17'
// import Day18 from '../component/Day18'


// const Approuter = () => {
//   return (
//     <>
//     <Routes>
//        <Route path ="/" element = {<Home/>}/>
        
//               <Route path ="/assignment2" element ={<Day2/>} />
//               <Route path ="/assignment3" element ={<Day3/>} />
//               <Route path ="/assignment4" element ={<Day4/>} />
//               <Route path ="/assignment5" element ={<Day5/>} />
//               <Route path ="/assignment6" element ={<Day6/>} />
//               <Route path ="/usecontext" element ={<Day14/>} />
//                  <Route path ="/useref" element ={<Day15/>} />
//                   <Route path ="/localstorage" element ={<Day16/>} />
//                   <Route path ="/usestate" element ={<Day17/>} />
//                   <Route path ="/usememo" element ={<Day18/>} />
//       </Routes>
    
//     </>
//   )
// }

// export default Approuter
import { Routes, Route } from "react-router-dom";
import Homes from "../component/Homes";
import assignments from "../component/Assignments";

import Day2 from "../component/Day2";
import Day3 from "../component/Day3";
import Day4 from "../component/Day4";
import Day5 from "../component/Day5";
import Day6 from "../component/Day6";
import Day14 from "../component/Day14";
import Day15 from "../component/Day15";
import Day16 from "../component/Day16";
import Day17 from "../component/Day17";
import Day18 from "../component/Day18";
import Day7 from "../component/Day7";
import Day19 from "../component/Day19";
import Day20 from "../component/Day20";

// mapping object
const componentMap = {
  "/assignment2": <Day2 />,
  "/assignment3": <Day3 />,
  "/assignment4": <Day4 />,
  "/assignment5": <Day5 />,
  "/assignment6": <Day6 />,
   "/assignment7": <Day7 />,
  "/usecontext": <Day14 />,
  "/useref": <Day15 />,
  "/localstorage": <Day16 />,
  "/usestate": <Day17 />,
  "/usememo": <Day18 />,
   "/usememousecallback": <Day19 />,
    "/usereduce": <Day20 />,
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />

      {assignments.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={componentMap[item.path]}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
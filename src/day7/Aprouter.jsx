// import {Routes,Route} from 'react-router-dom'
// import Login from "../day7/Login"
// import Dashboardlayout from "../day7/Dashboardlayout";
// import Dashboardhome from "../day7/Dashboardhome";
// import Profile from "../day7/Profile";
// const Aprouter = () => {
//   return (
//     <div>
//        <Routes>

      
//        <Route path="/" element={<Login/>} />
//       <Route path="/dashboard" element={<Dashboardlayout/>}>
//         <Route  path="home" element={<Dashboardhome/>} />
//         <Route path="profile" element={<Profile/>} /> 
        
// </Route>

      

//     </Routes>
//     </div>
//   )
// }

// export default Aprouter
import { Routes, Route } from 'react-router-dom'
import Login from "./Login"
import Dashboardlayout from "./Dashboardlayout"
import Dashboardhome from "./Dashboardhome"
import Profile from "./Profile"

const Aprouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route index element={<Dashboardhome />} />   {/* ✅ default */}
        <Route path="home" element={<Dashboardhome />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Aprouter

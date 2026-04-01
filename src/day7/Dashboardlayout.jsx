
// import {Link, Outlet } from 'react-router-dom'
// import Dashboardhome from '../day7/Dashboardhome'
// import Profile from '../day7/Profile'
// const Dashboardlayout = () => {
//   return (
//     <>
//     <div className='bg-green-500 flex p-4 gap-7' >
    
//     <h1>Dashboardlayout</h1>
//     <div>
//     <Link to="/dashboard/home" >Home</Link>{"|"}
//     <Link to='/dashboard/profile'>Profile</Link>
//     <Outlet/>
//     </div>
    
    
//        <Dashboardhome/>
//       <Profile/> 
//     </div>
    
    
    
    
//     </>
//   )
// }

// export default Dashboardlayout

import { Link, Outlet } from 'react-router-dom'

const Dashboardlayout = () => {
  return (
    <>
      <div className='bg-green-500 flex p-4 gap-7'>
        <h1>Dashboardlayout</h1>

        <Link to="/dashboard/home">Home</Link>|
        <Link to="/dashboard/profile">Profile</Link>
      </div>

      {/* ✅ child pages render here */}
      <Outlet />
    </>
  )
}

export default Dashboardlayout
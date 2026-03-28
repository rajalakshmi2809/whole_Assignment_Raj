import {Routes,Route} from 'react-router-dom'
import LoginUser from './LoginUser'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'

const Mainpage = () => {
  return(

  <>
  <Routes>

   <Route path="/" element={<LoginUser/>}/>
   <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>

  </Routes>
  
  
  </>

  )
}

export default Mainpage

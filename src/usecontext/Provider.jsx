import { useState } from "react"
import { Userscontext } from "./Userscontext";


const Provider = ({children}) => {

    const [data,setdata] = useState({Name:"Rajalakshmi",Age:20});
  return (
    <>
    <Userscontext.Provider value = {{data,setdata}} >
     {children}
    </Userscontext.Provider>
    
    
    </>
  )
}

export default Provider
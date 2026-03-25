import React from 'react'
import Userlist from './Userlist';

const Usercontainer = () => {

    const user =[ 
        {id: 1,name:"Raj",age:20},
        {id:2,name:"Kavitha",age:21},
        {id:3,name:"Savitha",age:23}]
  return (
    <div className='bg-red-400 p-10'>
 <h1 className='font-bold '>User list</h1>
  <Userlist usedata = {user} />

    </div>
  )
}

export default Usercontainer
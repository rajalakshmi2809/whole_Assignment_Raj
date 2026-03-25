import React from 'react'

const UserList = ({usedata}) => {

  return (
    <div>
      
  {usedata.map((user)=>(

    <div  key = {user.id}>

        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>

    </div>
  ))}

    </div>
  )
}

export default UserList

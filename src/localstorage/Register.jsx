import React, { useState } from 'react'

const Register = () => {
   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   
   const handlesubmit = (e)=>{
    e.preventDefault();

    const usersdata = {
        name,
        email,
        password,
    };
    localStorage.setItem("user", JSON.stringify(usersdata));
    alert("user  Registred successfully")
   }


  return (

    <>
    <div>
        <h1>Register</h1>
        <form onSubmit={handlesubmit} className='flex flex-col w-50 gap-3 p-4'>
    <input  text="text" placeholder='Enter  your name' value={name} onChange={(e)=>setName(e.target.value)} className='font-bold bg-white  text-black'/>
    <input  text="email" placeholder='Enter  your email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='font-bold bg-white text-black' />
    <input  text="password" placeholder='Enter  your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='font-bold bg-white text-black' />
    <button type="submit" className='rounded-2xl bg-green-400 p-3'>Register</button>
    </form>
    </div>
    </>
  )
}

export default Register

import  { useState } from 'react'

const CrudForm = () => {
    console.log("CrudForm Rendered")

   const [formdata,setFormdata] = useState({name:"" ,email:"",phoneno:""})
   const [savedata,setSavedata] = useState (null)
   const handlechange =(e)=>{

    setFormdata({...formdata, [e.target.name]:e.target.value})
    
   }
   const handleclick = ()=> {
    setSavedata(formdata)

console.log(formdata)

   }



  return (
    <>
    <div>
    <input type='text' placeholder='Enter your name' name='name'  value = {formdata.name} onChange={handlechange}/>
    <input type='tel' placeholder='Enter your phoneno' name='phoneno'  value = {formdata.phoneno}onChange={handlechange}/>
    <input type='email' placeholder='Enter your email' name='email'  value = {formdata.email} onChange={handlechange}/>
    <button onClick={handleclick}>submit</button>
    {savedata && <div>
    <p>{savedata.name}</p>
        <p>{savedata.phoneno}</p>
            <p>{savedata.email}</p>
      </div>  }
    </div>
    
    
    </>
  )
}

export default CrudForm

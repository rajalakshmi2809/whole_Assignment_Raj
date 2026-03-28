import { useRef } from 'react'

const CountRef = () => {

    const countref = useRef(0)
    const handleclick = ()=>{
        countref.current +1
        console.log("Count:",countref.current)
    }

  return (
    <>
    <div>
        <h1>Using Countref not show on screen render then show console</h1>
    <button onClick={handleclick} className='bg-red-400 rounded-2xl p-2'>click count</button>
    </div>
    
    </>
  )
}

export default CountRef

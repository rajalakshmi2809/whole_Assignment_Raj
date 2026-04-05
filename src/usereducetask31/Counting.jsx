import { useReducer } from 'react'

const initialstate = {count:0}
const reducer = (state,action)=>{

    if(action.type === "INC"){
        console.log(state.count)
       return {count:state.count + 1}
    }
    if(action.type === "DEC"){
        
       return {count:state.count - 1}
    }

    if(action.type === "Reset"){
        
       return initialstate
    }
      
    if(action.type !== "INCREMENT_BY_VALUE"){
      return state + action.payload;
    }


}


const Counting = () => {

    const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <>
    <div className='bg-yellow-300 p-4'>
        <h1>Count: {state.count}</h1>
     <button onClick={()=>dispatch({type:"INC"})} className='bg-pink-500 p-3 ml-3 '>Increease</button>
     <button onClick={()=>dispatch({type:"DEC"})} className='bg-green-500 p-3 ml-3 '>Decrease</button>
     <button onClick={()=>dispatch({type:"Reset"})} className='bg-blue-500 p-3 ml-3 '>Reset</button>
          <button onClick={()=>dispatch({type:"INCREMENT_BY_VALUE",payload: 5} )} className=' bg-red-500 ml-3 p-3'>Increment_by_value</button>
     {/* <button></button> */}



    </div>
    
    
    </>
  )
}

export default Counting

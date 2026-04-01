import  { useMemo, useState } from 'react'

const Inputnumber = () => {

    const [number,setNumber] = useState(5);

    function heavySum(n){
        console.log("Calucalting...")
        let sum = 0;
        for(let i = 1; i<=n ; i++){
            for (let j = 0; j < 1000000; j++){}
             sum +=i;
        }
        return sum;

    }
    const result = useMemo(()=>heavySum(number) ,[number]);
    console.log(result)
  return (
    <>
    <div>
    <h1>Enter Number:</h1>
    <input type="number" value={number} onChange={(e)=>setNumber(number(e.target.value))} className='bg-black border-2 text-white'/>
    <h1>Sum: {result}</h1>
    <button onClick={()=> setNumber(number + 1)} className='bg-blue-700 p-3 rounded-2xl  '>Increase number</button>
    <button onClick={()=> setNumber(number - 1)} className='bg-blue-700 p-3 rounded-2xl '>decrease number</button>





    </div>
    
    
    
    </>
  )
}

export default Inputnumber

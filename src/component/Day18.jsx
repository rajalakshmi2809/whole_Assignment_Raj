import React from 'react'
import Inputnumber from '../usememo/Inputnumber'
import LargeArray from '../usememo/LargeArray'
import PrimeNumbers from '../usememo/PrimeNumbers'

const Day18 = () => {
  return (
    <>
    <div className='bg-yellow-300 p-7 '>
        <div className='bg-red-400 p-2'>
            <h1 className='font-bold'>Task 1</h1>
    <Inputnumber/>
    </div>
    <div className='bg-red-500 p-4 mt-2'>
      <h1 className='font-bold'>Task 2</h1>
      <LargeArray/>
    </div>
    <div className='bg-blue-900  p-5 mt-2'>
       <h1 className='font-bold'>Task 3</h1>
      <PrimeNumbers/>
    </div>
    </div>
    
    
    
    </>
  )
}

export default Day18

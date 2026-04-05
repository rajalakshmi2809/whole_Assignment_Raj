import React from 'react'
import ThmeArraySort from '../usememotaskthirty/ThmeArraySort'
import Crudform from '../usememotaskthirty/Crudform'
import Search from '../usememotaskthirty/Search'


const Day19 = () => {
  return (
    <>

    <div className='bg-pink-500 p-3'>
      <div className='font-bold'>USEMEMO AND USECALLBACK</div>
      <h1 className='font-bold'>Task 1</h1>
    <ThmeArraySort/>
    </div>
    <div className='bg-blue-700 p-4'>
      <h1 className='font-bold'>Task 2</h1>

    <Search/>
    </div>
    <div className='bg-red-400 p-4'>
    <Crudform/>
    </div>
    </>
  )
}

export default Day19

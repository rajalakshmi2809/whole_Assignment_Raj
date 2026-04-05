import React from 'react'
import ThmeArraySort from '../Usememotask30/ThmeArraySort'
import CrudForm from '../Usememotask30/Crudform'
import Search from '../Usememotask30/Search'


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
    <CrudForm/>
    </div>
    </>
  )
}

export default Day19

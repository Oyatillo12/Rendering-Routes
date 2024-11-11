import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Option1() {
  return (
    <div>
      <h2 className='text-center text-[25px] mt-[10px]'>Hi this is Option 1</h2>
      <div className='flex items-center justify-center space-x-10 mt-10'>
        <Link className='text-[20px]' to={'suboption-1'}>SubOption1</Link>
        <Link className='text-[20px]' to={'suboption-2'}>SubOption2</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Option1

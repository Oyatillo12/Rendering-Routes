import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1 className='text-center text-[25px] mb-10'>Welcome to the Home Page!</h1>
      <div className='flex items-center justify-center space-x-10 mt-10'>
        <Link className='text-[20px]' to={'option-1'}>Option1</Link>
        <Link className='text-[20px]' to={'option-2'}>Option2</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default HomePage

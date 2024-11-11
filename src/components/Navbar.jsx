import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='py-[20px] rounded-b-lg bg-slate-400 shadow-lg'>
                <ul className='flex items-center justify-center text-white space-x-10'>
                    <li className='font-bold text-xl'>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li  className='font-bold text-xl'>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </li>
                </ul>
    </header>
  )
}

export default Navbar

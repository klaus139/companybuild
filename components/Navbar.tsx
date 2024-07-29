import React from 'react'
import { NavigationMenuDemo } from './NavElemets'

const Navbar = () => {
  return (
    <div className='h-[80px] sticky shadow-sm bg-slate-300 px-8 w-full flex flex-row items-center  p-[20px] justify-between'>
        <div>
          LOGO
        </div>
        <div className='mr-[90px]'>
          <NavigationMenuDemo />
        </div>

    </div>
  )
}

export default Navbar
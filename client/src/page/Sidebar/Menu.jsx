import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


function Menu() {
  return (
    <div>
        {/* navbar */}
        <div className='w-100 bg-white p-10 text-center text-black mb-20 h-50 d-flex align-center justify-center'>
            Navbar
        </div>

        {/* sidebar */}
        <div className='d-flex align-center' >
            {/* left side */}
            <div className='sidebar-left'>
                <Sidebar />
            </div>

            {/* right side */}
            <div className='sidebar-right'>
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default Menu
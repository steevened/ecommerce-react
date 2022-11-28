import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar fixed z-10 bg-base-200 border-b'>
      <div className='container mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='btn rounded-none btn-ghost'>
            eCommerce
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/purchases'>Purchases</Link>
            </li>
            <li>
              <div>Cart</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

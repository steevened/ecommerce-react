import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

import { HiOutlineUser } from 'react-icons/hi'
import { BiPurchaseTag } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'

const Navbar = ({ cart, setCart, setModalShowed, modalShowed }) => {
  return (
    <div
      onClick={() => setModalShowed(false)}
      className='navbar fixed z-10 bg-base-200 border-b'
    >
      <div className='container mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='btn rounded-none btn-ghost'>
            eCommerce
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li
              className='text-xl tooltip tooltip-primary tooltip-bottom'
              data-tip='Login'
            >
              <Link to='/login'>
                <HiOutlineUser />
              </Link>
              {/* <div className='tooltip' data-tip='hello'>
                <button className='btn'>Hover me</button>
              </div> */}
            </li>
            <li
              className='text-xl tooltip tooltip-primary tooltip-bottom'
              data-tip='Purchases'
            >
              <Link to='/purchases'>
                <BiPurchaseTag />
              </Link>
            </li>
            <li
              className='text-xl tooltip tooltip-primary tooltip-bottom'
              data-tip='Cart'
              onClick={() => setCart(true)}
            >
              <div>
                <BsCart2 />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default Navbar

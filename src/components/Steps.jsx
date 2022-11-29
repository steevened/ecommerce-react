import React from 'react'
import { Link } from 'react-router-dom'

const Steps = ({ product }) => {
  return (
    <div className='text-sm breadcrumbs  my-12 '>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <p>{product?.title}</p>
        </li>
      </ul>
    </div>
  )
}

export default Steps

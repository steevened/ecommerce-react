import React from 'react'
import { VscListFilter } from 'react-icons/vsc'

const ShowFilter = ({ setModalShowed }) => {
  return (
    <div className='px-10 md:hidden py-5 inline-block'>
      <label htmlFor='modal' className='cursor-pointer'>
        <div className='flex items-center justify-center gap-3'>
          <span className='text-gray-500'>Filter</span>
          <div>
            <VscListFilter />
          </div>
        </div>
      </label>
      <input
        onChange={() => setModalShowed(true)}
        className='hidden'
        type='checkbox'
        id='modal'
      />
    </div>
  )
}

export default ShowFilter

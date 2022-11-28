import React from 'react'
import { filterHeadThunk } from '../store/slices/products.slice'

const SearchInput = ({ inputSearch, setInputSearch, dispatch }) => {
  return (
    <form className='input-group flex justify-center'>
      <input
        value={inputSearch}
        type='text'
        placeholder='Search by name...'
        onChange={(e) => setInputSearch(e.target.value)}
        className='input bg-base-300 overflow-hidden focus:outline-none'
      />
      <button
        onClick={() => dispatch(filterHeadThunk(inputSearch.toLowerCase()))}
        className='btn'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  )
}

export default SearchInput

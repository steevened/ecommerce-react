import React from 'react'
import { filterThunk, getProductsThunk } from '../store/slices/products.slice'
import { BiDownArrow } from 'react-icons/bi'

const CategoryFilter = ({
  categories,
  dispatch,
  setModalShowed,
  categoryShowed,
  setCategoryShowed,
}) => {
  return (
    <div className='mt-5'>
      <div
        onClick={() => {
          setCategoryShowed(!categoryShowed)
        }}
        className='text-left flex items-center justify-between cursor-pointer border-b-2 pb-2'
      >
        <h2>Category</h2>
        <div
          className={`${
            !categoryShowed ? 'rotate-180' : ''
          } transition-transform duration-500`}
        >
          <BiDownArrow />
        </div>
      </div>
      <div
        className={` ${
          categoryShowed ? 'hidden overflow-hidden' : ''
        } transition-all duration-500 `}
      >
        {categories.map((categorie) => (
          <div key={categorie.id} className={`flex `}>
            <button
              onClick={() => {
                dispatch(filterThunk(categorie.id))
                setModalShowed(false)
              }}
              className='btn btn-ghost rounded-none text-gray-500'
            >
              {categorie.name}
            </button>
          </div>
        ))}
        <div className='flex mt-5'>
          <button
            onClick={() => {
              dispatch(getProductsThunk())
              setModalShowed(false)
            }}
            className='btn btn-sm rounded-none text-base-100'
          >
            All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter

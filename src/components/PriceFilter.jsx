import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const PriceFilter = ({
  setMaxPrice,
  setMinPrice,
  priceShowed,
  setPriceShowed,
  maxPrice,
  minPrice,
}) => {
  return (
    <div>
      <div
        onClick={() => {
          setPriceShowed(!priceShowed)
        }}
        className='text-left flex items-center justify-between cursor-pointer border-b-2 pb-2'
      >
        <h2>Price</h2>
        <div
          className={`${
            !priceShowed ? 'rotate-180' : ''
          } transition-transform duration-500`}
        >
          <BiDownArrow />
        </div>
      </div>
      <div
        className={` ${
          priceShowed ? 'hidden overflow-hidden' : ''
        } transition-all duration-500 `}
      >
        <form className=''>
          <div className='flex flex-col gap-5 pt-5'>
            <div className='flex items-center gap-2 justify-between'>
              <span>From</span>
              <input
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className='border-2 py-1 focus:outline-none w-2/3'
                type='number'
                id='1'
              />
            </div>
            <div className='flex items-center justify-between'>
              <span>To</span>
              <input
                onChange={(e) => {
                  e.target.value <= 0
                    ? setMaxPrice(9999)
                    : setMaxPrice(Number(e.target.value))
                }}
                className='border-2 py-1 focus:outline-none w-2/3'
                type='number'
                id='2'
              />
            </div>
          </div>
          <div className='mt-5 flex'>
            <button
              onClick={() => {
                setMaxPrice(9999)
                setMinPrice(null)
              }}
              className='btn btn-sm rounded-none text-base-100'
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PriceFilter

import React, { useState } from 'react'
import { filterThunk } from '../store/slices/products.slice'

import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

const Filter = ({
  categories,
  setModalShowed,
  modalShowed,
  dispatch,
  setMinPrice,
  setMaxPrice,
  maxPrice,
  minPrice,
}) => {
  const [priceShowed, setPriceShowed] = useState(false)
  const [categoryShowed, setCategoryShowed] = useState(false)

  return (
    <div
      className={`fixed top-[65px] py-10 ${
        modalShowed ? 'right-0' : '-right-full'
      } bottom-0 md:left-0 md:border-r md:shadow-none max-w-[280px] bg-base-200 shadow-2xl w-3/4  z-10 flex flex-col  gap-3 transition-all ease-in-out duration-500 px-4`}
    >
      <PriceFilter
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        priceShowed={priceShowed}
        maxPrice={maxPrice}
        setPriceShowed={setPriceShowed}
        minPrice={minPrice}
      />
      <CategoryFilter
        categories={categories}
        dispatch={dispatch}
        setModalShowed={setModalShowed}
        setCategoryShowed={setCategoryShowed}
        categoryShowed={categoryShowed}
      />
    </div>
  )
}

export default Filter

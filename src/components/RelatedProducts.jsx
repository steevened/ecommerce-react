import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import { postCartThunk } from '../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const RelatedProducts = ({ relatedProducts, setQuantity }) => {
  const [idImg, setIdImg] = useState(null)
  const dispatch = useDispatch()

  const addtoCart = (id) => {
    const productBuyed = {
      id,
      quantity: 1,
    }
    // console.log(productBuyed)
    dispatch(postCartThunk(productBuyed))
  }

  return (
    <div className='mt-32'>
      <div className='text-center my-5'>
        <h2 className='text-3xl font-bold text-info'>Discover Similar Items</h2>
      </div>
      <ul className='text-left md:grid-cols-2 grid xl:grid-cols-3  mx-auto my-10 gap-5'>
        {relatedProducts.map((product) => (
          <div
            onClick={() => setQuantity(1)}
            className='border-2 border-base-300  w-full '
            key={product.id}
          >
            <Link
              to={`/products/${product.id}`}
              onMouseOver={() => {
                setIdImg(product.id)
              }}
              onMouseLeave={() => {
                setIdImg(null)
              }}
              className='flex items-center justify-center w-full h-64 relative overflow-hidden '
            >
              <img
                className={`absolute block object-contain w-5-6 h-5/6 transition-all duration-700 ${
                  idImg === product.id ? 'opacity-0' : ''
                }`}
                src={product.productImgs[0]}
                alt='product'
              />
              <img
                className={`absolute block object-contain  w-5-6 h-5/6  transition-all duration-700 ${
                  idImg !== product.id ? 'opacity-0' : ''
                }`}
                src={product.productImgs[1]}
                alt='product'
              />
            </Link>
            <div className='border-t-2 border-base-300 relative h-32'>
              <div className='px-2 py-3 flex flex-col justify-between'>
                <h2 className='text-lg'>{product?.title}</h2>
                <p className='text-gray-500'>Price</p>
                <p>{product?.price}</p>
              </div>
              <button
                onClick={() => addtoCart(product.id)}
                className='btn btn-ghost text-primary text-xl  grid place-content-center btn-circle absolute bottom-3 right-3 '
              >
                <GrCart />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default RelatedProducts

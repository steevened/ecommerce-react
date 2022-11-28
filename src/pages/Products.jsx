import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsThunk } from '../store/slices/products.slice'
import { Link } from 'react-router-dom'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Steps from '../components/Steps'
import RelatedProducts from '../components/RelatedProducts'

const Products = () => {
  const products = useSelector((state) => state.products)
  const { id } = useParams()
  const product = products.find((el) => el.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const [images, setImages] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const relatedProducts = products.filter(
    (el) => el.category.id === product.category.id
  )

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    setQuantity(quantity <= 1 ? 1 : quantity - 1)
  }

  console.log(product?.productImgs)

  return (
    <div className='pt-16  w-5/6 mx-auto'>
      <Steps product={product} />
      {/* start of product */}

      <div className='text-center text-xl flex flex-col md:flex-row gap-5 md:pt-16'>
        {/* start of gallery */}
        <div className='relative flex-1'>
          <div className=' w-5/6 h-full mx-auto overflow-hidden'>
            <ul
              className={`w-[300%] -translate-x-${
                images === 0 || images === 3 ? '0' : `${images}-3`
              } flex h-96  transition-all ease-in-out duration-700 `}
            >
              <li className='w-full  flex items-center justify-center'>
                <img
                  className='object-contain h-full'
                  src={product?.productImgs[0]}
                  alt='product'
                />
              </li>
              <li className='w-full flex items-center justify-center'>
                <img
                  className='object-contain h-full'
                  src={product?.productImgs[1]}
                  alt='product'
                />
              </li>
              <li className='w-full flex items-center justify-center'>
                <img
                  className='object-contain h-full'
                  src={product?.productImgs[2]}
                  alt='product'
                />
              </li>
            </ul>
            <div>
              <button
                onClick={() =>
                  setImages(
                    images <= 0 ? product?.productImgs.length - 1 : images - 1
                  )
                }
                className='btn btn-circle btn-focus top-[42.5%] left-2 absolute text-base-100 '
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div>
              <button
                onClick={() =>
                  setImages(
                    images === product?.productImgs.length - 1 ? 0 : images + 1
                  )
                }
                className='btn btn-circle btn-focus top-[42.5%] right-2 absolute text-base-100'
              >
                <AiOutlineArrowRight />
              </button>
            </div>
            <ul className='flex items-center justify-center gap-2 mt-2'>
              <li
                onClick={() => setImages(0)}
                className={`transition-all h-16 w-16 my-3 p-1 ${
                  images === 0 ? 'border-2 border-error rounded-md' : ''
                }`}
              >
                <img
                  className='object-contain h-full w-full cursor-pointer '
                  src={product?.productImgs[0]}
                  alt='product'
                />
              </li>
              <li
                onClick={() => setImages(1)}
                className={`transition-all h-16 w-16 my-3 p-1 ${
                  images === 1 ? 'border-2 border-error rounded-md' : ''
                }`}
              >
                <img
                  className='object-contain h-full w-full cursor-pointer '
                  src={product?.productImgs[1]}
                  alt='product'
                />
              </li>
              <li
                onClick={() => setImages(2)}
                className={`transition-all h-16 w-16 my-3 p-1 ${
                  images === 2 ? 'border-2 border-error rounded-md' : ''
                }`}
              >
                <img
                  className='object-contain h-full w-full cursor-pointer '
                  src={product?.productImgs[2]}
                  alt='product'
                />
              </li>
            </ul>
          </div>
        </div>
        {/* end of gallery */}

        {/* start of product info */}
        <div className='flex-1'>
          <div className='font-bold text-xl'>
            <h2>{product?.title}</h2>
          </div>

          <div className='flex flex-col mt-2'>
            <div className='flex justify-between md:order-2 mt-5 px-5'>
              <div className='flex justify-between w-full'>
                <div className='flex flex-col items-start justify-center'>
                  <h3 className='text-gray-500 text-base'>Price</h3>
                  <h3>$ {product?.price}</h3>
                </div>
                <div className='flex flex-col items-end gap-2 '>
                  <p className='text-gray-500 text-base'>Quantity</p>
                  <div className='flex'>
                    <button
                      disabled={quantity <= 1 ? true : false}
                      onClick={decrement}
                      className='btn btn-sm btn-ghost border-2 border-base-300 rounded-none'
                    >
                      -
                    </button>
                    <button className='btn btn-sm btn-ghost border-t-2 border-base-300 rounded-none'>
                      {quantity}
                    </button>
                    <button
                      onClick={increment}
                      className='btn btn-sm btn-ghost border-2 border-base-300 rounded-none'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:order-3 mt-3'>
              <button className='text-base-100 btn btn-block  btn-error rounded-none'>
                Add To Cart
              </button>
            </div>

            <div className='md:order-1 text-sm text-justify mt-10 text-gray-500'>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
        {/* end of product info */}
      </div>
      {/* end of product */}
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  )
}

export default Products

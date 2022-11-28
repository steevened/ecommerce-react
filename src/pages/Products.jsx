import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsThunk } from '../store/slices/products.slice'
import { Link } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

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

  console.log(images)

  return (
    <div className='pt-16 w-5/6 mx-auto'>
      <div className='text-sm breadcrumbs  mt-5 '>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <p>{product?.title}</p>
          </li>
        </ul>
      </div>
      <div className='text-center text-xl'>
        <div className='border-2 border-red-600 relative w-5/6 h-96 mx-auto'>
          <div className='grid place-content-center mt-10 w-3/4 mx-auto'>
            <img
              className='h-full object-contain'
              src={product?.productImgs[images]}
              alt='product'
            />
          </div>
          <div>
            <button
              onClick={() => setImages(images <= 0 ? 0 : images - 1)}
              className='btn btn-circle btn-focus top-[42.5%] -left-6 absolute text-base-100'
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                setImages(
                  images === product?.productImgs.length - 1
                    ? product?.productImgs.length - 1
                    : images + 1
                )
              }
              className='btn btn-circle btn-focus top-[42.5%] -right-6 absolute text-base-100'
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>

        <div className='font-bold text-xl'>
          <h2>{product?.title}</h2>
        </div>
        <div className='flex justify-between  mt-5 px-5'>
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
        <div className='mt-10'>
          <button className='text-base-100 btn btn-block  btn-error rounded-none'>
            Add To Cart
          </button>
          <div className='text-sm text-justify mt-10 text-gray-500'>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
      <ul className='grid grid-cols-3 mt-10'>
        {relatedProducts.map((related) => (
          <Link to={`/products/${related.id}`} key={related.id}>
            <h2 className='text-center my-10'>{related?.title}</h2>
            <img src={related.productImgs[0]} alt='' />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Products

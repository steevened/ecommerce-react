import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../store/slices/cart.slice'
import { TfiTrash } from 'react-icons/tfi'

const Cart = ({ cart }) => {
  const cartProducts = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalPrice = () => {
    let total = 0
    cartProducts.forEach((product) => {
      total += Number(product.price)
    })

    return total
  }

  // console.log(totalPrice())

  return (
    <div
      className={`fixed top-[65px] pt-10 ${
        cart ? 'right-0' : '-right-full'
      } bottom-0  max-w-[320px] bg-base-200 shadow-2xl w-3/4  z-10 flex flex-col  gap-3 transition-all ease-in-out duration-500 `}
    >
      <h1 className='text-xl'>Your Cart</h1>

      <div className='text-left pb-28 mt-3 flex flex-col gap-10 overflow-auto h-full'>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className='border-b px-3 pb-2 flex flex-col gap-1'
          >
            <div className='flex justify-between'>
              <p className='text-[10px] text-gray-500'>{product.brand}</p>
              <div className='text-error cursor-pointer'>
                <TfiTrash />
              </div>
            </div>
            <div>
              <h2 className='text-[12px] font-bold'>{product.title}</h2>
            </div>
            <div className='flex justify-between items-center'>
              <div className='border border-base-300 w-fit px-5'>
                <p>{product.productsInCart.quantity}</p>
              </div>
              <div>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-base-200 flex justify-between absolute border-t-2 pb-10 pt-2 px-10  w-full right-0 bottom-0'>
        <p className='text-gray-500 text-sm'>Total: </p>
        <p> ${totalPrice()}</p>
      </div>
    </div>
  )
}

export default Cart

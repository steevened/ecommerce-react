import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkoutThunk,
  deleteItemThunk,
  getCartThunk,
} from '../store/slices/cart.slice'
import { TfiTrash } from 'react-icons/tfi'

const Cart = ({ cart, setCart }) => {
  const cartProducts = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalPrice = () => {
    let total = 0
    cartProducts.forEach((product) => {
      total += Number(product.price) * Number(product.productsInCart.quantity)
    })

    return total
  }

  // console.log(cartProducts.length)

  return (
    <div
      className={`fixed top-[65px] pt-10 ${
        cart ? 'right-0' : '-right-full'
      } bottom-0  max-w-[320px] bg-base-200 shadow-2xl w-3/4  z-10 flex flex-col  gap-3 transition-all ease-in-out duration-500 `}
    >
      <h1 className='text-xl'>Your Cart</h1>

      <div className='text-left pb-28 mt-3 flex flex-col gap-10 overflow-auto h-full w-full'>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className='border-b px-3 pb-2 flex flex-col gap-1'
          >
            <div className='flex justify-between'>
              <p className='text-[10px] text-gray-500'>{product.brand}</p>
              <div
                onClick={() => dispatch(deleteItemThunk(product.id))}
                className='text-error cursor-pointer'
              >
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
                <p>
                  $
                  {Number(product.price) *
                    Number(product.productsInCart.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-base-200   absolute border-t-2 pb-10 pt-2 px-10  w-full right-0 bottom-0'>
        <div className='flex justify-between'>
          <p className='text-gray-500 text-sm'>Total: </p>
          <p> ${totalPrice()}</p>
        </div>

        <div className='mt-2'>
          <button
            disabled={cartProducts.length <= 0 ? true : false}
            onClick={() => {
              dispatch(checkoutThunk())
              setCart(false)
            }}
            className='btn btn-base text-base-100 btn-block rounded-none'
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart

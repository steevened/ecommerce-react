import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import Steps from '../components/Steps'
import { Link } from 'react-router-dom'

const Purchases = () => {
  const dispatch = useDispatch()

  const purchases = useSelector((state) => state.purchases)

  console.log(purchases[0]?.cart?.products)

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <div className='pt-20 container mx-auto px-5'>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <p>Purchases</p>
          </li>
        </ul>
      </div>
      <h1 className='text-center text-4xl py-4'>My purchases</h1>
      <ul className='flex flex-col gap-10 mt-10'>
        {purchases?.map((purchase) => (
          <li
            className='border w-full md:w-3/4 mx-auto px-2 border-base-300'
            key={purchase.id}
          >
            <h2 className='py-2 border-b-2'>Date</h2>
            {purchase?.cart?.products?.map((product) => (
              <div className='py-10  w-full md:w-3/4 mx-auto'>
                <Link key={product?.id} to={`/products/${product?.id}`}>
                  <div className='flex justify-between items-center gap-5'>
                    <div className='flex-1'>
                      <p className='text-sm font-bold'>{product.title}</p>
                    </div>
                    <div className='flex-[0.5]'>
                      <p>{product.productsInCart.quantity}</p>
                    </div>
                    <div className='flex-[0.5]'>
                      <p className='font-bold'>${Number(product.price)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Purchases

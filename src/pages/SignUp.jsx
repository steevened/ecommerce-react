import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUsersThunk } from '../store/slices/users.slice'

const SignUp = ({ setCart }) => {
  const { handleSubmit, register } = useForm()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const navigate = useNavigate()

  const submit = (data) => {
    dispatch(postUsersThunk(data))
    navigate('/login')
  }

  // console.log(register)

  return (
    <div
      onClick={() => setCart(false)}
      className='h-full min-h-screen transition-all duration-200 flex items-center justify-center overflow-auto pt-12'
    >
      <div className='border py-5 flex flex-col bg-base-200 shadow-xl w-5/6 max-w-xs mx-auto'>
        <h1 className='text-center text-4xl pb-4'>Sign Up</h1>
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col gap-3 w-5/6 mx-auto'
        >
          <div>
            <label htmlFor='first-name'>
              First Name <span className='text-error'>*</span>
            </label>
            <input
              className='input input-bordered rounded-none focus:outline-none w-full input-sm'
              type='text'
              id='first-name'
              required
              {...register('firstName')}
            />
          </div>
          <div>
            <label htmlFor='last-name'>
              Last Name <span className='text-error'>*</span>
            </label>
            <input
              className='input input-bordered rounded-none focus:outline-none w-full input-sm'
              type='text'
              id='last-name'
              required
              {...register('lastName')}
            />
          </div>
          <div>
            <label htmlFor='email'>
              Email <span className='text-error'>*</span>
            </label>
            <input
              className='input input-bordered rounded-none focus:outline-none w-full input-sm'
              type='email'
              id='email'
              required
              {...register('email')}
            />
          </div>
          <div>
            <label htmlFor='password'>
              Password <span className='text-error'>*</span>
            </label>
            <input
              className='input input-bordered rounded-none focus:outline-none w-full input-sm'
              type='password'
              id='password'
              required
              {...register('password')}
            />
          </div>
          <div>
            <label htmlFor='tel'>Phone Number</label>
            <input
              className='input input-bordered rounded-none focus:outline-none w-full input-sm'
              type='tel'
              id='tel'
              pattern='[0-9]{10}'
              placeholder='1234567890'
              {...register('phone')}
              required
              min={10}
              max={10}
            />
          </div>
          <div>
            <button className='btn btn-block  rounded-none text-base-100'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

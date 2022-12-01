import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import user from '../assets/user-svgrepo-com.svg'

const Login = ({ cart, setCart }) => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false)
  const [isToken, setIsToken] = useState(tokens() ? true : false)

  const navigate = useNavigate()

  const submit = (data) => {
    // console.log(data)
    axios
      .post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token)
        setIsToken(true)
        console.log(res.data.data)
        navigate('/')
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError(true)
        }
      })
  }

  function tokens() {
    let item = localStorage.getItem('token')
    return item
  }

  // let tokens = localStorage.getItem('token')

  const logOut = () => {
    localStorage.removeItem('token')
    setIsToken(false)
  }

  // console.log(tokens())

  return (
    <div onClick={() => setCart(false)}>
      {!isToken ? (
        <div className='h-screen '>
          <div
            onClick={() => setError(false)}
            className={`${
              error ? 'blur-[2px]' : ''
            } h-full transition-all duration-200`}
          >
            <h1 className='text-center text-4xl py-24'>Login</h1>
            <div className='w-fit mx-auto px-5 py-3 mb-2 text-center bg-base-300'>
              <p>max@gmail.com</p>
              <p>pass1234</p>
            </div>

            <form
              onSubmit={handleSubmit(submit)}
              className='grid place-content-center'
            >
              <div className='flex flex-col gap-5'>
                <input
                  {...register('email')}
                  type='email'
                  className='input bg-base-300 rounded-none'
                  placeholder='Email...'
                />
                <input
                  {...register('password')}
                  type='password'
                  className='input bg-base-300 rounded-none'
                  placeholder='Password...'
                />
                <button className='btn rounded-none  w-1/2 mx-auto text-base-100'>
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div
            className={`${
              error ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }transition-all duration-200 alert bg-base-200  shadow-lg w-3/4 md:w-2/3 lg:w-2/4 mx-auto absolute -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2`}
          >
            <div>
              <div className='cursor-pointer' onClick={() => setError(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current flex-shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>

              <span>User not found, please use the provided below</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 card card-side bg-base-200 shadow-xl w-5/6 max-w-xs  mx-auto px-2'>
          <figure className='w-20 aspect-auto'>
            <img src={user} alt='user' />
          </figure>
          <div className='card-body flex flex-col items-end'>
            <div className='pr-1 text-lg font-bold'>
              <p>Max Rangel</p>
            </div>
            <div className='card-actions justify-end'>
              <button
                onClick={logOut}
                className='btn btn-base rounded-none btn-sm shadow-lg text-base-100'
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login

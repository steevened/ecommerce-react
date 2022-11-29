import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data)
    axios
      .post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then((res) => {
        navigate('/')
        console.log(res)
        localStorage.setItem('token', res.data.data.token)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert('User not found')
        } else {
          console.log(error.response.data)
        }
      })
  }

  return (
    <div className=''>
      <h1 className='text-center text-4xl py-16'>Login</h1>
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
          <button className='btn rounded-none  w-1/2 mx-auto'>Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login

import React from 'react'

const Login = () => {
  return (
    <div className=''>
      <h1 className='text-center text-4xl py-16'>Login</h1>
      <form className='grid place-content-center'>
        <div className='flex flex-col gap-5'>
          <input
            type='email'
            className='input bg-base-300 rounded-none'
            placeholder='Email...'
          />
          <input
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

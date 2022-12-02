import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='footer fixed bottom-0 footer-center md:justify-end  py-4 px-10 gap-3 bg-base-200 border-t text-base-content'>
      <div className=' text-base'>
        <p>Copyright © {year} - All right reserved by Steven Alvarado.</p>
      </div>
      <div className='flex w-1/3 justify-center gap-5 text-3xl mx-auto'>
        <a href='https://github.com/steevened' target='_blank'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/steevened/' target='_blank'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer

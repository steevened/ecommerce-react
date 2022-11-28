import React from 'react'
import { Waveform } from '@uiball/loaders'

const Loading = () => {
  return (
    <div className='fixed z-50 inset-0 h-full min-h-screen grid place-content-center bg-base-300/95 backdrop-blur-sm'>
      <Waveform size={40} lineWeight={3.5} speed={1} color='gray' />
    </div>
  )
}

export default Loading

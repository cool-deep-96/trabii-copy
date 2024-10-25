import React from 'react'
import smile from '../../assets/for_business_owners/smile.png'

const Short = () => {
  return (
    <div className='w-full flex justify-center bg-black'>
        <div className='relative max-w-[355px] w-full lg:max-w-screen-lg px-5 pt-10 lg:pt-20 lg:pl-40 pb-32  flex items-start  '>
            <img src={smile} alt="smile.png" className='absolute h-[40%] lg:h-[65%]  w-auto opacity-30 bottom-40 lg:bottom-24 right-5' />
            <p className='relative lg:w-[50%] text-3xl lg:text-4xl font-bold text-white'>At <span className='text-yellow-300'>TraBii</span>, we believe in simplicity and fairness when it comes to pricing. Our transparent pricing model ensures that you know exactly what to expect.
            </p>
        </div>

    </div>
  )
}

export default Short
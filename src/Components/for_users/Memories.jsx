import React from 'react'
import memories1 from '../../assets/for_user/memories_1.png'
import memories2 from '../../assets/for_user/memories_2.png'
import memories3 from '../../assets/for_user/memories_3.png'

const Memories = () => {
  return (
    <div className='bg-black flex justify-center'>
        <div className='relative max-w-[355px] lg:max-w-screen-xl flex flex-col lg:flex-row gap-3 lg:gap-0'>
            <p className='absolute text-5xl lg:text-9xl uppercase text-white top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>m<span className='text-yellow-300'>e</span>mor<span className='text-yellow-300'>i</span>es</p>
            <img src={memories1} alt="memories_1.png" className='p-1'/>
            <img src={memories2} alt="memories_2.png" />
            <img src={memories3} alt="memories_3.png" className='p-1'/>
        </div>
    </div>
  )
}

export default Memories
import React from 'react'
import navbarLogo from '../../assets/logo.png'
import linkedInSvg from '../../assets/svg/linkedin.svg'
import instagramSvg from '../../assets/svg/instagram.svg'

const Footer = () => {
    return (
        <div className='bg-black/90 flex justify-center'>
            <div className='lg:max-w-screen-xl max-w-[355px] py-20 px-5 lg:px-20'>
                <p className='text-4xl lg:hidden font-bold text-gray-400 text-center mb-10 whitespace-nowrap'>Get in touch
                </p>
                <div className='flex flex-row gap-10 lg:gap-0  justify-between items-center'>
                    <div className='text-white flex flex-col items-start gap-5'>
                        <p className='text-6xl hidden lg:flex font-bold text-gray-400 whitespace-nowrap'>Get in touch
                        </p>
                        <div className='flex flex-col gap-5  justify-between lg:justify-start '>
                            <div className='flex flex-col gap-0'>
                                <div className='self-end lg:hidden'>
                                    <img src={navbarLogo} className='w-28 h-auto' alt='navbarLogo' ></img>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <button className='rounded-full bg-blue-500 font-bold text-sm  py-3 lg:py-4 px-5 whitespace-nowrap lg:px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out'>Contact Us</button>
                                    <button className='rounded-full bg-blue-500 font-bold text-sm  py-3 lg:py-4 px-5 whitespace-nowrap lg:px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out'>Help</button>
                                </div>
                            </div>
                            <div className='flex w-full lg:justify-around lg:px-5 gap-5'>
                                <img src={linkedInSvg} className='w-4 lg:w-5 h-auto' alt='navbarLogo' ></img>
                                <img src={instagramSvg} className='w-4 lg:w-5 h-auto' alt='navbarLogo' ></img>
                                <img src={linkedInSvg} className='w-4 lg:w-5 h-auto' alt='navbarLogo' ></img>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:flex self-end'>

                        <img src={navbarLogo} className='w-28 h-auto' alt='navbarLogo' ></img>
                    </div>

                    <div className='flex flex-col gap-10 '>
                        <div className='flex flex-col gap-2 text-right'>
                            <p className=' text-xl font-bold text-gray-400 capitalize'>company</p>
                            <p className='uppercase text-white font-semibold text-lg lg:whitespace-nowrap'> TRABII ENTERTAINMENT PRIVATE LIMITED</p>
                            <p className=' text-white font-semibold  text-lg  lg:whitespace-nowrap'>IIT Delhi, Hauz Khas, New Delhi, Delhi </p>
                            <p className=' text-white font-semibold  text-lg lg:whitespace-nowrap'>110016 </p>

                        </div>
                        <div className='flex flex-col gap-2 text-right'>
                            <p className=' text-xl font-bold text-gray-400'>Contacts</p>
                            <p className=' text-white font-semibold text-lg lg:whitespace-nowrap'> +91-99718 55077</p>
                            <p className='text-white font-semibold  text-lg lg:whitespace-nowrap'>support@trabii.com</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
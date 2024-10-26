
import { useEffect } from 'react';
import memories1 from '../../assets/for_user/memories_1.png'
import memories2 from '../../assets/for_user/memories_2.png'
import memories3 from '../../assets/for_user/memories_3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Memories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className='bg-black flex justify-center'>
        <div className='relative max-w-[355px] lg:max-w-screen-xl flex flex-col lg:flex-row gap-3 lg:gap-0'>
            <p className='absolute z-10 text-5xl lg:text-9xl uppercase text-white top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>m<span className='text-yellow-300'>e</span>mor<span className='text-yellow-300'>i</span>es</p>
            <img data-aos="fade-up" src={memories1} alt="memories_1.png" className='p-1'/>
            <img  data-aos="fade-up" src={memories2} alt="memories_2.png" />
            <img data-aos="fade-up" src={memories3} alt="memories_3.png" className='p-1'/>
        </div>
    </div>
  )
}

export default Memories
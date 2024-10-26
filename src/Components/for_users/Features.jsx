import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const features = [
    {
        title: 'Personalized Curation',
        description: `TraBii's cutting-edge AI technology meticulously curates a personalized feed of exclusive events tailored to your refined tastes, location, and preferences`
    },
    {
        title: 'Discover Your Passion',
        description: `Discover a world of events that match your interests with TraBii. Never miss out on experiences that excite you.`
    },
    {
        title: 'Card Feature',
        description: `Experience the simplicity of sharing and booking events with our exclusive "Card" feature. This intuitive system enables effortless event discovery and participation`
    },
]

const Features = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in ms
          offset: 120,     // Offset (in px) from the original trigger point
          easing: 'ease',  // Easing animation type
          once: true       // Whether animation should happen only once while scrolling down
        });
      }, []);
    return (
        <div class="relative">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/for_user_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='relative z-[1] flex justify-center bg-black/20 '>
                <div class=" flex flex-col lg:flex-row gap-10 items-center lg:items-start lg:justify-between justify-center h-full max-w-[350px] lg:max-w-screen-xl text-white py-10 px-5 lg:px-20">
                    {
                        features.map((feature, index) => {
                            return (
                                <div data-aos="fade-up" className='flex flex-col text-center gap-10 lg:w-[25%]' key={index}>
                                    <p className='text-lg font-bold text-yellow-300 lg:text-3xl'>{feature.title}</p>
                                    <p className='font-bold lg:text-2xl'>{feature.description}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features
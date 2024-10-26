
import smile from "../../assets/for_business_owners/smile.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Short = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="relative max-w-[355px] w-full lg:max-w-screen-lg px-5 pt-10 lg:pt-20 lg:pl-40 pb-32  flex items-start  ">
        <img

          src={smile}
          alt="smile.png"
          className="absolute h-[40%] lg:h-[65%]  w-auto opacity-10 bottom-40 lg:bottom-24 right-5"
        />
        <p data-aos="fade-up" className="relative lg:w-[50%] text-3xl lg:text-4xl font-bold text-white">
          At <span className="text-yellow-300">TraBii</span>, we believe in
          simplicity and fairness when it comes to pricing. Our transparent
          pricing model ensures that you know exactly what to expect.
        </p>
      </div>
    </div>
  );
};

export default Short;

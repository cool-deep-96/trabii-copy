
import smartPhone from "../../assets/for_business_owners/smart_phone1.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const CreateHost = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="flex justify-center w-full bg-black">
      <div className="max-w-[355px] lg:max-w-screen-xl px-10 py-10 lg:py-16 lg:px-40 flex flex-col lg:flex-row-reverse gap-5 lg:gap-36 items-center lg:justify-between ">
        <p data-aos="fade-up" className="font-bold text-white text-[1.8rem] lg:text-4xl text-center mx-5">
          Create, host, manage, and accept payments for your Social and
          Recreational Events effortlessly.
        </p>
        <img
        data-aos="fade-up"
          src={smartPhone}
          alt="smart_phone1.png"
          className="w-[65%] lg:w-[30%]"
        />
      </div>
    </div>
  );
};

export default CreateHost;

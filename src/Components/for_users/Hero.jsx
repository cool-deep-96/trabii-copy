import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 120, // Offset (in px) from the original trigger point
      easing: "ease", // Easing animation type
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="flex justify-center bg-black">
      <div className="max-w-[355px] w-full lg:max-w-screen-xl py-10 lg:py-20 px-5 lg:px-20 lg:pt-32 flex flex-col lg:flex-row  gap-16 lg:gap-32 lg:justify-between  text-white font-bold">
        <div data-aos="fade-up" className="w-full flex flex-col gap-5 lg:gap-10 ">
          <p className="text-yellow-300 text-xl lg:text-4xl">
            AI-Powered Personalization
          </p>
          <p className="text-xl lg:text-4xl">Secure Payment Integration</p>
          <p className="text-yellow-300 text-xl lg:text-4xl">
            Interactive Event Cards
          </p>
        </div>
        <div data-aos="fade-up" className="w-full flex flex-col gap-5 lg:gap-10">
          <p className="text-yellow-300 text-xl lg:text-4xl">
            Multimedia Storytelling
          </p>
          <p className="text-xl lg:text-4xl">Exclusive Group Engagement</p>
          <p className="text-yellow-300 text-xl lg:text-4xl">
            Seamless Expense Sharing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

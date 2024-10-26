import smartPhone from "../../assets/for_user/smart_phone.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 120, // Offset (in px) from the original trigger point
      easing: "ease", // Easing animation type
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex justify-center bg-black/60">
      <div className="max-w-[355px] lg:max-w-screen-xl flex flex-col-reverse gap-10 items-center lg:items-end lg:justify-between lg:flex-row px-5 py-10 lg:pl-40 lg:pr-20 lg:py-20">
        <div data-aos="fade-up" className="text-gray-300 text-[0.9rem] lg:text-4xl font-extrabold lg:font-bold text-left lg:w-[55%] pb-5 lg:pb-20">
          <p
            data-aos="fade-up"
            className="text-yellow-300 text-3xl lg:text-5xl font-bold pb-5"
          >
            Why Us?
            <br />
          </p>{" "}
          <span className="text-yellow-300">TraBii</span> is your guide to
          amazing events. Our platform lets you explore events, connect with
          others, and manage transactions easily. Whether planning a weekend
          getaway or enjoying a workshop, TraBii helps turn your plans into
          special moments.
        </div>
        <img
          data-aos="fade-up"
          src={smartPhone}
          alt="smart_phone.png"
          className="w-[70%] lg:w-[30%] h-auto"
        />
      </div>
    </div>
  );
};

export default WhyUs;

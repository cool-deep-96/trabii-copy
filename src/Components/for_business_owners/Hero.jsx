import React from "react";
import smartPhone from "../../assets/for_business_owners/smart_phone.png";

const Hero = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div className="lg:max-w-screen-xl max-w-[355px] px-5 lg:px-44 py-10 flex flex-col lg:flex-row gap-5 lg:gap-32 lg:justify-center items-center">
        <p className="text-2xl lg:text-4xl font-semibold lg:font-bold text-white lg:w-[55%]">
          Meet <span className="text-yellow-300">Trabii</span>, your personal
          social and recreational wizard! With AI magic at your fingertips, let
          the adventure begin!
        </p>
        <img
          src={smartPhone}
          alt="smart_phone.png"
          className="w-[65%] lg:w-[25%]"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center bg-black">
      <div className="w-[355px] lg:w-fit lg:max-w-screen-xl py-10 lg:py-20 px-5 lg:px-20 lg:pt-32 flex flex-col lg:flex-row  gap-16 lg:gap-32 lg:justify-between text-xl lg:text-4xl text-white font-bold">
        <div className="w-full flex flex-col gap-5 lg:gap-10">
          <p className="text-yellow-300">AI-Powered Personalization</p>
          <p>Secure Payment Integration</p>
          <p className="text-yellow-300">Interactive Event Cards</p>
        </div>
        <div className="w-full flex flex-col gap-5 lg:gap-10">
          <p className="text-yellow-300">Multimedia Storytelling</p>
          <p>Exclusive Group Engagement</p>
          <p className="text-yellow-300">Seamless Expense Sharing</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

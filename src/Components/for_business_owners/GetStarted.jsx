import React from "react";

const GetStarted = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="max-w-[355px] w-full lg:max-w-screen-xl px-5  pb-16 lg:pb-24 pt-10 lg:pt-24 flex flex-col items-center gap-16 lg:gap-24">
        <p className="text-white text-center w-full font-bold text-4xl lg:text-[3.5rem]">
          Contact Form for Business Owners
        </p>
        <button className="px-10 py-3 w-fit rounded-full font-bold bg-white text-black hover:bg-yellow-300 hover:cursor-pointer duration-300 ease-in-out transition-all ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;

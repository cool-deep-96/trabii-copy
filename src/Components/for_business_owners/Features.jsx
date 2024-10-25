import React from "react";

const Features = () => {
  return (
    <div className="w-full justify-center flex bg-black">
      <div className="max-w-[355px] lg:max-w-screen-xl px-5 pt-28 pb-20  flex flex-col lg:flex-row lg:px-10  gap-10 lg:gap-16">
        <div className="lg:w-96 lg:text-2xl text-white font-bold flex flex-col gap-7 text-center">
          <p className=" text-xl lg:text-4xl">Effortless Elegance</p>
          <p>
            Transform your visions into captivating realities with
            <span className="text-yellow-300">TraBii's</span> impeccably
            designed AI-powered event creation tools, streamlining the process
            with refined simplicity.
          </p>
        </div>
        <div className="lg:w-96 lg:text-2xl text-white font-bold flex flex-col gap-7 text-center">
          <p className="text-xl lg:text-4xl">Seamless Sophistication</p>
          <p>
            Meet <span className="text-yellow-300">TraBii'</span>, your personal
            social and recreational wizard! With AI magic at your fingertips,
            let the adventure begin! Create, host, manage, and accept payments
            for your Social and Recreational Events effortlessly.
          </p>
        </div>
        <div className="lg:w-96 lg:text-2xl text-white font-bold  flex flex-col gap-7 text-center">
          <p className="text-xl lg:text-4xl">Create Enchantment</p>
          <p>
            Captivate guests with immersive tools like group chat, multimedia
            sharing, and tailored announcements. Guarantee an unforgettable
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

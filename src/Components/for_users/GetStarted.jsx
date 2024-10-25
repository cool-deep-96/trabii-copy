import React from "react";

const GetStarted = () => {
  return (
    <div className="w-full flex justify-center bg-black/70">
      <div className="max-w-[355px] lg:max-w-screen-xl px-5 pt-20 pb-20 lg:px-40 flex flex-col text-center gap-14 items-center">
        <p
          className="text-3xl lg:text-5xl  text-white font-bold lg:w-full lg:text-justify "
          style={{ textAlignLast: "justify" }}
        >
          Join the <span className="text-yellow-400">TraBii</span> Early Access
          Program!
        </p>
        <p className="font-bold lg:text-lg text-gray-400 lg:text-justify">
          Be among the first to experience the future of social and recreational
          events with <span className="text-yellow-400">TraBii!</span> We're
          looking for enthusiastic early adopters to test our innovative
          platform and help shape its features. By joining our exclusive early
          access program, you'll get a sneak peek at our powerful AI-driven
          event recommendations, seamless event creation tools, and unique
          social media experiences.
        </p>
        <p className="font-bold lg:text-lg text-gray-400 lg:text-justify">
          Register now to become a part of the{" "}
          <span className="text-yellow-400">TraBii</span> community and enjoy
          early access benefits, including special offers and a chance to
          directly influence the development of our platform. Don't miss out on
          this exciting opportunity—fill out the form below to get started!
        </p>
        <button className="my-10 rounded-full font-bold py-3 px-10 bg-white hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;

import smartPhone from "../../assets/backed_by/mobile.png";

const Weekend = () => {
  return (
    <div className="w-full justify-center flex bg-black">
      <div className="lg:max-w-screen-xl  max-w-[355px] px-5 lg:px-0 flex flex-col gap-20 lg:gap-0 lg:flex-row pt-10 pb-20 lg:pb-40 lg:pl-24 lg:pr-28 justify-between items-center">
        <div className=" lg:w-[45%] text-center lg:pt-10  text-white font-bold flex justify-between items-center flex-col lg:gap-40 gap-20">
            <p className="text-[1.6rem] lg:text-[3.2rem] leading-[1]">
              Feeling bored and lost in event options? Let{" "}
              <span className="text-yellow-400">TraBii</span> guide you to your
              next unforgettable experience.
            </p>
            <button className="bg-blue-500 flex text-lg text-white font-bold py-3 px-10 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out">
              Jion Us
            </button>
        </div>
          <img
            src={smartPhone}
            alt="mobile.png"
            className="px-10 lg:px-20 lg:w-[40%]"
          />
      </div>
    </div>
  );
};

export default Weekend;

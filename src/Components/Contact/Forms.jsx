

const Forms = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Overlay Content */}
      <div className="max-w-[355px] lg:max-w-screen-xl bg-transparent py-10 lg:py-36  w-full flex justify-center relative z-10">
        <div className="flex flex-col w-fit lg:w-full justify-between items-center gap-10 lg:flex-row lg:justify-around ">
          <button className="bg-white lg:whitespace-nowrap px-4 text-black font-bold py-3 rounded-full hover:bg-yellow-300 hover:cursor-pointer duration-300 transition-all ease-in-out">
            For Business Owners
          </button>
          <button className="bg-white w-full lg:w-auto lg:whitespace-nowrap px-4 text-black font-bold py-3 rounded-full hover:bg-yellow-300 hover:cursor-pointer duration-300 transition-all ease-in-out">
            For Investors
          </button>
          <button className="bg-white w-full lg:w-auto lg:whitespace-nowrap px-4 text-black font-bold py-3 rounded-full hover:bg-yellow-300 hover:cursor-pointer duration-300 transition-all ease-in-out">
            For Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;

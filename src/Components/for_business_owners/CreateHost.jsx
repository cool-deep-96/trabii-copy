
import smartPhone from "../../assets/for_business_owners/smart_phone1.png";

const CreateHost = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div className="max-w-[355px] lg:max-w-screen-xl px-10 py-10 lg:py-16 lg:px-40 flex flex-col lg:flex-row-reverse gap-5 lg:gap-36 items-center lg:justify-between ">
        <p className="font-bold text-white text-[1.8rem] lg:text-4xl text-center mx-5">
          Create, host, manage, and accept payments for your Social and
          Recreational Events effortlessly.
        </p>
        <img
          src={smartPhone}
          alt="smart_phone1.png"
          className="w-[65%] lg:w-[30%]"
        />
      </div>
    </div>
  );
};

export default CreateHost;

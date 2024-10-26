import loopOfFunImage from "../../assets/backed_by/loop_of_fun.png";
import AosWrapper from "../Common/AosWrapper";

const LoopOfFun = () => {
  return (
    <div className="w-full bg-black flex justify-center">
      <div className="lg:max-w-screen-xl gap-14 lg:gap-0 max-w-[355px] px-5 py-20  lg:pl-24  lg:py-40 flex flex-col-reverse lg:flex-row justify-between items-center">
        <img
          src={loopOfFunImage}
          alt="loop_of_fun.png"
          className="pr-5 lg:pr-0 lg:w-[40%] scale-y-125  h-auto"
        />
        <AosWrapper>
          <p className="self-start lg:self-center text-3xl lg:text-5xl font-bold text-yellow-300">
            Explore Unforgettable <br /> Experiences Near You!
          </p>
        </AosWrapper>
      </div>
    </div>
  );
};

export default LoopOfFun;

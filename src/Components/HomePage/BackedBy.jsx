import React from "react";
import microsoft from "../../assets/backed_by/microsoft.svg";
import googleStartup from "../../assets/backed_by/google_for_startups_logo.svg";
import ventureStudio from "../../assets/backed_by/venture_studio.png";
import iit from "../../assets/backed_by/iit.png";
import xartupFellowship from "../../assets/backed_by/xartup_fellowship.png";
import wadhwaniFundation from "../../assets/backed_by/wadhwani_fundation.png";

const BackedBy = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="relative lg:max-w-screen-xl max-w-[355px] px-5 flex flex-col justify-center items-center py-5 gap-5">
        <div className="absolute hidden top-[50%] left-0 -translate-y-1/2 lg:flex flex-col gap-4 items-center w-[20%]">
          <img src={xartupFellowship} alt="xartup_fellowship.png" />
          <p className="text-center px-5 text-base font-bold">
            Accepted into <br />
            Xartup Fellowship
          </p>
        </div>
        <div className="absolute hidden top-[50%] right-0 -translate-y-1/2 lg:flex flex-col gap-4 items-center w-[20%]">
          <img src={wadhwaniFundation} alt="wadhwani_fundation.png" />
          <p className="text-center px-5 text-base font-bold">
            Liftoff Acceleration <br />
            Program
          </p>
        </div>
        <p className="uppercase text-black text-xl">backed by</p>
        <img
          src={microsoft}
          alt="microsoft.svg"
          className=" lg:w-[60%] h-auto"
        />
        <img
          src={googleStartup}
          alt="google_for_startups_logo.svg"
          className="w-[80%] lg:w-[50%] h-auto"
        />
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:w-[55%] items-center lg:h-40">
          <div className="flex items-center">
            <img src={iit} alt="iit.png" className="flex-grow h-auto" />
            <p className="text-center lg:hidden px-5 text-base font-semibold w-fit">
              IIT Delhi eDC <br />
              Alumins Program
            </p>
          </div>
          <img
            src={ventureStudio}
            alt="venture_studio.png"
            className="lg:w-[55%]"
          />
          <p className="text-center hidden lg:flex px-5  font-bold w-fit text-sm ">
            IIT Delhi eDC <br />
            Alumins Program
          </p>
        </div>
        <div className="flex lg:hidden justify-between items-center">
          <img src={wadhwaniFundation} alt="wadhwani_fundation.png" />
          <p className="text-center px-5 text-base font-bold w-[50%]">
            Liftoff Acceleration <br />
            Program
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:hidden items-center w-full">
          <img src={xartupFellowship} alt="xartup_fellowship.png" />
          <p className="text-center px-5 text-base font-bold">
            Accepted into <br className="hidden lg:flex" />
            Xartup Fellowship
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackedBy;

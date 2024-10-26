
import navbarLogo from "../../assets/logo.png";
import linkedInSvg from "../../assets/svg/linkedin.svg";
import instagramSvg from "../../assets/svg/instagram.svg";
import twitterXSvg from "../../assets/svg/twitterx.svg";

const Footer = () => {
  return (
    <div className="bg-black/90 flex justify-center">
      <div className="lg:max-w-screen-xl max-w-[355px] w-full pt-10 pb-20 lg:pb-10 lg:pt-20 px-5 lg:px-28">
        {/* header - small  */}
        <p className="text-4xl lg:hidden font-bold text-gray-400 text-center mb-10 whitespace-nowrap">
          Get in touch
        </p>

        <div className="flex flex-row justify-end lg:justify-between gap-2">
          <div className="text-white flex flex-col justify-between ">
            {/* headers for lg */}
            <p className="text-6xl hidden lg:flex font-bold text-gray-400 whitespace-nowrap">
              Get in touch
            </p>

            <div className="">
              <div className="flex flex-col  gap-6">
                {/* logo - small  */}
                <img
                  src={navbarLogo}
                  className="w-28 h-auto lg:hidden"
                  alt="navbarLogo"
                ></img>
                {/* buttons */}
                <div className="flex flex-col self-center lg:self-start w-fit gap-5">
                  <button className="rounded-full w-fit bg-blue-600 font-bold text-sm  py-2 lg:py-4 px-3 whitespace-nowrap lg:px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out">
                    Contact Us
                  </button>
                  <button className="rounded-full bg-blue-600 font-bold text-sm  py-2 lg:py-4 px-3 whitespace-nowrap lg:px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out">
                    Help
                  </button>
                </div>
              </div>
            </div>

            {/* social handles  */}
            <div className="flex  lg:justify-start lg:px-5 gap-3 lg:gap-5">
              <img
                src={linkedInSvg}
                className="w-6 lg:w-7 h-auto "
                alt="navbarLogo"
              ></img>
              <img
                src={instagramSvg}
                className="w-6 lg:w-7 h-auto"
                alt="navbarLogo"
              ></img>
              <img
                src={twitterXSvg}
                className="w-6 lg:w-7 h-auto"
                alt="navbarLogo"
              ></img>
            </div>
          </div>

          {/* logo on large */}
          <div className="absolute left-[50%] -translate-x-1/2 hidden lg:flex self-end">
            <img
              src={navbarLogo}
              className="w-40 h-auto"
              alt="navbarLogo"
            ></img>
          </div>

          {/* contact info right side */}
          <div className="flex flex-col gap-10 w-[55%] ">
            <div className="flex flex-col gap-2 text-right">
              <p className=" text-xl font-bold text-gray-400 capitalize">
                company
              </p>
              <p className="uppercase text-white font-semibold text-lg lg:whitespace-nowrap">
                {" "}
                TRABII ENTERTAINMENT PRIVATE LIMITED
              </p>
              <p className=" text-white font-semibold  text-lg  lg:whitespace-nowrap">
                IIT Delhi, Hauz Khas, New Delhi, Delhi{" "}
              </p>
              <p className=" text-white font-semibold  text-lg lg:whitespace-nowrap">
                110016{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <p className=" text-xl font-bold text-gray-400">Contacts</p>
              <p className=" text-white font-semibold text-lg lg:whitespace-nowrap">
                {" "}
                +91-99718 55077
              </p>
              <p className="text-white font-semibold  text-lg lg:whitespace-nowrap">
                support@trabii.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

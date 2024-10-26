
import logo from "../../assets/logo.png";
import homepageImage from "../../assets/Homepage.png";

const HeroPage = () => {
  return (
    <div
      className="w-full flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homepageImage})` }}
    >
      <div className="bg-gray-900/60 w-full flex justify-center">
        <div className="capitalize max-w-[355px] px-5 lg:px-0 text-center  lg:max-w-screen-xl text-white py-32 lg:py-24  font-bold flex flex-col gap-5  items-center w-full h-full">
          <p className="text-5xl">DISCOVER, CONNECT, EXPERIENCE</p>
          <img src={logo} alt="logo" className="lg:h-40 w-auto px-16 lg:px-0" />
          <p className="text-5xl">MAKES IT HAPPEN</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

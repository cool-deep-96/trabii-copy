import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Address = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex justify-center bg-[#b3af9e]">
      <div className="max-w-[355px] lg:max-w-screen-xl px-5 lg:px-0 lg:pl-16 pt-20 lg:pt-2 flex w-full lg:flex-row flex-col gap-6 lg:justify-between">
        {/* Left Side - Office Information */}
        <div className="lg:w-[45%] flex flex-col gap-6 lg:pb-10 ">
          <h2 data-aos="fade-up" className="text-3xl lg:text-5xl  font-bold  text-black">
            Our office
          </h2>
          <p data-aos="fade-up" className="text-black  font-semibold lg:text-lg pr-10">
            Inform visitors about your business location and working hours.
          </p>

          <h3 data-aos="fade-up" className="text-black text-lg font-bold lg:text-2xl lg:w-[60%]">
            Address
            <p data-aos="fade-up" className="text-base font-semibold">
              158, Vikash Colony, BAG - 1 Pakka Bag, Etawah, Etawah- 206001,
              Uttar Pradesh
            </p>
          </h3>

          <h3 data-aos="fade-up" className="text-black text-lg font-bold lg:text-2xl lg:w-[60%]">
            Contacts
            <p data-aos="fade-up" className="text-base font-semibold">
              +91-9971855077
              <br />
              support@trabli.com
            </p>
          </h3>
        </div>

        {/* Right Side - Map */}
        <div data-aos="fade-up" className="w-full aspect-square lg:aspect-auto lg:w-[60%] bg-gray-300 overflow-hidden">
          <iframe
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=158%2C%20Vikash%20Colony%2C%20BAG%20-%201%20Pakka%20Bag%20Etawah%2C%20Etawah-%20206001%2C%20Uttar%20Pradesh&zoom=10&maptype=roadmap"
            title="Google Maps Location of Vikash Colony, Etawah"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;

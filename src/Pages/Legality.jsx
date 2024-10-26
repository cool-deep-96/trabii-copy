import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const policies = [
  { title: "Privacy Policy Website", id: "privacy-website", },
  { title: "Privacy Policy App", id: "privacy-app" },
  { title: "Terms and Conditions", id: "terms" },
  { title: "Refund Policy", id: "refund" },
];

const Legality = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex justify-center py-12">
      <div className="max-w-[355px] lg:max-w-screen-xl">
        <div className="space-y-16 flex flex-col ">
        {policies.map((policy) => (
          <a
          data-aos="fade-up"
          href={"/"+policy.title.replaceAll(" ", "-").toLowerCase()}
            key={policy.id}
            className="w-[80] bg-black hover:bg-gray-800 text-white font-bold py-3 px-16 rounded-full transition-colors duration-200 shadow-sm"
          >
            {policy.title}
          </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Legality;

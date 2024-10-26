import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PreRegister = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 120, // Offset (in px) from the original trigger point
      easing: "ease", // Easing animation type
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., API call)
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div>
      <div className="flex justify-center bg-black">
        <div className="lg:max-w-screen-xl h-[50%] w-full">
          <p data-aos="fade-up" className="text-white font-bold text-5xl lg:text-8xl text-center py-24 lg:py-44 lg:px-24">
            Pre Register
          </p>
        </div>
      </div>
      <div className="justify-center bg-white flex ">
        <div className="lg:max-w-screen-xl h-[50%] w-full px-5">
          <p data-aos="fade-up" className="text-center px-64   text-3xl  lg:text-5xl lg:py-10 pt-5 lg:px-24">
            Pre Register for our App Now
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-10 lg:px-24">
            <div data-aos="fade-up" className="flex flex-col gap-2  lg:px-0 w-[50%]">
              <p className="lg:font-semibold lg:text-7xl text-4xl text-center lg:pb-5 pb-3">
                Why?
              </p>
              <p className="font-bold lg:text-2xl text-4xl text-center pb-3">
                🚀 Exclusive Early Access! 🚀
              </p>
              <p className="text-xl lg:px-0 px-16">
                <span className="font-bold lg:items-start   ">
                  • Greater Discounts
                </span>{" "}
                on Future Events 🎟️
              </p>
              <p className="text-xl lg:px-0 px-16">
                <span className="font-bold lg:items-start ">• Sneak Peeks</span>{" "}
                at Upcoming Features 🔍
              </p>
              <p className="text-xl lg:px-0 px-16">
                <span className="font-bold lg:items-start ">
                  • Future Benefits
                </span>{" "}
                & Perks 🎁
              </p>
              <p className="text-lg font-bold lg:px-0 px-10 text-center lg:text-start">
                • Greater voice in Shaping TraBii 📢
              </p>
            </div>

            {/* Form Component */}
            <div data-aos="fade-up" className="lg:ml-20  lg:w-full lg:py-0 py-10 w-[50%] lg:max-w-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border rounded-xl text-lg lg:font-semibold "
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border  rounded-xl text-lg lg:font-semibold"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border rounded-xl text-lg lg:font-semibold"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className=" self-center w-fit mt-4 py-3 px-6 bg-black text-white font-semibold rounded-3xl hover:bg-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegister;

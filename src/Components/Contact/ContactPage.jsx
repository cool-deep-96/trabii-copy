import { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import linkedinSvg from "../../assets/svg/linkedin.svg";
import instagramSvg from "../../assets/svg/instagram.svg";
import facebookSvg from "../../assets/svg/facebook.svg";
import twitterx from "../../assets/svg/twitterx.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      offset: 120,     // Offset (in px) from the original trigger point
      easing: 'ease',  // Easing animation type
      once: true       // Whether animation should happen only once while scrolling down
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (

      <div
        className="w-full flex justify-center bg-cover bg-center  bg-black/60"
        style={{
          backgroundImage:
            "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,fit=crop/Yyv2WR90PyhOLWlB/andre-benz-jb7tls6fw_i-unsplash-mp87p2XRXWibjBRx.jpg')",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-[355px] lg:max-w-screen-xl px-5 pt-20 lg:pt-52">
          <div className="flex items-center flex-col justify-center gap-5 lg:gap-20">
            <p data-aos="fade-up" className="text-[2rem] w-full lg:w-auto  lg:text-5xl font-bold text-white text-center ">
              Contact Us
            </p>
            <p data-aos="fade-up" className="text-white text-center font-semibold lg:text-xl lg:w-[40%]">
              Trabli is ready to provide the right solution according to your
              needs
            </p>

            <div data-aos="fade-up" className="flex flex-col-reverse lg:flex-row rounded-lg w-full lg:w-[70%]">
              {/* Contact Information */}
              <div className="bg-[#888888] p-5  lg:p-10 pb-16 flex flex-col lg:w-[50%] gap-10 lg:gap-0 justify-between rounded-[0em_0rem_0.5rem_0.5em]  lg:rounded-[0.5em_0rem_0rem_0.5em] ">
                <div className="text-3xl lg:text-5xl font-bold text-white">
                  Get in touch
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex items-start gap-2 lg:gap-5">
                    <div className="bg-white p-2 rounded-full ">
                      <MapPin className="h-8 w-8 text-gray-800" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Head Office</div>
                      <p className="text-gray-200  text-sm lg:text-normal font-semibold">
                        158, Vikash Colony, BAG - 1 Pakka Bag, Etawah, Etawah-
                        206001, Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 lg:gap-5">
                    <div className="bg-white p-2 rounded-full ">
                      <Mail className="h-8 w-8 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Email Us</h3>
                      <p className="text-gray-200 text-sm lg:text-normal font-semibold">
                        support@trabli.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 lg:gap-5">
                    <div className="bg-white p-2 rounded-full ">
                      <Phone className="h-8 w-8 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Call Us</h3>
                      <p className="text-gray-200 text-sm lg:text-normal font-semibold">
                        +91-9971855077
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className=" hidden lg:flex flex-col gap-5 pt-5 lg:pt-0 px-5 lg:px-0">
                  <p className="font-bold text-3xl   text-white">
                    Follow our social media
                  </p>
                  <div className="flex gap-2">
                    <img
                      src={linkedinSvg}
                      alt="linkedin"
                      className="w-6 h-auto"
                    />
                    <img
                      src={instagramSvg}
                      alt="linkedin"
                      className="w-6 h-auto"
                    />
                    <img
                      src={facebookSvg}
                      alt="linkedin"
                      className="w-6 h-auto"
                    />
                    <img src={twitterx} alt="linkedin" className="w-6 h-auto" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-5 lg:w-[50%] rounded-[0.5rem_0.5rem_0rem_0rem]  lg:rounded-[0rem_0.5rem_0.5rem_0rem]">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 flex flex-col"
                >
                  <div>
                    <label className="block text-gray-900  mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#f1f1f1] p-3 border rounded-lg"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900  mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-[#f1f1f1] border rounded-lg"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900  mb-2">
                      Your email*
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 bg-[#f1f1f1] border rounded-lg"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900  mb-2">
                      Message*
                    </label>
                    <textarea
                      className="w-full p-3 bg-[#f1f1f1] border rounded-lg h-32"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-fit self-end  bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className=" lg:hidden flex flex-col gap-5 pt-5">
              <p className="font-bold text-4xl  text-white">
                Follow our social media
              </p>
              <div className="flex gap-1">
                <img src={linkedinSvg} alt="linkedin" className="w-6 h-auto" />
                <img src={instagramSvg} alt="linkedin" className="w-6 h-auto" />
                <img src={facebookSvg} alt="linkedin" className="w-6 h-auto" />
                <img src={twitterx} alt="linkedin" className="w-6 h-auto" />
              </div>
            </div>

            {/* help */}
            <div  className="flex flex-col w-fit lg:w-full gap-5 lg:flex-row text-white justify-center items-center lg:justify-between lg:text-3xl font-bold lg:font-extrabold pt-5 lg:pt-0 lg:pb-20 lg:px-20">
              <button data-aos="fade-up" className="bg-gray-500 w-full lg:min-w-[200px] py-4 lg:py-7 px-5 rounded-full hover:bg-gray-600 transition-colors">
                Suggestions Form
              </button>
              <button data-aos="fade-up" className="bg-gray-500 w-full lg:min-w-[200px] py-4 lg:py-7 px-5 rounded-full hover:bg-gray-600 transition-colors">
                Help
              </button>
              <button data-aos="fade-up" className="bg-gray-500 w-full lg:min-w-[200px] py-4 lg:py-7 px-5 rounded-full hover:bg-gray-600 transition-colors">
                Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ContactPage;

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
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

  // Motion variants for slide-up effect
  const slideUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={slideUpVariant}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-full flex justify-center bg-cover bg-center  bg-black/60"
        style={{
          backgroundImage:
            "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,fit=crop/Yyv2WR90PyhOLWlB/andre-benz-jb7tls6fw_i-unsplash-mp87p2XRXWibjBRx.jpg')",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-[355px] lg:max-w-screen-xl px-5 pt-20 ">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-4xl mb-3 lg:text-5xl font-bold text-white text-center tracking-wider ">
              Contact Us
            </h1>
            <p className="text-white mb-3 text-center font-semibold">
              Trabli is ready to provide the right solution according to your
              needs
            </p>

            <div className="flex flex-col-reverse md:flex-row rounded-lg h-[50%]">
              {/* Contact Information */}
              <div className="bg-[#888888] p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full p-3">
                      <MapPin className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Head Office</h3>
                      <p className="text-gray-200">
                        158, Vikash Colony, BAG - 1 Pakka Bag,
                        <br />
                        Etawah, Etawah- 206001, Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full p-3">
                      <Mail className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Email Us</h3>
                      <p className="text-gray-200">support@trabli.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full p-3">
                      <Phone className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Call Us</h3>
                      <p className="text-gray-200">+91-9971855077</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-white font-bold mb-4">
                    Follow our social media
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-gray-800" />
                    </a>
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-gray-800" />
                    </a>
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-gray-800" />
                    </a>
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 flex-1">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
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
                    <label className="block text-gray-700 mb-2">
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
                    <label className="block text-gray-700 mb-2">
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
                    <label className="block text-gray-700 mb-2">Message*</label>
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
                    className="w-fit self-end  bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="block lg:hidden">
                <p className="font-bold text-4xl  text-white">Follow our social media</p>
                <div>
                    

                </div>
            </div>

            {/* help */}
            <div className="flex flex-col w-fit gap-5 lg:flex-row text-white justify-center items-center lg:justify-around  lg:text-3xl font-bold lg:font-extrabold pt-20">
              <button className="bg-gray-500  py-4 px-5  rounded-full hover:bg-gray-600 transition-colors">
                Suggestions Form
              </button>
              <button className="bg-gray-500 w-full  py-4 px-5  rounded-full hover:bg-gray-600 transition-colors">
                Help
              </button>
              <button className="bg-gray-500 w-full py-4 px-5  rounded-full hover:bg-gray-600 transition-colors">
                Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

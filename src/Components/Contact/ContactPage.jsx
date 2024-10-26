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
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={slideUpVariant}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Page with Image Background */}
      <div
        className="relative min-h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,fit=crop/Yyv2WR90PyhOLWlB/andre-benz-jb7tls6fw_i-unsplash-mp87p2XRXWibjBRx.jpg')",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-center flex-col justify-center pb-[8rem] bg-black/60">
          <div className="container mx-auto px-4 w-full lg:w-3/5 py-[10rem]">
            <h1 className="text-5xl font-bold text-white text-center tracking-wider mb-4">
              Contact Us
            </h1>
            <p className="text-white text-center mx-auto  w-[55%] text-wrap m-12">
              Trabli is ready to provide the right solution according to your
              needs
            </p>

            <div className="flex flex-col md:flex-row rounded-lg h-[50%]">
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
                        setFormData({ ...formData, lastName: e.target.value })
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
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-around w-[100vw] space-x-8 tracking-wide">
            <button className="bg-gray-500 text-white w-[20rem] py-[2rem] text-nowrap text-3xl font-extrabold rounded-[8rem] hover:bg-gray-600 transition-colors">
              Suggestions Form
            </button>
            <button className="bg-gray-500 text-white w-[20rem] py-[2rem] text-3xl font-extrabold rounded-[8rem] hover:bg-gray-600 transition-colors">
              Help
            </button>
            <button className="bg-gray-500 text-white w-[20rem] py-[2rem] text-3xl font-extrabold rounded-[8rem] hover:bg-gray-600 transition-colors">
              Our Team
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

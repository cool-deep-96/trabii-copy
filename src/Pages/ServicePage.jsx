
import { motion } from "framer-motion";

const ServicePage = () => {
  // Data for services
  const services = [
    {
      title: "Event Discovery and Booking",
      price: "10,000",
      description: "Find and book the best events effortlessly.",
      image: "/images/our_services/services1.png", // Replace with actual image URL or import your own image files
    },
    {
      title: "Event Hosting and Promotion",
      price: "10,000",
      description: "Host and promote your events seamlessly.",
      image: "/images/our_services/services2.png",
    },
    {
      title: "AI-Powered Event Recommendations",
      price: "As per Event Requirements",
      description: "Get AI-driven recommendations tailored to your needs.",
      image: "/images/our_services/services3.png",
    },
    {
      title: "Social Features and Engagement",
      price: "Free for Users",
      description: "Boost engagement through social interactions.",
      image: "/images/our_services/services4.png",
    },
  ];

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="overflow-hidden pb-[2rem]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full flex justify-center font-montserrat">
        <div className="max-w-[355px] lg:max-w-screen-xl w-full px-5 py-10 lg:px-0 lg:py-0 lg:pt-20">
          <h1 className="text-5xl lg:text-9xl lg:w-[50%] mb-8">Our services</h1>
          <p className="text-xl mb-20 font-[500]">
            Here are four key services that TraBii provides to everyone
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pb-20 items-center gap-20">
            {services.map((service, index) => (
              <div className="overflow-hidden w-full lg:w-[90%] h-auto flex flex-col gap-3">
                <div className="border  shadow-md overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80  object-cover"
                  />
                </div>
                <motion.div
                  className="overflow-hidden"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-2xl font-bold py-3">{service.title}</h3>
                  <span className=" text-2xl ">Rs {service.price}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePage;


import Address from "../Components/Contact/Address";
import Forms from "../Components/Contact/Forms";
import ContactPage from "../Components/Contact/ContactPage";

const Contact = () => {
  return (
    <div>
      <ContactPage />

      {/* Wrapper for the content and video */}
      <div className="relative w-full h-fit">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/bg-videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content that slides over video */}
        <div className="relative z-10">
          <Address />
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Contact;

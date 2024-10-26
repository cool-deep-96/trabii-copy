import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS styles

const AosWrapper = ({ children, animation = 'fade-up', duration = 1000, offset = 120, easing = 'ease', once = true }) => {
  useEffect(() => {
    AOS.init({
      duration,  // Animation duration in ms
      offset,    // Offset (in px) from the original trigger point
      easing,    // Easing animation type
      once       // Animate only once when scrolling
    });
  }, [duration, offset, easing, once]);

  return (
    <div data-aos={animation}>
      {children}
    </div>
  );
};

export default AosWrapper;

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  MdOutlineEventAvailable,
  MdOutlinePayment,
  MdOutlineNavigation,
  MdOutlineDateRange,
} from "react-icons/md";

const CustomerApp = () => {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false,
      });
    }
  }, []);

  return (
    <div className="bg-[#F8A71B] min-h-screen w-auto flex items-center justify-center px-4 py-10">
      <div className="mx-auto max-w-7xl w-full">
        <h1
          className="text-4xl sm:text-5xl text-center font-bold mb-10"
          data-aos="fade-up"
        >
          Book a Slot
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <img
                className="w-52 sm:w-64 lg:w-56"
                src="assets/images/samsung-galaxy-still(11).png"
                alt="Mockup"
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Effortless Parking at Your Fingertips
            </h1>
            <h3 className="text-base sm:text-lg font-light mb-6">
              With the PEAT Booking App, finding and reserving parking has never
              been easier. Explore available parking slots, book instantly, and
              secure your spot all in just a few taps.
            </h3>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-4 text-left">
              <li
                className="flex items-center text-base font-light"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <MdOutlineEventAvailable className="mr-2 text-xl" />
                Real-time parking slot availability
              </li>
              <li
                className="flex items-center text-base font-light"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <MdOutlinePayment className="mr-2 text-xl" />
                Instant booking and secure payments
              </li>
              <li
                className="flex items-center text-base font-light"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <MdOutlineNavigation className="mr-2 text-xl" />
                Easy navigation to parking locations
              </li>
              <li
                className="flex items-center text-base font-light"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <MdOutlineDateRange className="mr-2 text-xl" />
                Flexible booking options for short or long stays
              </li>
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mt-8">
              <img
                className="h-12 sm:h-14"
                src="assets/images/google-play-6647242_1280.png"
                alt="Play Store"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <img
                className="h-12 sm:h-14"
                src="assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
                alt="App Store"
                data-aos="fade-up"
                data-aos-delay="1100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;

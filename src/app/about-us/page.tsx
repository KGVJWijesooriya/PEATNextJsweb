import React from "react";
import {
  MapPin,
  Car,
  Clock,
  Globe,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6 pt-26">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-amber-500 mb-2">PEAT</h1>
              <p className="text-gray-600">
                Revolutionizing Parking Management
              </p>
            </div>
            <div className="h-14 w-14 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <Car className="w-8 h-8" />
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company intro */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About PEAT
              </h2>
              <p className="text-gray-600 mb-4">
                The PEAT app is revolutionizing parking management with a
                seamless, user-friendly online system accessible globally.
                Designed to address the challenges of parking in bustling
                cities, our platform provides an efficient solution for finding,
                reserving, and paying for parking spots in real-time.
              </p>
              <p className="text-gray-600 mb-2">
                Registered under number{" "}
                <span className="font-semibold text-gray-800">
                  PV00306529,{" "}
                </span>
                PEAT offers a robust network of parking facilities and an
                intuitive interface to eliminate the stress and uncertainty of
                parking.
              </p>
              <div className="flex items-center text-amber-500 font-medium mt-6">
                <Globe className="w-5 h-5 mr-2" />
                <span>Available Worldwide</span>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="rounded-lg h-64 flex items-center justify-center bg-amber-100">
              {/* <img
                src="/api/placeholder/400/320"
                alt="PEAT app demonstration"
                className="rounded-lg"
              /> */}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <div className="p-5 bg-amber-500 text-white rounded-lg">
            <p className="text-lg">
              By prioritizing convenience, we empower drivers to park
              confidently and efficiently wherever they go.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Find Parking</h3>
              <p className="text-gray-600">
                Locate available parking spots in real-time across global
                locations.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Payment</h3>
              <p className="text-gray-600">
                Secure and seamless payment options for your parking needs.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Time Saving</h3>
              <p className="text-gray-600">
                Streamlined process saves valuable time for busy drivers.
              </p>
            </div>
          </div>
        </div>

        {/* About Extra */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose PEAT
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-4">
                With a focus on innovation and customer satisfaction, PEAT
                streamlines the entire parking process, saving users valuable
                time. As a global leader in parking solutions, we are
                transforming the parking experience, offering hassle-free
                service and unmatched convenience.
              </p>
              <p className="text-gray-600 font-medium">
                Join us in redefining parking with PEAT.
              </p>
              <div className="mt-6">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                  Download App
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Global network of parking facilities
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Real-time parking spot availability
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Secure online payment system
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  User-friendly mobile application
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

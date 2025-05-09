import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-white w-full py-8 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Company Name
            </h2>
            <p className="text-gray-600 mb-2 flex items-center">
              <MapPin size={16} className="mr-2" />
              123 Street Name, City, Country
            </p>
            <p className="text-gray-600 mb-2 flex items-center">
              <Phone size={16} className="mr-2" />
              +1 (123) 456-7890
            </p>
            <p className="text-gray-600 flex items-center">
              <Mail size={16} className="mr-2" />
              info@companyname.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={index < menuItems.length - 1 ? "mb-2" : ""}
                >
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="bg-[#F8A71B] text-white px-4 py-2 rounded-r hover:bg-amber-500 transition duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#F8A71B] hover:text-amber-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#F8A71B] hover:text-amber-500 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#F8A71B] hover:text-amber-500 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800 mr-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800 mr-4"
              >
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-800">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Marble from "../Assets/FooterMarble.webp";
export default function Footer() {
  return (
    <footer className="min-h-[450px] relative mt-20 bg-gray-900 text-white overflow-hidden">
      <img
        src={Marble}
        alt="Marble Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>

      <div className="relative z-10 container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">OKINT Stone</h2>
            <p className="text-sm text-gray-300">
              Shaping elegance for your projects with high-quality marble and
              natural stones.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <a
                  href="tel:+905333709349"
                  className="hover:text-gray-300 transition duration-300"
                >
                  +90 533 370 93 49
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <a
                  href="mailto:info@okintstone.com"
                  className="hover:text-gray-300 transition duration-300"
                >
                  info@okintstone.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <p>Seyhan, 643. Sk. no:27/2, 35380 Buca/İzmir, Turkey</p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition duration-300 text-sm"
            >
              Get a Quote Now
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} OKINT Stone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#171530] text-white py-10 mt-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2">🎓</span>
            <h1 className="text-lg font-semibold">VidyaMarg</h1>
          </div>
          <p className="text-gray-300 mb-4">
            Your one-stop solution for students to find hostels, institutes, colleges, and flats.
            Making student life easier and hassle-free!
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-blue-600 w-fit">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Hostels</a></li>
            <li><a href="#">Coachings</a></li>
            <li><a href="#">Colleges</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-blue-600 w-fit">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Find Affordable Hostels</a></li>
            <li><a href="#">Explore Top Institutes</a></li>
            <li><a href="#">Search for Colleges</a></li>
            <li><a href="#">Rent Student-Friendly Flats</a></li>
            <li><a href="#">24/7 Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-blue-600 w-fit">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <FaClock className="mr-3 mt-1 text-blue-500" />
              Mon–Fri: 09:00 AM – 06:00 PM
            </li>
            <li className="flex items-start">
              <FaEnvelope className="mr-3 mt-1 text-blue-500" />
              support@vidyamarg.com
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1 text-blue-500" />
              123 Student Street, Knowledge City
            </li>
            <li className="flex items-start">
              <FaPhone className="mr-3 mt-1 text-blue-500" />
              +91 98765 43210
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

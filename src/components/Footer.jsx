import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Clock, Mail, MapPin, Phone, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>

      <div className="relative pt-16 pb-8 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  VidyaMarg
                </h1>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your one-stop solution for students to find hostels, institutes, colleges, and flats. 
                Making student life easier and hassle-free!
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="group w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaFacebookF className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaTwitter className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaInstagram className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaLinkedinIn className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaYoutube className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Hostels', href: '/#hostels-section' },
                  { name: 'Support', href: '/support' },
                  { name: 'Contact Us', href: '/support' },
                  { name: 'Coachings', href: '#' },
                  { name: 'Colleges', href: '#' },
                  { name: 'About Us', href: '#' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Find Affordable Hostels', href: '/#hostels-section' },
                  { name: 'Explore Top Institutes', href: '#' },
                  { name: 'Search for Colleges', href: '#' },
                  { name: 'Rent Student-Friendly Flats', href: '#' },
                  { name: '24/7 Support', href: '/support' },
                  { name: 'Virtual Tours', href: '#' }
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-500 transition-colors">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Working Hours</p>
                    <p className="text-gray-400 text-sm">Mon–Fri: 09:00 AM – 06:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-500 transition-colors">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:hk4hritik@gmail.com" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                      hk4hritik@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-500 transition-colors">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Address</p>
                    <p className="text-gray-400 text-sm">123 Student Street, Knowledge City</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-500 transition-colors">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6">Get the latest updates about new hostels and exclusive offers</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">
                  © {currentYear} VidyaMarg. Made with <Heart size={16} className="inline text-red-500" /> for students.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-30"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

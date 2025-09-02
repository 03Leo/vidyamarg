import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HostelCard from '../components/HostelCard';
import BookNowForm from '../components/BookNowForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Search, Filter, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const HomePage = () => {
  const hostels = useSelector((state) => state.data.hostels);
  const sliderRef = useRef(null);
  const [sliderKey, setSliderKey] = useState(0);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  useEffect(() => {
    if (hostels.length > 0) {
      setSliderKey((prev) => prev + 1);
    }
  }, [hostels]);

  // Slider settings for hostel cards
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // default for desktop
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleBookNowClick = (hostel) => {
    setSelectedHostel(hostel);
    setShowForm(true);
  };

  // Filter hostels
  const filteredHostels = hostels.filter(hostel => {
    const matchesSearch =
      hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hostel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hostel.description?.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesLocation =
      !selectedLocation || hostel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  
    const matchesPrice =
      !selectedPriceRange ||
      hostel.roomTypes?.some(room => {
        const price = parseInt(room.price);
        switch (selectedPriceRange) {
          case '0-5000':
            return price <= 5000;
          case '5000-10000':
            return price > 5000 && price <= 10000;
          case '10000+':
            return price > 10000;
          default:
            return true;
        }
      });
  
    return matchesSearch && matchesLocation && matchesPrice;
  });
  

  const uniqueLocations = [...new Set(hostels.map(hostel => hostel.location))];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Hostels Section */}
      <section id="hostels-section" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Discover Amazing Hostels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect accommodation that fits your lifestyle and budget
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search hostels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Locations</option>
                  {uniqueLocations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Prices</option>
                  <option value="0-5000">₹0 - ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000+">₹10,000+</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4">
                <span className="text-sm text-gray-600">
                  {filteredHostels.length} {filteredHostels.length === 1 ? 'hostel' : 'hostels'} found
                </span>
              </div>
            </div>
          </div>

          {/* Hostels Slider */}
          <div className={showForm ? 'blur-sm pointer-events-none select-none' : ''}>
            {filteredHostels.length > 0 ? (
              <Slider {...sliderSettings} key={sliderKey} ref={sliderRef}>
                {filteredHostels.map((hostel) => (
                  <div key={hostel.id} className="px-2">
                    <HostelCard
                      hostel={hostel}
                      onBookNowClick={() => handleBookNowClick(hostel)}
                    />
                  </div>
                ))}
              </Slider>
            ) : hostels.length > 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No hostels found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLocation('');
                    setSelectedPriceRange('');
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading hostels...</h3>
                <p className="text-gray-600">Please wait while we fetch the latest hostel listings</p>
              </div>
            )}
          </div>

          {/* Show modal */}
          {showForm && selectedHostel && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <BookNowForm onClose={() => setShowForm(false)} hostel={selectedHostel} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

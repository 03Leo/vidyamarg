import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HostelCard from '../components/HostelCard';
import BookNowForm from '../components/BookNowForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const hostels = useSelector((state) => state.data.hostels);
  const sliderRef = useRef(null);
  const [sliderKey, setSliderKey] = useState(0);
  const [selectedHostel, setSelectedHostel] = useState(null);

  const [showForm, setShowForm] = useState(false); // ✅ Modal state

  useEffect(() => {
    if (hostels.length > 0) {
      setSliderKey((prev) => prev + 1);
    }
  }, [hostels]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleBookNowClick = (hostel) => {
    setSelectedHostel(hostel);
    setShowForm(true);
  };

  return (
    <div>
      <HeroSection/>
    <div className="p-6 relative">
      {/* ✅ Blur only the content */}
      <div className={showForm ? 'blur-sm pointer-events-none select-none' : ''}>
        <h2 className="text-2xl font-bold mt-10 mb-4">Hostels</h2>
        {hostels.length > 0 ? (
          <Slider key={sliderKey} ref={sliderRef} {...settings}>
            {hostels.map((hostel) => (
              <div key={hostel.id} className="px-2 py-2">
                <HostelCard hostel={hostel} onBookNowClick={() => handleBookNowClick(hostel)} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500">Loading hostels...</p>
        )}
      </div>

      {/* ✅ Show modal on top without blur */}
      {showForm && selectedHostel &&  (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <BookNowForm onClose={() => setShowForm(false)} hostel={selectedHostel} />
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
};

export default HomePage;

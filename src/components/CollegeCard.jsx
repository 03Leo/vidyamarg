import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CollegeCard = ({ college }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleBookNow = () => {
    // You can replace this with navigation or a booking form modal
    alert(`Booking initiated for: ${college.name}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 h-full flex flex-col justify-between">
      <div>
        <Slider {...settings}>
          {college.images?.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Slide ${idx}`} className="w-full h-40 object-cover rounded-xl mb-2" />
            </div>
          ))}
        </Slider>

        <h3 className="text-lg font-semibold">{college.name}</h3>

        <p className="text-sm text-gray-600 flex items-center mt-1">
          <FaMapMarkerAlt className="mr-1 text-blue-600" />
          {college.location}
        </p>

        <p className="text-sm text-gray-600 flex items-center mt-1">
          <FaInfoCircle className="mr-1 text-green-600" />
          {college.description}
        </p>

        <div className="mt-2">
          <p className="font-medium">Room Types:</p>
          {college.roomTypes?.map((room, idx) => (
            <p key={idx} className="text-sm text-gray-700 flex items-center">
              <FaRupeeSign className="mr-1 text-yellow-600" />
              {room.type}: ₹{room.price}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <p className="font-medium">Amenities:</p>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            {college.amenities?.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <FaCheckCircle className="mr-1 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 w-full"
      >
        Book Now
      </button>
    </div>
  );
};

export default CollegeCard;

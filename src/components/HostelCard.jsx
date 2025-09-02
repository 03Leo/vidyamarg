// import React from 'react';
// import { FaMapMarkerAlt, FaInfoCircle, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
// import Slider from 'react-slick';

// const HostelCard = ({ hostel, onBookNowClick }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 h-full flex flex-col justify-between">
//       <div>
//         <Slider {...settings}>
//           {hostel.images?.map((img, idx) => (
//             <div key={idx}>
//               <img
//                 src={img}
//                 alt={`Slide ${idx}`}
//                 className="w-full h-40 object-cover rounded-xl mb-2"
//               />
//             </div>
//           ))}
//         </Slider>

//         <h3 className="text-lg font-semibold">{hostel.name}</h3>

//         <p className="text-sm text-gray-600 flex items-center mt-1">
//           <FaMapMarkerAlt className="mr-1 text-blue-600" />
//           {hostel.location}
//         </p>

//         <p className="text-sm text-gray-600 flex items-center mt-1">
//           <FaInfoCircle className="mr-1 text-green-600" />
//           {hostel.description}
//         </p>

//         <div className="mt-2">
//           <p className="font-medium">Room Types:</p>
//           {hostel.roomTypes?.map((room, idx) => (
//             <p key={idx} className="text-sm text-gray-700 flex items-center">
//               <FaRupeeSign className="mr-1 text-yellow-600" />
//               {room.type}: ₹{room.price}
//             </p>
//           ))}
//         </div>

//         <div className="mt-2">
//           <p className="font-medium">Amenities:</p>
//           <ul className="text-sm text-gray-700 list-disc list-inside">
//             {hostel.amenities?.map((item, idx) => (
//               <li key={idx} className="flex items-center">
//                 <FaCheckCircle className="mr-1 text-green-500" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <button
//         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
//         onClick={onBookNowClick} // ✅ Use parent's click handler
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default HostelCard;
import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle, FaRupeeSign, FaCheckCircle, FaBed } from 'react-icons/fa';
import Slider from 'react-slick';

// Custom CSS for sliders
const sliderStyles = `
  .room-slider .slick-slide {
    padding: 0 4px;
  }
  .room-slider .slick-dots {
    bottom: -25px;
  }
  .room-slider .slick-dots li button:before {
    font-size: 8px;
    color: #CBD5E1;
  }
  .room-slider .slick-dots li.slick-active button:before {
    color: #2563EB;
  }
  
  .image-slider .slick-slide {
    padding: 0 2px;
  }
  .image-slider .slick-dots {
    bottom: -20px;
  }
  .image-slider .slick-dots li button:before {
    font-size: 10px;
    color: #CBD5E1;
  }
  .image-slider .slick-dots li.slick-active button:before {
    color: #2563EB;
  }
`;

const HostelCard = ({ hostel, onBookNowClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const roomSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 h-full flex flex-col justify-between">
      <style>{sliderStyles}</style>
      <div>
        {/* Image slider */}
        {hostel.images && hostel.images.length > 0 ? (
          <Slider {...settings} className="image-slider">
            {hostel.images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`${hostel.name} - Image ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-xl mb-2"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No image available</span>
          </div>
        )}

        {/* Hostel Info */}
        <h3 className="text-lg font-semibold">{hostel.name}</h3>

        <p className="text-sm text-gray-600 flex items-center mt-1">
          <FaMapMarkerAlt className="mr-1 text-blue-600" />
          {hostel.location}
        </p>

        <p className="text-sm text-gray-600 flex items-center mt-1">
          <FaInfoCircle className="mr-1 text-green-600" />
          {hostel.description}
        </p>

        {/* Room Types as sliding cards */}
        <div className="mt-3">
          <p className="font-medium mb-2 text-gray-800">Room Types:</p>
          {hostel.roomTypes && hostel.roomTypes.length > 0 ? (
            <Slider {...roomSliderSettings} className="room-slider">
              {hostel.roomTypes.map((room, idx) => (
                <div key={idx}>
                  <div className="border-2 border-blue-200 rounded-xl shadow-md p-4 text-center bg-gradient-to-br from-blue-50 to-white mx-2">
                    <div className="flex justify-center items-center mb-2">
                      <FaBed className="text-blue-600 text-2xl mr-2" />
                      <span className="text-base font-semibold text-gray-800">{room.type}</span>
                    </div>
                    <p className="text-gray-700 font-medium text-lg">
                      ₹{room.price}/month
                    </p>
                    <p className="text-green-600 text-sm mt-1 font-semibold flex items-center justify-center">
                      <FaCheckCircle className="mr-1" /> Available
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-4 text-gray-500">
              <p>No room types available</p>
            </div>
          )}
        </div>

        {/* Amenities */}
        {/* Amenities */}
<div className="mt-4">
  <p className="font-medium mb-2">Amenities:</p>
  <div className="flex flex-wrap gap-2">
    {hostel.amenities?.slice(0, 5).map((item, idx) => (
      <span
        key={idx}
        className="px-3 py-1 bg-gray-100 text-sm rounded-lg shadow-sm border border-gray-200 flex items-center"
      >
        <FaCheckCircle className="mr-1 text-green-500" />
        {item}
      </span>
    ))}

    {/* Show '+X more' if there are extra amenities */}
    {hostel.amenities?.length > 5 && (
      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg font-medium cursor-pointer">
        +{hostel.amenities.length - 5} more...
      </span>
    )}
  </div>
</div>

      </div>

      {/* Book Now button */}
      <button
        className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:scale-105"
        onClick={onBookNowClick}
      >
        Book Now
      </button>
    </div>
  );
};

export default HostelCard;

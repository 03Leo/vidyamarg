import React from 'react';
import { useSelector } from 'react-redux';
import CollegeCard from '../components/CollegeCard';
import HostelCard from '../components/HostelCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const colleges = useSelector((state) => state.data.colleges);
  const hostels = useSelector((state) => state.data.hostels);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Colleges</h2>
      <Slider {...settings}>
        {colleges.map((college) => (
          <div key={college.id} className="px-2">
            <CollegeCard college={college} />
          </div>
        ))}
      </Slider>

      <h2 className="text-2xl font-bold mt-10 mb-4">Hostels</h2>
      <Slider {...settings}>
        {hostels.map((hostel) => (
          <div key={hostel.id} className="px-2">
            <HostelCard hostel={hostel} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;

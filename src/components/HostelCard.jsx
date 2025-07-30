import React from 'react';

const HostelCard = ({ hostel, location, description }) => {
  return (
    <div className="p-4 m-2 border rounded shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="font-bold text-lg">#{hostel.id}: {hostel.name}</h3>
        <p className="text-sm text-gray-600">{hostel.location}</p>
        <p className="text-sm mt-2">{hostel.description}</p>
      </div>
      <button className="mt-4 bg-green-600 text-white py-1 px-3 rounded">Book Now</button>
    </div>
  );
};

export default HostelCard;

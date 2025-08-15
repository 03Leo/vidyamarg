// src/components/BookNowForm.jsx
import React, { useState } from 'react';

const BookNowForm = ({ onClose, hostel }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    locationPreference: '',
    educationDomain: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedData = {
      ...formData,
      age: parseInt(formData.age, 10),
      mobile: formData.mobile.trim(),
      hostelId: hostel?.id,
      hostelName: hostel?.name,
    };

    console.log('📦 Booking Info:', cleanedData);
    try {
    const response = await fetch(`${'https://vidyamargbackend.onrender.com' || 'https://localhost:5000'}/api/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
    });

    const result = await response.json();
    console.log('📧 Email Response:', result);
    if (response.ok) {
      alert('✅ Booking request sent successfully!');
    } else {
      alert(`❌ Error: ${result.message || 'Failed to send booking request.'}`);
    }

  } catch (error) {
    console.error('❌ Error sending booking:', error);
    alert('❌ Something went wrong.');
  }
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Book Now
        </h2>
        {hostel && (
          <p className="text-sm text-gray-500 mb-4">
            Booking for: <span className="font-medium">{hostel.name}</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.age}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.mobile}
            required
          />
          <input
            name="locationPreference"
            type="text"
            placeholder="Location Preference"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.locationPreference}
          />
          <select
            name="educationDomain"
            className="w-full border rounded p-2"
            onChange={handleChange}
            value={formData.educationDomain}
            required
          >
            <option value="">Select Education Domain</option>
            <option value="IIT">IIT</option>
            <option value="Medical">Medical</option>
            <option value="General">General</option>
            <option value="CA">CA</option>
          </select>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-1/2 mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-black w-1/2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;

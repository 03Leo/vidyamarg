import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollege, addHostel } from '../store/dataSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState('college');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [roomTypesInput, setRoomTypesInput] = useState('');
  const [amenitiesInput, setAmenitiesInput] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const readers = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((imageData) => setImages(imageData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const roomTypes = roomTypesInput.split(',').map((item) => {
      const [type, price] = item.split(':');
      return { type: type.trim(), price: parseFloat(price) };
    });
    const amenities = amenitiesInput.split(',').map((a) => a.trim());

    const payload = {
      name,
      location,
      description,
      images,
      roomTypes,
      amenities,
    };

    if (type === 'college') {
      dispatch(addCollege(payload));
    } else {
      dispatch(addHostel(payload));
    }

    // Clear form
    setName('');
    setLocation('');
    setDescription('');
    setImages([]);
    setRoomTypesInput('');
    setAmenitiesInput('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="college">College</option>
          <option value="hostel">Hostel</option>
        </select>

        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          required
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-2 w-full"
        />

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="border rounded p-2 w-full"
        />

        <input
          type="text"
          placeholder="Room Types (e.g. Single:5000, Double:8000)"
          value={roomTypesInput}
          onChange={(e) => setRoomTypesInput(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Amenities (comma-separated)"
          value={amenitiesInput}
          onChange={(e) => setAmenitiesInput(e.target.value)}
          className="border rounded p-2 w-full"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
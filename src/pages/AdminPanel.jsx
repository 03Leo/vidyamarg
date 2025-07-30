import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollege, addHostel } from '../store/dataSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();

  // College States
  const [collegeName, setCollegeName] = useState('');
  const [collegeLocation, setCollegeLocation] = useState('');
  const [collegeDescription, setCollegeDescription] = useState('');

  // Hostel States
  const [hostelName, setHostelName] = useState('');
  const [hostelLocation, setHostelLocation] = useState('');
  const [hostelDescription, setHostelDescription] = useState('');

  const handleAddCollege = () => {
    if (collegeName.trim() && collegeLocation.trim() && collegeDescription.trim()) {
      dispatch(
        addCollege({
          name: collegeName,
          location: collegeLocation,
          description: collegeDescription,
        })
      );
      setCollegeName('');
      setCollegeLocation('');
      setCollegeDescription('');
    }
  };

  const handleAddHostel = () => {
    if (hostelName.trim() && hostelLocation.trim() && hostelDescription.trim()) {
      dispatch(
        addHostel({
          name: hostelName,
          location: hostelLocation,
          description: hostelDescription,
        })
      );
      setHostelName('');
      setHostelLocation('');
      setHostelDescription('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      {/* College Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add College</h3>
        <input
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
        <input
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="Location"
          value={collegeLocation}
          onChange={(e) => setCollegeLocation(e.target.value)}
        />
        <textarea
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="Description"
          rows={3}
          value={collegeDescription}
          onChange={(e) => setCollegeDescription(e.target.value)}
        ></textarea>
        <br />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddCollege}
        >
          Add College
        </button>
      </div>

      {/* Hostel Form */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Add Hostel</h3>
        <input
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="Hostel Name"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
        />
        <input
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="Location"
          value={hostelLocation}
          onChange={(e) => setHostelLocation(e.target.value)}
        />
        <textarea
          className="border p-2 mr-2 mb-2 w-full sm:w-1/2"
          placeholder="Description"
          rows={3}
          value={hostelDescription}
          onChange={(e) => setHostelDescription(e.target.value)}
        ></textarea>
        <br />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAddHostel}
        >
          Add Hostel
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;

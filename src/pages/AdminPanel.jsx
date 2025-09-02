import React, { useState } from 'react';

const commonAmenitiesList = [
  "Food (3 / 4 times)", "WiFi", "Washing Machine", "Parking", "Water Cooler", "RO Water", 
  "Fridge", "Room Cleaning (Days per week)", "Warden", "CCTV", "Lift", "Induction", 
  "Washroom Type (Indian / Western / Both)", "Library", "Power Backup", "Transport Facility",
  "Terrace Access (Yes / No)", "Common Area", "Guest Room for Parents",
  "Air Conditioning / Cooling (Fans, Coolers, AC)", "Guest Policy (Parents/Family)", 
  "Food Adequacy (Portion Size)", "Festive/Special Meals", "Outside Food Tie-ups",
  "Washroom-to-Student Ratio", "Waste Segregation & Eco-friendly (Green Rating)", 
  "Biometric/Smart-card Access", "Fire Exit & Evacuation Plan Clarity",
  "Refund & Cancellation Policy", "Digital Payments (UPI, Card, Net Banking)",
  "Communication & Student Support (Helpline/WhatsApp)", "Inclusivity & Diversity Environment",
  "Convenience Nearby (Shops, ATMs, Cafés)", "Safety CCTV Camera", "Fire Fighting System",
  "First Aid Kit", "Medical Facilities", "Security Guard"
];

const inroomAmenitiesList = [
  "In-room Bed Box/Chauki", "In-room Study Table", "In-room Chair", 
  "In-room Wardrobe", "In-room Fan", "In-room AC", "In-room Cooler", 
  "In-room Attached Washroom"
];

const roomTypesList = [
  "Single Room Wall", "Single Room Partition", "Single Room with Attached Washroom",
  "Double Sharing Wall", "Double Sharing with Attached Washroom", 
  "Double Sharing with Attached Washroom and Balcony", "Double Sharing Partition",
  "Triple Sharing Wall", "Triple Sharing with Attached Washroom",
  "Triple Sharing with Attached Washroom and Balcony", "Triple Sharing with Balcony",
  "Four Sharing", "Four Sharing with Attached Washroom", "Four Sharing with Attached Balcony"
];

const AdminPanel = () => {
  // Hostel Info
  const [hostelName, setHostelName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [gender, setGender] = useState("Boys");
  const [address, setAddress] = useState("");
  const [areaTag, setAreaTag] = useState("");
  const [subAreaTag, setSubAreaTag] = useState("");
  const [totalBeds, setTotalBeds] = useState("");
  const [bedsAvailable, setBedsAvailable] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [aboutHostel, setAboutHostel] = useState("");
  const [buildingAgeYears, setBuildingAgeYears] = useState("");

  // Amenities
  const [commonAmenities, setCommonAmenities] = useState([]);
  const [inroomAmenities, setInroomAmenities] = useState([]);

  // Room Types
  const [roomTypes, setRoomTypes] = useState([]);

  const toggleAmenity = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const addRoomType = () => {
    setRoomTypes([...roomTypes, { room_type: "", price: "", deposit: "", frequency: "Monthly", size: "" }]);
  };

  const updateRoomType = (index, field, value) => {
    const updated = [...roomTypes];
    updated[index][field] = value;
    setRoomTypes(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      hostel_information: {
        hostel_name: hostelName,
        owner_name: ownerName,
        gender,
        address,
        common_amenities: commonAmenities,
        inroom_amenities: inroomAmenities,
        area_tag: areaTag,
        sub_area_tag: subAreaTag,
        total_beds: parseInt(totalBeds),
        beds_available: parseInt(bedsAvailable),
        contact_number: contactNumber,
        email_id: emailId,
        about_hostel: aboutHostel,
        building_age_years: parseInt(buildingAgeYears)
      },
      hostel_room_types: roomTypes
    };

    console.log("Final JSON:", payload);

    // send to backend API
    try {
      const res = await fetch("http://localhost:5000/api/hostels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      console.log("Saved:", data);
    } catch (error) {
      console.error("Error saving hostel:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Hostel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Hostel Info */}
        <input type="text" placeholder="Hostel Name" value={hostelName} onChange={(e) => setHostelName(e.target.value)} className="border p-2 w-full" required />
        <input type="text" placeholder="Owner Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className="border p-2 w-full" />
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="border p-2 w-full">
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
        <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 w-full" />
        <input type="text" placeholder="Area Tag" value={areaTag} onChange={(e) => setAreaTag(e.target.value)} className="border p-2 w-full" />
        <input type="text" placeholder="Sub Area Tag" value={subAreaTag} onChange={(e) => setSubAreaTag(e.target.value)} className="border p-2 w-full" />
        <input type="number" placeholder="Total Beds" value={totalBeds} onChange={(e) => setTotalBeds(e.target.value)} className="border p-2 w-full" />
        <input type="number" placeholder="Beds Available" value={bedsAvailable} onChange={(e) => setBedsAvailable(e.target.value)} className="border p-2 w-full" />
        <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="border p-2 w-full" />
        <input type="email" placeholder="Email ID" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="border p-2 w-full" />
        <textarea placeholder="About Hostel" value={aboutHostel} onChange={(e) => setAboutHostel(e.target.value)} className="border p-2 w-full" />
        <input type="number" placeholder="Building Age (years)" value={buildingAgeYears} onChange={(e) => setBuildingAgeYears(e.target.value)} className="border p-2 w-full" />

        {/* Common Amenities */}
        <h3 className="font-semibold">Common Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {commonAmenitiesList.map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input type="checkbox" checked={commonAmenities.includes(item)} onChange={() => toggleAmenity(commonAmenities, setCommonAmenities, item)} />
              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* In-room Amenities */}
        <h3 className="font-semibold mt-4">In-room Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {inroomAmenitiesList.map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input type="checkbox" checked={inroomAmenities.includes(item)} onChange={() => toggleAmenity(inroomAmenities, setInroomAmenities, item)} />
              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* Room Types */}
        <h3 className="font-semibold mt-4">Room Pricing</h3>
        {roomTypes.map((room, index) => (
          <div key={index} className="border p-3 rounded">
            <select value={room.room_type} onChange={(e) => updateRoomType(index, "room_type", e.target.value)} className="border p-2 w-full">
              <option value="">Select Room Type</option>
              {roomTypesList.map((rt) => (
                <option key={rt} value={rt}>{rt}</option>
              ))}
            </select>
            <input type="number" placeholder="Price per Person" value={room.price} onChange={(e) => updateRoomType(index, "price", e.target.value)} className="border p-2 w-full mt-2" />
            <input type="number" placeholder="Security Deposit" value={room.deposit} onChange={(e) => updateRoomType(index, "deposit", e.target.value)} className="border p-2 w-full mt-2" />
            <select value={room.frequency} onChange={(e) => updateRoomType(index, "frequency", e.target.value)} className="border p-2 w-full mt-2">
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Annual">Annual</option>
            </select>
            <input type="number" placeholder="Room Size (sqft)" value={room.size} onChange={(e) => updateRoomType(index, "size", e.target.value)} className="border p-2 w-full mt-2" />
          </div>
        ))}
        <button type="button" onClick={addRoomType} className="bg-gray-600 text-white px-4 py-2 rounded">+ Add Room</button>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Save Hostel</button>
      </form>
    </div>
  );
};

export default AdminPanel;

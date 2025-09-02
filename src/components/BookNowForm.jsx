// src/components/BookNowForm.jsx
import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, GraduationCap, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const BookNowForm = ({ onClose, hostel }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    locationPreference: '',
    educationDomain: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 16 || formData.age > 100) {
      newErrors.age = 'Age must be between 16 and 100';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.educationDomain) {
      newErrors.educationDomain = 'Please select an education domain';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const cleanedData = {
      ...formData,
      age: parseInt(formData.age, 10),
      mobile: formData.mobile.trim(),
      hostelId: hostel?.id,
      hostelName: hostel?.name,
    };

    try {
    const response = await fetch(`${'https://vidyamargbackend.onrender.com' || 'https://localhost:5000'}/api/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
    });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error(result.message || 'Failed to send booking request.');
      }
    } catch (error) {
      console.error('Error sending booking:', error);
      setErrors({ submit: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ name, label, type, placeholder, icon: Icon, required = false, options = null }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon size={18} className="text-gray-400" />
        </div>
        {options ? (
          <select
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors[name] ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            required={required}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors[name] ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            required={required}
          />
        )}
      </div>
      {errors[name] && (
        <p className="text-sm text-red-600 flex items-center">
          <AlertCircle size={14} className="mr-1" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-2xl w-full max-w-md text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking Request Sent!</h3>
          <p className="text-gray-600">We'll get back to you soon with more details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Book Your Hostel</h2>
              {hostel && (
                <p className="text-sm text-gray-600 mt-1">
                  Booking for: <span className="font-semibold text-blue-600">{hostel.name}</span>
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                name="name"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                icon={User}
                required
              />
              <InputField
                name="age"
                label="Age"
                type="number"
                placeholder="Enter your age"
                icon={Calendar}
                required
              />
            </div>

            <InputField
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              icon={Mail}
              required
            />

            <InputField
              name="mobile"
              label="Mobile Number"
              type="tel"
              placeholder="Enter your mobile number"
              icon={Phone}
              required
            />

            <InputField
              name="locationPreference"
              label="Location Preference"
              type="text"
              placeholder="Preferred area or locality"
              icon={MapPin}
            />

            <InputField
              name="educationDomain"
              label="Education Domain"
              placeholder="Select your field of study"
              icon={GraduationCap}
              required
              options={[
                { value: 'IIT', label: 'IIT (Engineering)' },
                { value: 'Medical', label: 'Medical' },
                { value: 'General', label: 'General Studies' },
                { value: 'CA', label: 'CA (Chartered Accountancy)' },
                { value: 'Other', label: 'Other' },
              ]}
            />

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Booking Request'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowForm;

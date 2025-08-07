import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center'>
            <div
                className="w-full h-[40vh] bg-black bg-opacity-40 bg-cover bg-center flex items-center justify-center text-center"
                style={{
                    backgroundImage: "", // replace with your actual image path
                }}
            >
                <div className=" p-6 rounded-lg text-white max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Hostel</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Comfortable, affordable, and convenient hostels curated just for you.
                    </p>
                    <button
                        //   onClick={}
                        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 font-medium transition"
                    >
                        Explore Hostels
                    </button>
                </div>
            </div>
            <div className="w-full bg-center flex flex-col items-center justify-center text-center p-6 rounded-lg text-black max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Your One-Stop Destination for Students</h1>
                <p className="text-md md:text-lg mb-6">
                    Discover the perfect hostels, colleges, and coaching institutes tailored to your needs.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;

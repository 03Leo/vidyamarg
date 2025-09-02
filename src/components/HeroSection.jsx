import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users, Star } from 'lucide-react';

const HeroSection = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { icon: Users, value: "500+", label: "Happy Students" },
        { icon: MapPin, value: "50+", label: "Premium Hostels" },
        { icon: Star, value: "4.8", label: "Average Rating" }
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Hero Background */}
            <div className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Find Your
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                                    Dream Hostel
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
                                Comfortable, affordable, and convenient hostels curated just for you. 
                                Your perfect student accommodation awaits.
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={() => document.getElementById('hostels-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
                                >
                                    <Search size={20} />
                                    <span>Explore Hostels</span>
                                </button>
                                <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:-translate-y-1 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Your One-Stop Destination for Students
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                            Discover the perfect hostels, colleges, and coaching institutes tailored to your needs. 
                            Join thousands of students who trust us for their accommodation needs.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index}
                                    className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                                        <stat.icon size={32} className="text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="relative">
                <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;

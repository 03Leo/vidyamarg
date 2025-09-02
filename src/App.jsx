import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchHostels } from './store/dataSlice'; // ✅ import thunk
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import SupportPage from './pages/SupportPage';
import { Menu, X } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // ✅ Fetch hostel data on app load
  useEffect(() => {
    dispatch(fetchHostels());
  }, [dispatch]);

  return (
    <Router>
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-bold">
            Vidyamarg
          </Link>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0`}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-2 py-1 hover:bg-blue-700 rounded"
            >
              Home
            </Link>
            <Link
              to="/support"
              onClick={() => setIsOpen(false)}
              className="block px-2 py-1 hover:bg-blue-700 rounded"
            >
              Support
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-2 py-1 hover:bg-blue-700 rounded"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
};

export default App;

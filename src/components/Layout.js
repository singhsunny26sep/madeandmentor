import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaHome, FaUser, FaHeart, FaHandHoldingHeart, FaUsers, FaPhone, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from "../img/logo.jpeg";
import { Link } from 'react-router-dom';

const Layout = ({ children, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About", icon: <FaUser />, path: "/about" },
    { name: "Mate", icon: <FaHeart />, path: "/mate" },
    { name: "Emotional Care", icon: <FaHandHoldingHeart />, path: "/emotional-care" },
    { name: "Mentors", icon: <FaUsers />, path: "/mentors" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8BFE7] to-[#E8E5F5]">
      {/* Top Bar */}
      <div className="bg-purple-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">📞 +1 (555) 123-4567</span>
            <span className="flex items-center gap-1">✉️ support@mentorconnect.com</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-purple-200 transition">
              <FaSignInAlt /> Login
            </button>
            <button className="bg-white text-purple-900 px-4 py-1 rounded-full hover:bg-purple-100 transition flex items-center gap-1">
              <FaUserPlus /> Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-[#b799ff] via-[#c8bfe7] to-[#e3d7ff] shadow-xl backdrop-blur-lg bg-opacity-95 px-6 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-lg" src={logo} alt="Mentor Connect" />
            <div>
              <h1 className="text-2xl font-bold text-purple-900">MentorConnect</h1>
              <p className="text-sm text-purple-700 hidden sm:block">Find Your Perfect Guide</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-2 text-gray-800 font-semibold text-lg items-center">
            {navigationItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-2 cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg ${
                    activePage === item.name 
                      ? "text-purple-900 font-bold bg-white/50 shadow-md" 
                      : "hover:text-purple-700 hover:bg-white/30"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
                <span className={`absolute bottom-0 left-0 h-1 bg-purple-700 rounded-full transition-all duration-300 ${
                  activePage === item.name ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </li>
            ))}
          </ul>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center bg-white/80 p-2 px-4 rounded-full shadow-md backdrop-blur-md border border-white/40 w-64">
            <FaSearch className="text-purple-600 mr-2" />
            <input
              type="text"
              placeholder="Search mentors..."
              className="bg-transparent outline-none text-gray-700 placeholder-gray-600 w-full"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-purple-900 p-2 rounded-lg hover:bg-white/50 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden container mx-auto mt-4 bg-white/90 rounded-2xl shadow-xl p-6 backdrop-blur-lg border border-white/40">
            {/* Mobile Search */}
            <div className="flex items-center bg-white p-3 rounded-full shadow-md border border-purple-200 mb-4">
              <FaSearch className="text-purple-600 mr-3" />
              <input
                type="text"
                placeholder="Search mentors..."
                className="bg-transparent outline-none text-gray-700 placeholder-gray-600 flex-1"
              />
            </div>

            {/* Mobile Navigation */}
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all duration-300 ${
                      activePage === item.name
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-white/50 text-gray-800 hover:bg-purple-100"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-purple-200">
              <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition shadow-lg flex items-center justify-center gap-2">
                <FaSignInAlt /> Login
              </button>
              <button className="flex-1 bg-white text-purple-900 py-3 rounded-xl hover:bg-purple-50 transition shadow-lg border border-purple-200 flex items-center justify-center gap-2">
                <FaUserPlus /> Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
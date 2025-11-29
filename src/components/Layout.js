import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaHome, FaUser, FaHeart, FaHandHoldingHeart, FaUsers, FaPhone, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from "../img/logo.jpeg";
import { Link } from 'react-router-dom';

const Layout = ({ children, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    // { name: "About", icon: <FaUser />, path: "/about" },
    { name: "Mate", icon: <FaHeart />, path: "/mate" },
    // { name: "Emotional Health", icon: <FaHandHoldingHeart />, path: "/emotional-care" },
    { name: "Mentors", icon: <FaUsers />, path: "/mentors" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8BFE7] to-[#E8E5F5]">
      {/* Top Bar - Responsive */}
      <div className="bg-purple-900 text-white py-2 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="hidden xs:inline">📞</span> +1 (555) 123-4567
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <span className="hidden xs:inline">✉️</span> support@mentorconnect.com
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-1 hover:text-purple-200 transition text-xs sm:text-sm">
              <FaSignInAlt className="text-xs" /> <span className="hidden sm:inline">Login</span>
            </button>
            <button className="bg-white text-purple-900 px-3 sm:px-4 py-1 rounded-full hover:bg-purple-100 transition flex items-center gap-1 text-xs sm:text-sm">
              <FaUserPlus className="text-xs" /> <span className="hidden sm:inline">Sign Up</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-[#b799ff] via-[#c8bfe7] to-[#e3d7ff] shadow-xl backdrop-blur-lg bg-opacity-95 px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo - Responsive */}
          <Link to="/" className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <img 
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-white shadow-lg" 
              src={logo} 
              alt="Mentor Connect" 
            />

            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-purple-900">MentorConnect</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-1 xl:gap-2 text-gray-800 font-semibold text-sm xl:text-lg items-center">
            {navigationItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 xl:gap-2 cursor-pointer transition-all duration-300 px-2 xl:px-4 py-2 rounded-lg ${
                    activePage === item.name 
                      ? "text-purple-900 font-bold bg-white/50 shadow-md" 
                      : "hover:text-purple-700 hover:bg-white/30"
                  }`}
                >
                  <span className="text-sm xl:text-base">{item.icon}</span>
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
                <span className={`absolute bottom-0 left-0 h-1 bg-purple-700 rounded-full transition-all duration-300 ${
                  activePage === item.name ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </li>
            ))}
          </ul>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex items-center bg-white/80 p-1 sm:p-2 px-3 sm:px-4 rounded-full shadow-md backdrop-blur-md border border-white/40 w-48 sm:w-64 flex-shrink-0">
            <FaSearch className="text-purple-600 mr-1 sm:mr-2 text-sm" />
            <input
              type="text"
              placeholder="Search by name..."
              className="bg-transparent outline-none text-gray-700 placeholder-gray-600 w-full text-sm sm:text-base"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl sm:text-3xl text-purple-900 p-2 rounded-lg hover:bg-white/50 transition flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white/95 rounded-l-2xl shadow-2xl p-6 overflow-y-auto">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-purple-300 shadow-lg" 
                    src={logo} 
                    alt="Mentor Connect" 
                  />
                  <div>
                    <h1 className="text-lg font-bold text-purple-900">MentorConnect</h1>
                    <p className="text-xs text-purple-600">Find Your Perfect Guide</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-purple-900 p-2 hover:bg-purple-100 rounded-lg transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="flex items-center bg-white p-3 rounded-xl shadow-lg border border-purple-200 mb-6">
                <FaSearch className="text-purple-600 mr-3" />
                <input
                  type="text"
                  placeholder="Search mentors..."
                  className="bg-transparent outline-none text-gray-700 placeholder-gray-600 flex-1 text-base"
                />
              </div>

              {/* Mobile Navigation */}
              <ul className="space-y-2 mb-6">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 w-full text-left p-4 rounded-xl transition-all duration-300 text-base ${
                        activePage === item.name
                          ? "bg-purple-600 text-white shadow-lg"
                          : "bg-purple-50 text-gray-800 hover:bg-purple-100 border border-purple-200"
                      }`}
                    >
                      <span className={`text-lg ${activePage === item.name ? 'text-white' : 'text-purple-600'}`}>
                        {item.icon}
                      </span>
                      <span className="font-semibold">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Contact Info */}
              <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Contact Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-purple-700">
                    <span>📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <span>✉️</span>
                    <span>support@mentorconnect.com</span>
                  </div>
                </div>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="flex gap-3 pt-4 border-t border-purple-200">
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition shadow-lg flex items-center justify-center gap-2 text-sm font-semibold">
                  <FaSignInAlt /> Login
                </button>
                <button className="flex-1 bg-white text-purple-900 py-3 rounded-xl hover:bg-purple-50 transition shadow-lg border border-purple-200 flex items-center justify-center gap-2 text-sm font-semibold">
                  <FaUserPlus /> Sign Up
                </button>
              </div>
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
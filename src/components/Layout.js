import React, { useState } from 'react';
import { 
  FaSearch, FaBars, FaTimes, FaHome, FaUser, FaHeart, 
  FaUsers, FaWhatsapp, FaSignInAlt, FaUserPlus, FaBell, 
  FaEnvelope, FaStar, FaInstagram, FaTwitter, FaFacebookF, 
  FaLinkedinIn 
} from 'react-icons/fa';
import logo from "../img/logo- final.png";
import { Link } from 'react-router-dom';

const Layout = ({ children, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications] = useState(3);

  const navigationItems = [
    { name: "Home", icon: <FaHome />, path: "/", badge: null },
    { name: "Mate", icon: <FaHeart />, path: "/mate", badge: "New" },
    { name: "Mentors", icon: <FaUsers />, path: "/mentors", badge: "50+" },
    { name: "Contact", icon: <FaWhatsapp />, path: "/contact", badge: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F7FF] via-[#F0EDFF] to-[#E8E3FF]">
      {/* Top Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white py-2 px-4 text-xs sm:text-sm">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-2 hover:text-purple-200 transition-all duration-300 cursor-pointer">
              <span className="text-purple-300">📞</span> 
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </span>
            <span className="hidden md:flex items-center gap-2 hover:text-purple-200 transition-all duration-300 cursor-pointer">
              <span className="text-purple-300">✉️</span> 
              <span>support@mentorconnect.com</span>
            </span>
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="text-yellow-300 font-semibold">4.9/5 Rating</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <button className="relative">
                <FaBell className="text-xl hover:text-purple-200 transition-all duration-300" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <button>
                <FaEnvelope className="text-xl hover:text-purple-200 transition-all duration-300" />
              </button>
            </div>
            <div className="h-6 w-px bg-purple-400"></div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <FaSignInAlt /> 
              <span>Login</span>
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              <FaUserPlus /> 
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100 px-4 sm:px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group"></div>
              <img 
                className="relative h-24 w-24  "
                src={logo} 
                alt="Mentor Connect" 
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Mate and Mentor
              </h1>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 mx-1 ${
                    activePage === item.name 
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-200" 
                      : "hover:bg-purple-50 text-gray-700 hover:text-purple-700 hover:shadow-md"
                  }`}
                >
                  <span className={`text-lg ${activePage === item.name ? 'text-white' : 'text-purple-600'}`}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm">{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      activePage === item.name 
                        ? 'bg-white/30 text-white' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-white/80 p-2 pl-5 pr-4 rounded-full shadow-lg border border-purple-100 backdrop-blur-sm w-56 sm:w-64">
                <FaSearch className="text-purple-500 mr-3 text-sm" />
                <input
                  type="text"
                  placeholder="Search mentors, topics..."
                  className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full text-sm"
                />
                <button className="ml-2 p-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-full hover:shadow-lg transition-all duration-300">
                  <FaSearch className="text-xs" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-white to-purple-50 shadow-lg border border-purple-100">
                {isMobileMenuOpen ? 
                  <FaTimes className="text-2xl text-purple-700" /> : 
                  <FaBars className="text-2xl text-purple-700" />
                }
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl border-l border-purple-100">
            <div className="h-full flex flex-col">
              {/* Menu Header */}
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      className="h-14 w-14 rounded-full border-4 border-white/30 shadow-xl" 
                      src={logo} 
                      alt="Mentor Connect" 
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-white">MentorConnect</h2>
                      <p className="text-purple-100 text-sm">Your Learning Journey</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <FaTimes className="text-white text-xl" />
                  </button>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white to-purple-200 flex items-center justify-center">
                    <FaUser className="text-purple-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Welcome to MentorConnect!</h3>
                    <p className="text-purple-100 text-sm">Join our community of learners</p>
                  </div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Search */}
                <div className="mb-6">
                  <div className="flex items-center bg-white p-3 rounded-2xl shadow-lg border border-purple-100">
                    <FaSearch className="text-purple-500 mr-3" />
                    <input
                      type="text"
                      placeholder="Search mentors..."
                      className="flex-1 bg-transparent outline-none text-gray-700"
                    />
                  </div>
                </div>

                {/* Navigation Items */}
                <ul className="space-y-3 mb-8">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          activePage === item.name
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl"
                            : "bg-white hover:bg-purple-50 text-gray-700 shadow-md hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-xl ${activePage === item.name ? 'text-white' : 'text-purple-600'}`}>
                            {item.icon}
                          </span>
                          <span className="font-semibold text-lg">{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            activePage === item.name
                              ? 'bg-white/30 text-white'
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="bg-purple-50 p-4 rounded-2xl text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">50+</div>
                    <div className="text-xs text-gray-600">Mentors</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-2xl text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">4.9</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-2xl text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">1k+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 text-lg font-semibold">
                    <FaSignInAlt /> Login to Account
                  </button>
                  <button className="w-full bg-white text-purple-700 py-4 rounded-2xl hover:bg-purple-50 hover:shadow-xl transition-all duration-300 shadow-lg border-2 border-purple-200 flex items-center justify-center gap-3 text-lg font-semibold">
                    <FaUserPlus /> Create Account
                  </button>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-purple-200">
                  <p className="text-center text-gray-500 mb-4">Follow Us</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaInstagram />
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaFacebookF />
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
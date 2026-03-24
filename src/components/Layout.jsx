import React, { useState, useRef, useEffect } from 'react';
import { 
  FaSearch, FaBars, FaTimes, FaHome, FaUser, FaHeart, 
  FaUsers, FaWhatsapp, FaInstagram, FaTwitter, FaFacebookF, 
  FaLinkedinIn, FaSignInAlt, FaUserPlus, FaChevronDown, FaVideo,
  FaWallet, FaRupeeSign 
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import logo from "../img/logo- final.png";
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children, activePage }) => {
  const { isAuthenticated, walletBalance, logout, refreshWalletBalance } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Refresh wallet balance when component mounts (for authenticated users)
  useEffect(() => {
    if (isAuthenticated) {
      refreshWalletBalance();
    }
  }, [isAuthenticated, refreshWalletBalance]);

  const handleSearchFocus = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
    }
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      // Allow default tab behavior but focus the input
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 0);
    }
  };

  const navigationItems = [
    { name: "Home", icon: <FaHome />, path: "/", badge: null },
    { name: "Mate", icon: <FaHeart />, path: "/mate", badge: "" },
    { name: "Mentors", icon: <FaUsers />, path: "/mentors", badge: "" },
  

    { name: "Contact", icon: <FaWhatsapp />, path: "/contact", badge: null }
  ];

  return (
    <div className="min-h-screen bg-purple-100">
      {/* Top Bar */}
     

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100 px-4 sm:px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1  rounded-full blur duration-1000 group"></div>
              <img 
                className="relative h-24 w-24  "
                src={logo} 
                alt="Mate and Mentor" 
              />
            </div>
            <div className="sm:block">
              <h1 className="text-2xl font-bold text-purple-700">
                Mate and Mentors
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
                      ? "bg-purple-600 text-white shadow-lg" 
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
          <div className="flex items-center gap-3" ref={dropdownRef}>
            {/* Wallet Balance Display */}
            {isAuthenticated && (
              <Link
                to="/wallet"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition-colors"
              >
                <FaWallet />
                <FaRupeeSign className="text-xs" />
                {walletBalance}
              </Link>
            )}
            {/* Login Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-100 text-purple-700 rounded-full font-semibold hover:bg-purple-200 transition-colors duration-300"
              >
                <FaUser className="text-sm" />
               
                <FaChevronDown className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-purple-100 py-2 z-50 animate-fade-in">
                  {isAuthenticated ? (
                    <>
                      <button 
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/wallet');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      >
                        <FaWallet className="text-green-600" />
                        <span className="font-medium">Wallet: ₹{walletBalance}</span>
                      </button>
                      <button 
                        onClick={() => {
                          logout();
                          setIsDropdownOpen(false);
                          navigate('/');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      >
                        <FaSignInAlt className="text-red-600" />
                        <span className="font-medium">Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/login');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      >
                        <FaSignInAlt className="text-purple-600" />
                        <span className="font-medium">Login</span>
                      </button>
                      <button 
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/signup');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      >
                        <FaUserPlus className="text-pink-600" />
                        <span className="font-medium">Sign Up</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
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
              <div className="p-6 bg-purple-600">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      className="h-14 w-14 rounded-full border-4 border-white/30 shadow-xl" 
                      src={logo} 
                      alt="Mate and Mentor" 
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-white">Mate and Mentor</h2>
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
                  <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                    <FaUser className="text-purple-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Welcome to Mate and Mentor!</h3>
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
                            ? "bg-purple-600 text-white shadow-xl"
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
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-purple-50 p-4 rounded-2xl text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">50+</div>
                    <div className="text-xs text-gray-600">Mentors</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-2xl text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">1k+</div>
                    <div className="text-xs text-gray-600">Users</div>
                  </div>
                </div>

                {/* Auth Buttons - Currently disabled */}
                <div className="space-y-4">
                  <button className="w-full bg-gray-300 text-gray-500 py-4 rounded-2xl cursor-not-allowed flex items-center justify-center gap-3 text-lg font-semibold" disabled>
                    Login to Account
                  </button>
                  <button className="w-full bg-gray-200 text-gray-500 py-4 rounded-2xl cursor-not-allowed shadow-lg border-2 border-gray-300 flex items-center justify-center gap-3 text-lg font-semibold" disabled>
                    Create Account
                  </button>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-purple-200">
                  <p className="text-center text-gray-500 mb-4">Follow Us</p>
                  <div className="flex justify-center gap-4">
                    <button 
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaInstagram />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaTwitter />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaFacebookF />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <FaLinkedinIn />
                    </button>
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
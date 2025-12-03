import React, { useState } from 'react';
import { FaWhatsapp, FaVideo, FaStar, FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const allMentors = [
  {
    name: "John Doe",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true,
    skills: "Love Guide, Life Mentor",
    experience: "5+ years",
    price: 89,
    priceDisplay: "$89/hr",
    category: "relationship"
  },
  {
    name: "Priya Sharma",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    skills: "Relationship Expert",
    experience: "7+ years",
    price: 99,
    priceDisplay: "$99/hr",
    category: "relationship"
  },
  {
    name: "Amit Verma",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    online: false,
    skills: "Emotional Healing",
    experience: "4+ years",
    price: 79,
    priceDisplay: "$79/hr",
    category: "emotional"
  },
  {
    name: "Sneha Patel",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    skills: "Stress & Mood Counseling",
    experience: "6+ years",
    price: 85,
    priceDisplay: "$85/hr",
    category: "emotional"
  },
  {
    name: "Rohit Singh",
    rating: 4.6,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    online: false,
    skills: "Mindset Coach",
    experience: "3+ years",
    price: 75,
    priceDisplay: "$75/hr",
    category: "career"
  },
  {
    name: "Anjali Mehta",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    online: true,
    skills: "Life Balancing Mentor",
    experience: "8+ years",
    price: 95,
    priceDisplay: "$95/hr",
    category: "life"
  }
];

const categories = ["All", "Relationship", "Emotional", "Career", "Life"];
const experienceLevels = ["All levels", "1-3 years", "4-6 years", "7+ years"];
const onlineStatuses = ["All", "Online now", "Offline"];

export default function Mentor() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All levels");
  const [selectedOnlineStatus, setSelectedOnlineStatus] = useState("All");
  const [priceRange, setPriceRange] = useState([70, 100]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMentors = allMentors.filter(mentor => {
    const matchesCategory = selectedCategory === "All" || 
      mentor.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesExperience = selectedExperience === "All levels" ||
      (selectedExperience === "1-3 years" && (mentor.experience === "3+ years")) ||
      (selectedExperience === "4-6 years" && (mentor.experience === "4+ years" || mentor.experience === "5+ years" || mentor.experience === "6+ years")) ||
      (selectedExperience === "7+ years" && (mentor.experience === "7+ years" || mentor.experience === "8+ years"));
    
    const matchesOnlineStatus = selectedOnlineStatus === "All" ||
      (selectedOnlineStatus === "Online now" && mentor.online) ||
      (selectedOnlineStatus === "Offline" && !mentor.online);
    
    const matchesPrice = mentor.price >= priceRange[0] && mentor.price <= priceRange[1];
    
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.skills.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesExperience && matchesOnlineStatus && matchesPrice && matchesSearch;
  });

  return (
    <Layout activePage="Mate">
      {/* Search and Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mates by name or skills..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Toggle Button - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 bg-white border border-gray-300 px-6 py-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
            >
              <FaFilter className="text-purple-600" />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden mt-6 p-6 bg-white rounded-2xl shadow-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <FaTimes className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="70"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Online Status Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  value={selectedOnlineStatus}
                  onChange={(e) => setSelectedOnlineStatus(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {onlineStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
                
                {/* Price Range */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="70"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Experience Level
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Online Status Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Availability
                  </label>
                  <select
                    value={selectedOnlineStatus}
                    onChange={(e) => setSelectedOnlineStatus(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {onlineStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                {/* Active Filters */}
                {(selectedCategory !== "All" || selectedExperience !== "All levels" || selectedOnlineStatus !== "All" || priceRange[0] > 70 || priceRange[1] < 100) && (
                  <div className="pt-4 border-t">
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== "All" && (
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                          {selectedCategory}
                          <button onClick={() => setSelectedCategory("All")}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      )}
                      {selectedExperience !== "All levels" && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                          {selectedExperience}
                          <button onClick={() => setSelectedExperience("All levels")}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      )}
                      {selectedOnlineStatus !== "All" && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                          {selectedOnlineStatus}
                          <button onClick={() => setSelectedOnlineStatus("All")}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mates Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Available Mates ({filteredMentors.length})
                </h2>
              </div>

              {filteredMentors.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No mates found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredMentors.map((mentor, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative">
                        <img 
                          src={mentor.img} 
                          alt={mentor.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            mentor.online 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-500 text-white'
                          }`}>
                            {mentor.online ? 'Online' : 'Offline'}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                          <div className="text-2xl font-bold text-purple-600">{mentor.priceDisplay}</div>
                        </div>

                        <div className="mb-3">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-xs font-medium capitalize">
                            {mentor.category}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-4">{mentor.skills}</p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span className="font-semibold">{mentor.rating}</span>
                          </div>
                          <div className="text-gray-500 text-sm">
                            {mentor.experience}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                            <FaWhatsapp />
                            Call
                          </button>
                          <button className="px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                            <FaVideo />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
import React, { useState } from 'react';
import { FaSearch, FaStar, FaWhatsapp, FaVideo, FaFilter, FaTimes, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const mentors = [
  {
    id: 1,
    name: "Sarah Waller",
    specialties: ["Stress", "Healing"],
    description: "Helping you manage stress and find balance",
    price: 65,
    rating: 4.9,
    reviews: 127,
    available: true,
    languages: ["English", "Spanish"],
    experience: "5+ years",
    image: "https://images.unsplash.com/photo-1551836026-d5c88acf2d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "James R. Brown",
    specialties: ["Strong", "Anxiety", "Support"],
    description: "Providing support for those with anxiety",
    price: 70,
    rating: 4.8,
    reviews: 89,
    available: false,
    languages: ["English"],
    experience: "7+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Dana Patel",
    specialties: ["Expression", "Grief"],
    description: "Encouraging emotional expression",
    price: 55,
    rating: 4.7,
    reviews: 203,
    available: true,
    languages: ["English", "Hindi"],
    experience: "4+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Lucas Nguyen",
    specialties: ["Motivation", "Burnout"],
    description: "Assisting with motivation and calming down",
    price: 60,
    rating: 4.9,
    reviews: 156,
    available: false,
    languages: ["English", "Vietnamese"],
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Maria Garcia",
    specialties: ["Anxiety", "Mindfulness"],
    description: "Guiding through mindfulness practices",
    price: 75,
    rating: 5.0,
    reviews: 94,
    available: true,
    languages: ["English", "Spanish"],
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "David Chen",
    specialties: ["Burnout", "Stress"],
    description: "Professional burnout recovery specialist",
    price: 80,
    rating: 4.8,
    reviews: 178,
    available: true,
    languages: ["English", "Mandarin"],
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const allSpecialties = [
  "Stress Relier", "Overthinking", "Anxiety", "Venting", "Burnout", "Mindfulness", "Grief", "Motivation"
];

const languages = ["All languages", "English", "Spanish", "Hindi", "Vietnamese", "Mandarin"];

export default function Mentors() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("All languages");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtySearch, setSpecialtySearch] = useState("");

  const toggleSpecialty = (specialty) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  // Filter specialties based on search
  const filteredSpecialties = allSpecialties.filter(specialty =>
    specialty.toLowerCase().includes(specialtySearch.toLowerCase())
  );

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialties = selectedSpecialties.length === 0 || 
                              selectedSpecialties.some(specialty => 
                                mentor.specialties.some(s => 
                                  specialty.toLowerCase().includes(s.toLowerCase())
                                )
                              );
    
    const matchesLanguage = selectedLanguage === "All languages" || 
                           mentor.languages.includes(selectedLanguage);
    
    const matchesPrice = mentor.price >= priceRange[0] && mentor.price <= priceRange[1];
    
    return matchesSearch && matchesSpecialties && matchesLanguage && matchesPrice;
  });

  return (
    <Layout activePage="Mentors">
      {/* Hero Section */}
  

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
                  placeholder="Search mentors by name or specialty..."
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
              {selectedSpecialties.length > 0 && (
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {selectedSpecialties.length}
                </span>
              )}
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
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
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Specialties Filter with Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialties
                </label>
                
                {/* Search Bar for Specialties */}
                <div className="relative mb-3">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search specialties..."
                    className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    value={specialtySearch}
                    onChange={(e) => setSpecialtySearch(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {filteredSpecialties.length > 0 ? (
                    filteredSpecialties.map(specialty => (
                      <button
                        key={specialty}
                        onClick={() => toggleSpecialty(specialty)}
                        className={`px-3 py-2 rounded-xl text-sm border transition-colors duration-200 ${
                          selectedSpecialties.includes(specialty)
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-purple-500'
                        }`}
                      >
                        {specialty}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-4 text-gray-500 text-sm">
                      No specialties found matching "{specialtySearch}"
                    </div>
                  )}
                </div>
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
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Specialties with Search */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Specialties
                  </label>
                  
                  {/* Search Bar for Specialties */}
                  <div className="relative mb-4">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Search specialties..."
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      value={specialtySearch}
                      onChange={(e) => setSpecialtySearch(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                    {filteredSpecialties.length > 0 ? (
                      filteredSpecialties.map(specialty => (
                        <button
                          key={specialty}
                          onClick={() => toggleSpecialty(specialty)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-sm border transition-colors duration-200 ${
                            selectedSpecialties.includes(specialty)
                              ? 'bg-purple-600 text-white border-purple-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-purple-500'
                          }`}
                        >
                          {specialty}
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        No specialties found matching "{specialtySearch}"
                      </div>
                    )}
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedSpecialties.length > 0 || selectedLanguage !== "All languages") && (
                  <div className="pt-4 border-t">
                    <div className="flex flex-wrap gap-2">
                      {selectedSpecialties.map(specialty => (
                        <span key={specialty} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                          {specialty}
                          <button onClick={() => toggleSpecialty(specialty)}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      ))}
                      {selectedLanguage !== "All languages" && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                          {selectedLanguage}
                          <button onClick={() => setSelectedLanguage("All languages")}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Available Mentors ({filteredMentors.length})
                </h2>
              </div>

              {filteredMentors.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No mentors found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredMentors.map(mentor => (
                    <div key={mentor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            mentor.available 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-500 text-white'
                          }`}>
                            {mentor.available ? 'Available' : 'Busy'}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                          <div className="text-2xl font-bold text-purple-600">${mentor.price}</div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {mentor.specialties.map(specialty => (
                            <span key={specialty} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-xs font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 mb-4">{mentor.description}</p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span className="font-semibold">{mentor.rating}</span>
                            <span className="text-gray-500">({mentor.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <FaGlobe className="text-xs" />
                            <span>{mentor.languages.join(', ')}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {mentor.available ? (
                            <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                              <FaWhatsapp />
                              Talk Now
                            </button>
                          ) : (
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                              <FaCalendarAlt />
                              Book Session
                            </button>
                          )}
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
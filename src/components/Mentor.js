import React, { useState } from 'react';
import { FaPhoneAlt, FaVideo, FaStar, FaFilter, FaSearch } from 'react-icons/fa';
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
    price: "$89/hr",
    category: "relationship"
  },
  {
    name: "Priya Sharma",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    skills: "Relationship Expert",
    experience: "7+ years",
    price: "$99/hr",
    category: "relationship"
  },
  {
    name: "Amit Verma",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    online: false,
    skills: "Emotional Healing",
    experience: "4+ years",
    price: "$79/hr",
    category: "emotional"
  },
  {
    name: "Sneha Patel",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    skills: "Stress & Mood Counseling",
    experience: "6+ years",
    price: "$85/hr",
    category: "emotional"
  },
  {
    name: "Rohit Singh",
    rating: 4.6,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    online: false,
    skills: "Mindset Coach",
    experience: "3+ years",
    price: "$75/hr",
    category: "career"
  },
  {
    name: "Anjali Mehta",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    online: true,
    skills: "Life Balancing Mentor",
    experience: "8+ years",
    price: "$95/hr",
    category: "life"
  }
];

const categories = ["All", "Relationship", "Emotional", "Career", "Life"];

export default function Mentors() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMentors = allMentors.filter(mentor => {
    const matchesCategory = selectedCategory === "All" || 
      mentor.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.skills.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout activePage="Mentors">
      {/* Hero Section */}
    


      {/* Mentors Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMentors.map((mentor, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/40 hover:shadow-2xl group">
                <div className="relative">
                  <img src={mentor.img} alt="mentor" className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-purple-300 transition-colors duration-300" />
                  {mentor.online ? (
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  ) : (
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <h2 className="mt-3 text-xl font-bold text-gray-900">{mentor.name}</h2>
                <p className="text-gray-700 text-sm mb-1">{mentor.skills}</p>
                <p className="text-purple-600 text-sm font-semibold">{mentor.experience}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                  <FaStar />
                  <span className="text-gray-800 font-semibold">{mentor.rating}</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-purple-700 mt-2">{mentor.price}</div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <FaPhoneAlt /> Call
                  </button>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <FaVideo /> Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">No mentors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
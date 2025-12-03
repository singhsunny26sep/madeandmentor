import React from 'react';
import { FaWhatsapp, FaVideo, FaStar, FaPlay, FaUsers, FaAward, FaSmile } from 'react-icons/fa';
import Layout from '../components/Layout';

import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"
// Temporary background image - aap apni image se replace kar sakte hain
const imageBackground = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

// Agar aapki local image use karni hai toh yeh line use karein:
// import imageBackground from "../assets/img/mate background.png";

const users = [
  {
    name: "John Doe",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true,
    skills: "Love Guide, Life Mentor",
    experience: "5+ years",
    price: "$89/hr"
  },
  {
    name: "Priya Sharma",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    skills: "Relationship Expert",
    experience: "7+ years",
    price: "$99/hr"
  },
  {
    name: "Amit Verma",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    online: false,
    skills: "Emotional Healing",
    experience: "4+ years",
    price: "$79/hr"
  },
  {
    name: "Sneha Patel",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    skills: "Stress & Mood Counseling",
    experience: "6+ years",
    price: "$85/hr"
  }
];
const stats = [
  { number: "10K+", label: "Happy Clients", icon: <FaSmile className="text-3xl" /> },
  { number: "500+", label: "Expert Mentors", icon: <FaUsers className="text-3xl" /> },
  { number: "50K+", label: "Sessions", icon: <FaPlay className="text-3xl" /> },
  { number: "98%", label: "Success Rate", icon: <FaAward className="text-3xl" /> }
];
export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout activePage="Home">
      {/* Hero Section - Fixed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${imageBackground})`,
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect <span className="text-purple-300">Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
           Connect with a mate or mentor who truly understands what you need — from emotional relief to expert direction.
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => navigate("/mate")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Find a Mate
            </button>
            <button 
              onClick={() => navigate("/mentors")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Find Mentors
            </button>
          </div>

          {/* Service Types */}
     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white max-w-5xl mx-auto">
  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex-1 max-w-xs">
    <button 
      onClick={() => navigate("/mate")} 
      className="font-bold text-2xl text-purple-300 mb-3 hover:text-purple-200 transition-colors block w-full"
    >
      ❤️ Mate
    </button>
    <div className="text-white/80 text-sm">Helps you feel heard and lighter through casual conversations</div>
  </div>
 
  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex-1 max-w-xs">
    <button 
      onClick={() => navigate("/mentor")} 
      className="font-bold text-2xl text-purple-300 mb-3 hover:text-purple-200 transition-colors block w-full"
    >
      🧠 Mentor
    </button>
    <div className="text-white/80 text-sm">Helps you move forward practically with expert advice</div>
  </div>
</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-purple-600 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Guides</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Carefully selected professionals ready to guide you on your journey to personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {users.map((user, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100 hover:shadow-2xl group">
                <div className="relative mb-4">
                  <img 
                    src={user.img} 
                    alt={user.name} 
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-purple-300 transition-colors duration-300" 
                  />
                  <div className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white ${user.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{user.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{user.skills}</p>
                <p className="text-purple-600 text-sm font-semibold mb-3">{user.experience}</p>

                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                  <FaStar />
                  <span className="text-gray-800 font-semibold text-sm">{user.rating}</span>
                </div>

                <div className="text-xl font-bold text-purple-700 mb-4">{user.price}</div>

                <div className="flex gap-2 w-full">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-xl text-sm hover:bg-purple-700 transition-colors duration-300">
                    <FaWhatsapp /> Call
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-xl text-sm hover:bg-blue-700 transition-colors duration-300">
                    <FaVideo /> Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate("/mentors")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              View All Guides
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 text-lg">Simple steps to start your transformation journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { 
                step: "1", 
                title: "Choose Your Guide", 
                desc: "Browse through verified mates, mentors,  to find your perfect match" 
              },
              { 
                step: "2", 
                title: "Book a Session", 
                desc: "Schedule your session at a time that works best for you" 
              },
              { 
                step: "3", 
                title: "Begin Your Journey", 
                desc: "Start your path to emotional wellness and personal growth" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
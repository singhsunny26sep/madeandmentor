import React from 'react';
import { FaPhoneAlt, FaVideo, FaStar, FaArrowRight, FaCheck, FaPlay, FaUsers, FaAward, FaSmile } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

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
  { number: "10K+", label: "Happy Clients", icon: <FaSmile /> },
  { number: "500+", label: "Expert Mentors", icon: <FaUsers /> },
  { number: "50K+", label: "Sessions", icon: <FaPlay /> },
  { number: "98%", label: "Success Rate", icon: <FaAward /> }
];

export default function Home() {
  return (
    <Layout activePage="Home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect <span className="text-purple-700">Guide </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
           Connect with a Mate, Mentor, or Therapist who truly understands what you need — from emotional relief to expert direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:bg-purple-700 hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center gap-2">
              Mate 
            </button>
            <button className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-2xl shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center gap-2">
           Emotional Health
            </button>
                  <button className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-2xl shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center gap-2">
               Mentors
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-purple-600 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Mentors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Mentors</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Carefully selected professionals ready to guide you on your journey to personal growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {users.map((u, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/40 hover:shadow-2xl group">
                <div className="relative">
                  <img src={u.img} alt="user" className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-purple-300 transition-colors duration-300" />
                  {u.online ? (
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  ) : (
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <h2 className="mt-3 text-xl font-bold text-gray-900">{u.name}</h2>
                <p className="text-gray-700 text-sm mb-1">{u.skills}</p>
                <p className="text-purple-600 text-sm font-semibold">{u.experience}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                  <FaStar />
                  <span className="text-gray-800 font-semibold">{u.rating}</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-purple-700 mt-2">{u.price}</div>

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

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              View All Mentors
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white/50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 text-lg">Simple steps to start your journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Mentor", desc: "Browse profiles and select your perfect guide" },
              { step: "2", title: "Book Session", desc: "Schedule at your convenient time" },
              { step: "3", title: "Start Journey", desc: "Begin your transformation journey" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
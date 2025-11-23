import React from "react";
import { FaPhoneAlt, FaVideo, FaStar } from "react-icons/fa";
import logo from "../img/logo.jpeg"
import Footer from "./Footer";
const users = [
  {
    name: "John Doe",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true,
    skills: "Love Guide, Life Mentor"
  },
  {
    name: "Priya Sharma",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    skills: "Relationship Expert"
  },
  {
    name: "Amit Verma",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    online: false,
    skills: "Emotional Healing"
  },
  {
    name: "Sneha Patel",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    skills: "Stress & Mood Counseling"
  },
  {
    name: "Rohit Singh",
    rating: 4.6,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    online: false,
    skills: "Mindset Coach"
  },
  {
    name: "Anjali Mehta",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    online: true,
    skills: "Life Balancing Mentor"
  },
    {
    name: "John Doe",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true,
    skills: "Love Guide, Life Mentor"
  },
  {
    name: "Priya Sharma",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    skills: "Relationship Expert"
  },
  {
    name: "Amit Verma",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    online: false,
    skills: "Emotional Healing"
  },
  {
    name: "Sneha Patel",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    skills: "Stress & Mood Counseling"
  },
  {
    name: "Rohit Singh",
    rating: 4.6,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    online: false,
    skills: "Mindset Coach"
  },
  {
    name: "Anjali Mehta",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    online: true,
    skills: "Life Balancing Mentor"
  }
];

export default function Home() {
  return (
    <>
    <div className="min-h-screen  bg-gradient-to-br from-[#C8BFE7] to-[#E8E5F5]">
    <div className="container mx-auto">
 <nav className="bg-gradient-to-r from-[#b799ff] via-[#c8bfe7] to-[#e3d7ff] 
    shadow-xl backdrop-blur-lg bg-opacity-80 
    px-6 py-4 flex items-center justify-between rounded-b-3xl border-b border-white/50">

  {/* Logo */}
<img className="h-20 " src={logo}/>

  {/* Navigation Links */}
  <ul className="hidden md:flex gap-8 text-gray-800 font-semibold text-lg items-center">
    {["Home", "About", "Mate", "Emotional Care", "Mentors", "Contact"].map((item) => (
      <li
        key={item}
        className="cursor-pointer hover:text-purple-900 transition relative group"
      >
        {item}
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-purple-700 rounded-full group-hover:w-full transition-all duration-300"></span>
      </li>
    ))}
  </ul>

  {/* Search Bar */}
  <div className="hidden md:flex items-center bg-white/60 p-2 px-4 rounded-full shadow-md backdrop-blur-md border border-white/40">
    <input
      type="text"
      placeholder="Search mentors..."
      className="bg-transparent outline-none text-gray-700 placeholder-gray-600"
    />
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden text-4xl text-gray-800 cursor-pointer">
    ☰
  </div>
</nav>


      {/* Cards Section */}
      <div className="p-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {users.map((u, i) => (
          <div
            key={i}
            className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/40"
          >
            <div className="relative">
              <img
                src={u.img}
                alt="user"
                className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
              />
              {u.online && (
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            <h2 className="mt-3 text-xl font-bold text-gray-900">{u.name}</h2>
            <p className="text-gray-700 text-sm mb-1">{u.skills}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              <FaStar />
              <span className="text-gray-800">{u.rating}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition">
                <FaPhoneAlt /> Call
              </button>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition">
                <FaVideo /> Video
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

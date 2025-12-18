import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaVideo, FaStar, FaPlay, FaUsers, FaAward, FaSmile, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Layout from '../components/Layout';

import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"
// Temporary background image - aap apni image se replace kar sakte hain
const imageBackground = "https://res.cloudinary.com/dgpstba9n/image/upload/v1765880414/mateLogic_iljno2.jpg";

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

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Made and Mentor ne meri life completely change kar di. Jab main career confusion mein tha, mentor ne mujhe sahi direction di. Ab main apne dream job mein hoon!"
  },
  {
    name: "Ananya Singh",
    role: "College Student",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "Emotional support ke liye yahan se better platform nahi mil sakta. Mate se baat karke mujhe bahut relief mila. Highly recommended!"
  },
  {
    name: "Vikram Patel",
    role: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "Business decisions mein mentor ki guidance invaluable thi. Professional approach aur genuine care - dono milte hain yahan."
  },
  {
    name: "Priyanka Sharma",
    role: "Working Professional",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    text: "Work-life balance ke liye struggle kar rahi thi. Yahan se jo support mila, usse meri productivity aur happiness dono badhi."
  },
  {
    name: "Arjun Reddy",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Startup journey mein bahut ups and downs aate hain. Mentor ne har step pe guide kiya. Best investment I made!"
  }
];
export default function Home() {
  const navigate = useNavigate();
  const [currentTestimonialGroup, setCurrentTestimonialGroup] = useState(0);

  // Auto-slide testimonials (show 3 at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialGroup((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonialGroup = () => {
    setCurrentTestimonialGroup((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonialGroup = () => {
    setCurrentTestimonialGroup((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <Layout activePage="Home">
      {/* Hero Section - Fixed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://res.cloudinary.com/dgpstba9n/video/upload/v1765880414/mateLogic_video.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageBackground})`,
            }}
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              You Are Not Alone
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Talk to a trained listener or an experienced guide in under 10 minutes.
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Feel heard today. Move forward tomorrow.
            </p>
            {/* Main CTA Buttons */}
           

            {/* Service Types */}
         
          </div>
        </div>
      </section>
      <div className='w-full'> 
<iframe className='w-full' height="500" src="https://www.youtube.com/embed/4PJo494tILc?si=8qKvyaORPMslEOUp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
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

      {/* Testimonials Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Real stories from real people who transformed their lives with our guidance
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Testimonials Grid (3 at a time) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[testimonials[currentTestimonialGroup * 3],
                testimonials[(currentTestimonialGroup * 3 + 1) % testimonials.length],
                testimonials[(currentTestimonialGroup * 3 + 2) % testimonials.length]
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                  <FaQuoteLeft className="absolute top-4 left-4 text-purple-200 text-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-purple-600 text-sm font-semibold">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500 text-sm" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonialGroup}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white shadow-lg rounded-full p-3 md:p-4 hover:bg-purple-50 transition-colors duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-purple-600 text-lg md:text-xl" />
            </button>
            <button
              onClick={nextTestimonialGroup}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white shadow-lg rounded-full p-3 md:p-4 hover:bg-purple-50 transition-colors duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-purple-600 text-lg md:text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialGroup(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonialGroup === index
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
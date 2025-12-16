import React from 'react';
import { FaCheck, FaUsers, FaBullseye, FaHeart, FaAward, FaRocket } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function About() {
  const features = [
    { icon: <FaUsers />, title: "Expert Community", desc: "500+ certified mentors" },
    { icon: <FaBullseye />, title: "Focused Approach", desc: "Personalized guidance" },
    { icon: <FaHeart />, title: "Compassionate Care", desc: "Empathetic listening" },
    { icon: <FaAward />, title: "Proven Results", desc: "98% success rate" },
    { icon: <FaRocket />, title: "Fast Growth", desc: "Quick transformation" }
  ];

  return (
    <Layout activePage="About">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C8BFE7]/20 to-[#D1C4E9]/20 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">About MentorConnect</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are dedicated to connecting individuals with expert mentors who provide guidance, support, and wisdom for personal and professional growth.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To make professional mentorship accessible to everyone, breaking down barriers and creating meaningful connections that transform lives.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where every individual has access to the guidance and support they need to achieve their full potential and live fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/30 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl text-purple-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">Our Story</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2020, MentorConnect emerged from a simple belief: everyone deserves access to quality mentorship.
              What started as a small platform has grown into a thriving community of thousands.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our rigorous selection process ensures that only the most qualified and compassionate mentors join our platform,
              providing you with the best possible guidance on your journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
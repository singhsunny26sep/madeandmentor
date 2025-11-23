import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Schemes() {
  const [selectedState, setSelectedState] = useState('');

  const schemes = [
    {
      id: 1,
      name: "PM Surya Ghar Yojana",
      description: "Free electricity up to 300 units per month for residential consumers",
      subsidy: "Up to ₹1,80,000",
      eligibility: ["Indian Citizen", "Own House", "Aadhaar Linked", "Electricity Connection"],
      benefits: ["30% Subsidy", "Bank Loan", "Free Maintenance", "5 Year Warranty"],
      deadline: "31 March 2026",
      image: "🏛️",
      color: "green",
      link: "https://pmsuryaghar.gov.in"
    },
    {
      id: 2,
      name: "Commercial Solar Subsidy",
      description: "40% subsidy for commercial and industrial establishments",
      subsidy: "Up to ₹10,00,000",
      eligibility: ["Registered Business", "GST Number", "Commercial Building", "Valid License"],
      benefits: ["40% Subsidy", "Tax Benefits", "Accelerated Depreciation", "Net Metering"],
      deadline: "31 December 2025",
      image: "🏢",
      color: "blue",
      link: "#"
    },
    {
      id: 3,
      name: "Agricultural Solar Pump Scheme",
      description: "90% subsidy for farmers for solar water pumps",
      subsidy: "Up to ₹7,50,000",
      eligibility: ["Farmer", "Land Owner", "Bank Account", "Aadhaar Card"],
      benefits: ["90% Subsidy", "Free Installation", "5 Year Maintenance", "Training"],
      deadline: "Ongoing",
      image: "🚜",
      color: "orange",
      link: "#"
    }
  ];

  const stateSchemes = [
    { state: "Maharashtra", subsidy: "Additional 20%", scheme: "Maha Solar Scheme" },
    { state: "Gujarat", subsidy: "Additional 25%", scheme: "Surya Gujarat" },
    { state: "Rajasthan", subsidy: "Additional 15%", scheme: "Rajasthan Solar Policy" },
    { state: "Karnataka", subsidy: "Additional 20%", scheme: "Karnataka Solar Mission" },
    { state: "Tamil Nadu", subsidy: "Additional 25%", scheme: "Tamil Nadu Solar Policy" },
    { state: "Uttar Pradesh", subsidy: "Additional 30%", scheme: "UP Solar Policy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white text-2xl">☀️</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">SolarGrid</h1>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/schemes" className="text-green-600 border-b-2 border-green-600 font-medium">Govt Schemes</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Government Solar Schemes</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Avail up to 90% subsidy on solar installations through various government schemes. 
            We help you get maximum benefits with zero paperwork.
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <p className="text-lg">💰 Save up to ₹2,00,000 | 📝 Zero Paperwork | ⚡ Quick Approval</p>
          </div>
        </div>
      </section>

      {/* Main Schemes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Central Government Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {schemes.map((scheme) => (
              <div key={scheme.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200">
                <div className={`bg-gradient-to-r from-${scheme.color}-500 to-${scheme.color}-600 h-48 rounded-t-2xl flex items-center justify-center relative`}>
                  <span className="text-7xl">{scheme.image}</span>
                  <div className="absolute top-4 right-4 bg-white text-green-600 px-3 py-1 rounded-full font-bold">
                    {scheme.subsidy}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{scheme.name}</h3>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scheme.eligibility.map((item, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Deadline: {scheme.deadline}</span>
                    <a href={scheme.link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Official Website →
                    </a>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* State Schemes */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">State-wise Additional Benefits</h2>
            
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Select Your State to See Additional Benefits:
              </label>
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Choose your state</option>
                {stateSchemes.map((state, index) => (
                  <option key={index} value={state.state}>{state.state}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateSchemes.map((state, index) => (
                <div key={index} className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 ${selectedState === state.state ? 'border-green-500' : 'border-gray-200'}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{state.state}</h3>
                  <p className="text-green-600 font-semibold mb-2">{state.subsidy} State Subsidy</p>
                  <p className="text-gray-600 mb-3">{state.scheme}</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Check Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Get Your Subsidy in 3 Easy Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { step: "1", title: "Document Upload", desc: "Upload Aadhaar, electricity bill, and property papers" },
              { step: "2", title: "Site Inspection", desc: "Our expert visits for technical assessment" },
              { step: "3", title: "Subsidy Disbursement", desc: "Get subsidy directly in your bank account" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Start Free Application
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Schemes;
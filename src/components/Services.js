import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Services() {
  const services = [
    {
      id: 1,
      title: "Solar Installation",
      description: "Professional installation of solar systems for homes and businesses",
      price: "Free Installation*",
      features: ["Site Assessment", "System Design", "Professional Installation", "Quality Check"],
      image: "🔧",
      color: "blue",
      popular: true
    },
    {
      id: 2,
      title: "Maintenance Services",
      description: "Regular maintenance and cleaning for optimal performance",
      price: "₹2,999/year",
      features: ["Panel Cleaning", "Performance Check", "Fault Detection", "Annual Service"],
      image: "🛠️",
      color: "green"
    },
    {
      id: 3,
      title: "Subsidy Assistance",
      description: "Complete assistance in government subsidy applications",
      price: "Free Service",
      features: ["Documentation", "Application Filing", "Follow-up", "Disbursement"],
      image: "🏛️",
      color: "purple"
    },
    {
      id: 4,
      title: "Consultation & Design",
      description: "Custom solar solutions designed for your specific needs",
      price: "₹4,999",
      features: ["Energy Audit", "System Design", "Cost Analysis", "ROI Calculation"],
      image: "📐",
      color: "orange"
    },
    {
      id: 5,
      title: "Emergency Repair",
      description: "24/7 emergency repair services for solar systems",
      price: "₹1,999/visit",
      features: ["24/7 Support", "Quick Response", "Genuine Parts", "Warranty"],
      image: "🚨",
      color: "red"
    },
    {
      id: 6,
      title: "Monitoring Setup",
      description: "Smart monitoring systems for real-time performance tracking",
      price: "₹8,999",
      features: ["App Setup", "Real-time Data", "Alerts", "Reports"],
      image: "📱",
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
              <Link to="/services" className="text-blue-600 border-b-2 border-blue-600 font-medium">Services</Link>
              <Link to="/schemes" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Govt Schemes</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            End-to-end solar solutions from consultation to installation and maintenance. 
            We make your solar journey smooth and profitable.
          </p>
          <div className="bg-white/20 rounded-lg p-6 inline-block">
            <p className="text-lg">🎯 10,000+ Successful Installations | ⭐ 4.9/5 Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${service.popular ? 'border-yellow-400 relative' : 'border-gray-200'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 h-48 rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-7xl z-10">{service.image}</span>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-2">{service.price}</div>
                    <p className="text-sm text-gray-600">*Terms and conditions apply</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Free site assessment and energy analysis", icon: "📞" },
              { step: "2", title: "Design", desc: "Custom system design and proposal", icon: "📐" },
              { step: "3", title: "Installation", desc: "Professional installation by experts", icon: "🔧" },
              { step: "4", title: "Support", desc: "Lifetime maintenance and monitoring", icon: "🔍" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
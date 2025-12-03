import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: <FaWhatsapp />, title: "WhatsApp", info: "+1 (555) 123-4567", desc: "Mon to Fri 9am to 6pm" },
    { icon: <FaEnvelope />, title: "Email", info: "support@mentorconnect.com", desc: "Send us your query anytime!" },
    { icon: <FaMapMarkerAlt />, title: "Address", info: "123 Mentor Street, City", desc: "NY 10001, United States" },
    { icon: <FaClock />, title: "Working Hours", info: "9:00 AM - 6:00 PM", desc: "Monday to Friday" }
  ];

  return (
    <Layout activePage="Contact">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're here to help you find the perfect mentor and answer any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Talk</h2>
              <p className="text-gray-700 text-lg mb-8">
                Have questions about our services? Need help finding the right mentor? 
                We're here to assist you every step of the way.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl text-purple-600 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-800 font-semibold mb-1">{item.info}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I choose the right mentor?", a: "Browse profiles, read reviews, and consider scheduling introductory sessions." },
              { q: "What are the session fees?", a: "Fees vary by mentor experience and specialty, ranging from $75 to $150 per hour." },
              { q: "Can I change mentors?", a: "Yes, you can switch mentors at any time to find the perfect match." },
              { q: "Are sessions confidential?", a: "Absolutely. All sessions are private and confidential." }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
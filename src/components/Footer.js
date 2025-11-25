import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MentorConnect</h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Connecting you with expert mentors for personal growth, emotional well-being, and professional development. 
              Your journey to self-improvement starts here.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Mentors', 'Emotional Care', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-300" />
                <span className="text-purple-200">123 Mentor Street, City, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-purple-300" />
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-300" />
                <span className="text-purple-200">support@mentorconnect.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-300">
            © 2024 MentorConnect. All rights reserved. | Designed with ❤️ for your growth journey
          </p>
        </div>
      </div>
    </footer>
  );
}
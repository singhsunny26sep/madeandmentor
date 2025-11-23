import { Link } from "react-router-dom";

function Footer() {
  return (
   <footer className="bg-gradient-to-r from-[#b799ff] via-[#c8bfe7] to-[#e3d7ff] 
    text-gray-900 py-12 px-6 mt-16 rounded-t-3xl shadow-xl border-t border-white/40">

  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Logo + About */}
    <div>
      <h2 className="text-3xl font-extrabold mb-3 drop-shadow">
        Mate<span className="text-purple-700">Zone</span>
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Your trusted platform for emotional well-being, life guidance, and connecting with expert mentors.
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-5">
        <a className="text-2xl hover:text-purple-700 transition" href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a className="text-2xl hover:text-purple-700 transition" href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="text-2xl hover:text-purple-700 transition" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-2xl hover:text-purple-700 transition" href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-purple-800 cursor-pointer transition">Home</li>
        <li className="hover:text-purple-800 cursor-pointer transition">About</li>
        <li className="hover:text-purple-800 cursor-pointer transition">Mate</li>
        <li className="hover:text-purple-800 cursor-pointer transition">Mentors</li>
        <li className="hover:text-purple-800 cursor-pointer transition">Contact</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-purple-800 cursor-pointer transition">Help Center</li>
        <li className="hover:text-purple-800 cursor-pointer transition">FAQs</li>
        <li className="hover:text-purple-800 cursor-pointer transition">Privacy Policy</li>
        <li className="hover:text-purple-800 cursor-pointer transition">Terms & Conditions</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-700">📍 123, Wellness Street, India</p>
      <p className="text-gray-700">📞 +91 98765 43210</p>
      <p className="text-gray-700">📧 support@matezone.com</p>

      <div className="mt-4 bg-white/50 p-3 rounded-xl shadow-md backdrop-blur-md">
        <p className="text-gray-900 font-semibold">Open Hours</p>
        <p className="text-gray-700 text-sm">Mon – Sun: 9AM – 11PM</p>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-gray-800 mt-10 pt-6 border-t border-white/50">
    © {new Date().getFullYear()} <span className="font-bold">MateZone</span> — All rights reserved.
  </div>
</footer>

  );
}

export default Footer;

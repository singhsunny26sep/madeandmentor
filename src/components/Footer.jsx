import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../img/logo- final.png";
export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img className="w-20 h-20 ropund-md" src={Logo} alt="Logo" />
            <h3 className="text-2xl font-bold mb-4">Mate and Mentors</h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Connecting you with expert mentors for personal growth, emotional
              well-being, and professional development. Your journey to
              self-improvement starts here.
            </p>

            <div className="flex space-x-4">
              {[
                {
                  Icon: FaInstagram,
                  url: "https://www.instagram.com/mateandmentors/",
                },
                {
                  Icon: FaLinkedin,
                  url: "https://www.linkedin.com/company/112064901/admin/dashboard/",
                },
                 {
                  Icon: FaFacebook,
                  url: "https://www.facebook.com/mateandmentors/",
                },
                 {
                  Icon: FaYoutube,
                  url: "https://meet.google.com/fea-iwua-ant?authuser=0&pli=1/",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <item.Icon />
                </a>
              ))}
            </div>
            <p className="text-purple-200 mb-6 mt-10 leading-relaxed">
              We are not a medical service or suicide prevention helpline. If
              you are feeling suicidal, we would suggest you immediately call up
              a suicide prevention helpline - e.g Suicide lifeline Mangalore
              Helpline: 08242983444, 7338201234 (24x7), Jeevan Suicide
              Prevention Hotline Helpline: 044 2656 4444 (24X7)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Mates",
                "Mentors",
                "About",
                "Contact",
                "Terms & Conditions",
                "Privacy Policy",
                "Certificate Course",
                "Mate Login",
              ].map((item) => (
                <li key={item}>
                  {item === "Home" ? (
                    <Link
                      to="/"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Mates" ? (
                    <Link
                      to="/mate"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Mentors" ? (
                    <Link
                      to="/mentors"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Wallet" ? (
                    <Link
                      to="/wallet"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "About" ? (
                    <Link
                      to="/about"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Contact" ? (
                    <Link
                      to="/contact"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Terms & Conditions" ? (
                    <Link
                      to="/terms-and-conditions"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Privacy Policy" ? (
                    <Link
                      to="/privacy-policy"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Certificate Course" ? (
                    <Link
                      to="/certificate"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : item === "Mate Login" ? (
                    <Link
                      to="/login?role=mate"
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ) : (
                    <button className="text-purple-200 hover:text-white transition-colors duration-300">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-purple-300" />
                <span className="text-purple-200">+91 70422 52565</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-300" />
                <span className="text-purple-200">
                  support@mateandmentors.info
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-300">© 2025 Mate and Mentors</p>
        </div>
      </div>
    </footer>
  );
}

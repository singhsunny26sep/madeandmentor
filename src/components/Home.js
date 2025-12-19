import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaVideo, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheckCircle, FaClock, FaShieldAlt, FaComments, FaHandshake, FaInfinity, FaUserFriends } from 'react-icons/fa';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"

// Temporary background image
const imageBackground = "https://res.cloudinary.com/dgpstba9n/image/upload/v1765880414/mateLogic_iljno2.jpg";

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Professional",
    img: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    text: "I didn't expect to feel better this quickly. Talking to a Mate felt like finally exhaling."
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    text: "My Mentor helped me make a decision I'd been stuck on for months."
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 5,
    text: "This is the first time I felt truly understood."
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "The flexibility and genuine care I received exceeded all my expectations."
  },
  {
    name: "Lisa Thompson",
    role: "Working Mother",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 5,
    text: "Finally found the support I needed without any judgment or pressure."
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
      {/* BANNER SECTION */}
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
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              You Are Not Alone
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Talk to a trained listener or an experienced guide in under 10 minutes.
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Feel heard today. Move forward tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Emotional Opening Copy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Everyone goes through moments where life feels heavy, confusing, or overwhelming.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              But you don't have to carry it all by yourself.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Whether you need to express what you're feeling or find clarity on what to do next, Mate & Mentors connects you to the right person, right when you need it.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed font-semibold">
              No waiting lists. No pressure. No judgment.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Just a safe space to feel lighter or a clear path to move forward.
            </p>
            
            {/* CTAs - Side by side, equal weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button
                onClick={() => navigate("/emotional-care")}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                I Just Want To Vent<br />
                <span className="text-sm opacity-90">(Connect with a Mate)</span>
              </button>
              <button
                onClick={() => navigate("/mentors")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                I Need Clarity & Direction<br />
                <span className="text-sm opacity-90">(Find a Mentor)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Mate & Mentors Works */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Mate & Mentors Works</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A warm space where you can open up, gain clarity, and move forward - without pressure.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Not everything needs therapy.<br />
                  Not everything needs coaching.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sometimes you just need someone who listens and sometimes you need someone who guides.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Real life doesn't fit in one box.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  That's why Mate & Mentors gives you two simple, clear layers of support:
                </p>
                
                {/* Mate vs Mentor Comparison */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaHandshake className="text-purple-600 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Mate</h3>
                      <p className="text-gray-600">Emotional relief</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaUserFriends className="text-blue-600 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Mentor</h3>
                      <p className="text-gray-600">Practical clarity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Together, they create a bridge from:</h3>
                <div className="space-y-4 mb-8">
                  {[
                    "overwhelm → understanding → clarity → action"
                  ].map((flow, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                      <p className="text-lg font-semibold text-center text-gray-800">{flow}</p>
                    </div>
                  ))}
                </div>

                {/* Why people trust us */}
                <h4 className="text-xl font-bold text-gray-900 mb-6">Why people trust us:</h4>
                <div className="space-y-3">
                  {[
                    { icon: <FaClock />, text: "Matched in under 10 minutes" },
                    { icon: <FaInfinity />, text: "Short, flexible sessions" },
                    { icon: <FaShieldAlt />, text: "Safe, judgment-free environment" },
                    { icon: <FaComments />, text: "Warm, human conversations" },
                    { icon: <FaCheckCircle />, text: "Clear boundaries & trained listeners" },
                    { icon: <FaInfinity />, text: "No long-term commitment" },
                    { icon: <FaUserFriends />, text: "Your pace, your comfort, your journey" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-md">
                      <div className="text-purple-600">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Not Sure What You Need?</h4>
                <p className="text-gray-700 mb-6">
                  A quick, clear guide to help you understand the difference and choose the right kind of support.
                </p>
                <button
                  onClick={() => navigate("/know-your-mate-mentor")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
                >
                  Know Your Mate & Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-700 mb-2 font-semibold">From Your First Message to Real Clarity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Path",
                  desc: "Do you want emotional support or practical direction?"
                },
                {
                  step: "2", 
                  title: "Get Matched Instantly",
                  desc: "We pair you with the right Mate or Mentor in under 10 minutes."
                },
                {
                  step: "3",
                  title: "Book Your Session",
                  desc: "Short, flexible, and at your comfort."
                },
                {
                  step: "4",
                  title: "Show Up As You Are",
                  desc: "No preparation. No judgment."
                },
                {
                  step: "5",
                  title: "Feel Lighter or Clearer",
                  desc: "You leave with relief or with a grounded next step."
                },
                {
                  step: "6",
                  title: "Grow at Your Pace",
                  desc: "Come back whenever you need support."
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Mentors */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Mentors</h2>
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
              View All Mentors
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real People. Real Relief. Real Clarity.</h2>
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

      {/* SECTION 6: Final CTA Block */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your safe space is just minutes away.
            </h2>
            <p className="text-xl text-white/90 mb-12">
              No waiting. No judgment. Just support that actually helps.
            </p>
            
            {/* Dual CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button
                onClick={() => navigate("/emotional-care")}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Talk to a Mate
              </button>
              <button
                onClick={() => navigate("/mentors")}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Find a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
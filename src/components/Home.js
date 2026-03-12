import React from 'react';
import { FaCheckCircle, FaClock, FaShieldAlt, FaComments, FaHandshake, FaInfinity, FaUserFriends } from 'react-icons/fa';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"

// Built and deployed successfully
export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout activePage="Home">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and pattern */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dgpstba9n/image/upload/v1765880414/mateLogic_iljno2.jpg")`,
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 w-full h-full bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl ">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              You Are Not Alone
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed">
              Talk to a trained listener or an experienced guide <span className="font-bold text-purple-300">in under 10 mins</span>.
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Feel heard today. Move forward tomorrow.
            </p>
            <button
              onClick={() => navigate("/mate")}
              className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Get Talking!
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Watch How It Works</h2>
              <p className="text-lg text-gray-700">Learn more about our approach to emotional support and mentorship</p>
            </div>
            
            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How Mate & Mentors Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Emotional Opening Copy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                  <button
                    onClick={() => navigate("/emotional-care")}
                    className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
                  >
                    I Want To Talk<br />
                    <span className="text-sm opacity-90">(Connect with a Mate)</span>
                  </button>
                  <button
                    onClick={() => navigate("/mentors")}
                    className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
                  >
                    I Need Clarity & Direction<br />
                    <span className="text-sm opacity-90">(Find a Mentor)</span>
                  </button>
                </div>
              </div>
              
              {/* Image - Right */}
              <div className="hidden lg:block">
                <img 
                  src="https://res.cloudinary.com/dgpstba9n/image/upload/v1765880414/mateLogic_iljno2.jpg" 
                  alt="Mate & Mentors Support" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Mate & Mentors Works */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Mate & Mentors Works</h2>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Interactive Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mate Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaHandshake className="text-purple-600 text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">Mate</h3>
                  <p className="text-gray-600 text-center">Emotional support - someone who listens</p>
                </div>
                
                {/* Mentor Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaUserFriends className="text-purple-600 text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">Mentor</h3>
                  <p className="text-gray-600 text-center">Practical guidance - expert direction</p>
                </div>
                
                {/* Flow Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 col-span-1 md:col-span-2 border-2 border-transparent hover:border-purple-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Journey:</h3>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">Overwhelm</span>
                    <span className="text-purple-400">→</span>
                    <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Understanding</span>
                    <span className="text-purple-400">→</span>
                    <span className="bg-purple-300 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">Clarity</span>
                    <span className="text-purple-400">→</span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Action</span>
                  </div>
                </div>
              </div>

              {/* Why people trust us - Interactive bullet points */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why people trust us:</h3>
                <div className="space-y-4">
                  {[
                    { icon: <FaClock />, text: "Matched in under 10 minutes", color: "bg-purple-100 text-purple-600" },
                    { icon: <FaInfinity />, text: "Short, flexible sessions", color: "bg-blue-100 text-blue-600" },
                    { icon: <FaShieldAlt />, text: "Safe, judgment-free environment", color: "bg-green-100 text-green-600" },
                    { icon: <FaComments />, text: "Warm, human conversations", color: "bg-orange-100 text-orange-600" },
                    { icon: <FaCheckCircle />, text: "Clear boundaries & trained listeners", color: "bg-pink-100 text-pink-600" },
                    { icon: <FaInfinity />, text: "No long-term commitment", color: "bg-indigo-100 text-indigo-600" },
                    { icon: <FaUserFriends />, text: "Your pace, your comfort, your journey", color: "bg-teal-100 text-teal-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 cursor-pointer group">
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA - Not Sure What You Need? */}
            <div className="text-center">
              <div 
                className="rounded-2xl p-8 shadow-lg max-w-2xl mx-auto relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-purple-900/80"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-4">Not Sure What You Need?</h4>
                  <p className="text-white/90 mb-6">
                    A quick, clear guide to help you understand the difference and choose the right kind of support.
                  </p>
                  <button
                    onClick={() => navigate("/know-your-mate-mentor")}
                    className="bg-white text-purple-700 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
                  >
                    Know Your Mate & Mentor
                  </button>
                </div>
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
                <div key={index} className="text-center p-6 bg-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

      {/* SECTION 4: Featured Mentors - Hidden per client request */}
      {/* 
      <section className="py-16 bg-purple-50">
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
              className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              View All Mentors
            </button>
          </div>
        </div>
      </section>
      
      {/* SECTION 6: Final CTA Block */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600')`
          }}
        />
        {/* Purple overlay */}
        <div className="absolute inset-0 bg-purple-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
                className="bg-white text-purple-700 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Talk to a Mate
              </button>
              <button
                onClick={() => navigate("/mentors")}
                className="bg-white text-purple-700 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
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
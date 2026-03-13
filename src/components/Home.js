import React from 'react';
import { FaCheckCircle, FaClock, FaShieldAlt, FaComments, FaHandshake, FaInfinity, FaUserFriends, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"
import image  from "../assets/img/segment.png"
import stressBg from "../assets/img/stress.png"
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
        <div className="absolute inset-0 w-full h-full " />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl ">
            <h1 className="text-4xl text-purple-600 md:text-purple-800 lg:text-7xl font-bold  mb-6 leading-tight drop-shadow-lg">
              You Are Not Alone...
            </h1>
            <p className="text-xl md:text-2xl text-purple-600   leading-relaxed">
              Talk to a trained listener or an experienced guide <span className="font-bold text-purple-900 bg-slate-300 italic ">in under 10 mins</span>.
            </p>
            <p className="text-xl md:text-2xl text-purple-600 mb-8 leading-relaxed">
              Feel heard today. Move forward tomorrow.
            </p>
            <button
              onClick={() => navigate("/mate")}
              className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Talk now!
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
          <div className=" mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-purple-600 mb-3 leading-relaxed">
                  Everyone goes through moments where life feels heavy, confusing, or overwhelming.
                </h1>
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
                  src={image} 
                  alt="Mate & Mentors Support" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Mate & Mentors Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className=" mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Journey With Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the perfect support system for your journey</p>
              <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>

       

            {/* Journey Flow */}
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Journey With Us:</h3> */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full">
                  <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <span className="font-semibold">Overwhelm</span>
                </div>
                <FaArrowRight className="text-purple-400 text-xl" />
                <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <span className="font-semibold">Connect</span>
                </div>
                <FaArrowRight className="text-purple-400 text-xl" />
                <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full">
                  <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <span className="font-semibold">Understand</span>
                </div>
                <FaArrowRight className="text-purple-400 text-xl" />
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <span className="font-semibold">Grow</span>
                </div>
                <FaArrowRight className="text-purple-400 text-xl" />
                <div className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full">
                  <span className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold">5</span>
                  <span className="font-semibold">Thrive</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { icon: <FaClock />, title: "Quick Match", desc: "Get matched in under 10 minutes", color: "from-blue-400 to-blue-600" },
                { icon: <FaShieldAlt />, title: "Safe Space", desc: "100% confidential & secure", color: "from-green-400 to-green-600" },
                { icon: <FaComments />, title: "Human Touch", desc: "Real conversations, real support", color: "from-pink-400 to-pink-600" },
                { icon: <FaCheckCircle />, title: "Trained Listeners", desc: "Professionally vetted team", color: "from-purple-400 to-purple-600" },
                { icon: <FaInfinity />, title: "No Commitment", desc: "Start & stop anytime", color: "from-indigo-400 to-indigo-600" },
                { icon: <FaUserFriends />, title: "Your Pace", desc: "Comfortable journey for you", color: "from-teal-400 to-teal-600" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div 
                className="rounded-2xl p-12 shadow-2xl mx-auto relative overflow-hidden"
                style={{
                  backgroundImage: `url(${stressBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Not Sure What You Need?</h4>
                  <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                    Take our quick quiz to understand whether you need a Mate or a Mentor for your journey.
                  </p>
                  <button
                    onClick={() => navigate("/know-your-mate-mentor")}
                    className="bg-white text-purple-700 px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 inline-flex items-center gap-2"
                  >
                    Find Your Match
                    <FaArrowRight />
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
          <div className=" mx-auto">
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
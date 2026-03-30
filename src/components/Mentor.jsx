import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  FaWhatsapp,
  FaVideo,
  FaPhone,
  FaFilter,
  FaTimes,
  FaPhoneSlash,
  FaStar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import CallHandler from "../components/CallHandler";
import { apiGet, apiPost } from "../utils/api";
import { initializeFCM, getFCMToken } from "../utils/fcm";
import banner from "../assets/img/mateguide.png";
import banners from "../assets/img/mates hero.png";

// Video call URLs - base URL, roomId will be appended dynamically
const VIDEO_CALL_BASE_URL = "https://mateandmentors.yourvideo.live/";
const AUDIO_CALL_BASE_URL = "https://matenmentor.yourvideo.live/";

// Transform API data
const transformMateData = (matesData) => {
  if (!Array.isArray(matesData)) return [];

  return matesData.map((user) => {
    const mate = user.mate || {};
    return {
      _id: user._id,
      name: mate.name || user.name || "Unknown",
      img: user.image || ``,
      online: user.isOnline || false,
      isAvailable: mate.isAvailable || false,
      isBusy: mate.isBusy || false,
      skills: mate.specifications?.join(", ") || "General",
      experience: "2",
      price: mate.pricePerMin || 0,
      priceDisplay: `₹${mate.pricePerMin || 0}/min`,
      category: mate.specifications?.[0] || "general",
      language: mate.languages?.join(", ") || "English",
      mobile: mate.mobile || user.mobile,
      email: mate.email || user.email,
      bio: mate.bio || "",
    };
  });
};

const categories = ["All", "Relationship", "Emotional", "Career", "Life"];
const onlineStatuses = ["All", "Online now", "Offline"];

export default function Mentor() {
  const navigate = useNavigate();
  const { token, getAuthToken, isAuthenticated } = useAuth();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOnlineStatus, setSelectedOnlineStatus] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [mates, setMates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCallModal, setShowCallModal] = useState(false);
  const [callType, setCallType] = useState(""); // 'video' or 'audio'
  const [selectedMentorId, setSelectedMentorId] = useState("");
  const [incomingCall, setIncomingCall] = useState(null); // For receiving incoming calls
  const [callUrl, setCallUrl] = useState(""); // Dynamic call URL based on roomId
  const [callSessionId, setCallSessionId] = useState(""); // Store call session ID for ending call
  const [showFeedbackModal, setShowFeedbackModal] = useState(false); // Show feedback modal
  const [feedbackRating, setFeedbackRating] = useState(0); // Rating 1-5
  const [feedbackDescription, setFeedbackDescription] = useState(""); // Feedback description
  const [selectedMentorForFeedback, setSelectedMentorForFeedback] =
    useState(null); // Mentor for feedback\
  console.log(mates, "*************");
  console.log(callUrl, "%%%%%%%%%%%%%%%%%%%%");
  // Initialize FCM for push notifications (receive incoming calls)
  useEffect(() => {
    const setupFCM = async () => {
      try {
        // Get FCM token and send to server
        const fcmToken = await getFCMToken();
        if (fcmToken) {
          console.log("Mentor page FCM Token:", fcmToken);
          // Send token to server for push notifications
          await apiPost("/users/fcm-token", { fcmToken });
        }

        // Initialize foreground message listener with custom handler
        initializeFCM((payload) => {
          console.log("📬 FCM Push Notification Received:", payload);
          console.log("📬 Notification Data:", payload.data);
          console.log("📬 Notification Type:", payload.data?.type);
          // Handle incoming call from push notification
          if (payload.data?.type === "incoming_call") {
            console.log("📞 Incoming Call Detected!");
            console.log("📞 Call Session ID:", payload.data.callSessionId);
            console.log("📞 Caller Name:", payload.data.callerName);

            setIncomingCall({
              callSessionId: payload.data.callSessionId,
              callerName: payload.data.callerName || "A mate is calling",
              callType: payload.data.callType || "video",
            });
          }
        });
      } catch (error) {
        console.error("FCM setup error:", error);
      }
    };

    if (isAuthenticated) {
      setupFCM();
    }
  }, [isAuthenticated]);

  // Handle accepting incoming call
  const handleAcceptCall = async (callSessionId) => {
    try {
      const result = await apiPost("/calls/accept", { callSessionId });
      if (result.success) {
        setCallType(result.data?.callType || "video");
        setShowCallModal(true);
        setIncomingCall(null);
      } else {
        alert("Failed to accept call");
      }
    } catch (error) {
      console.error("Accept call error:", error);
      alert("Failed to accept call");
    }
  };

  useEffect(() => {
    const fetchMates = async () => {
      try {
        const data = await apiGet(
          "/users/getAll?page=1&limit=100&role=mate&sortBy=isAvailable",
        );
        console.log("API:", data);
        if (data.success && Array.isArray(data?.data?.data)) {
          // ✅ FIX: correct array set
          setMates(data.data.data);
        } else {
          setMates([]);
          setError("Failed to fetch mates");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchMates();
  }, []);

  // ✅ Transform
  const mentorsList = transformMateData(mates);

  // ✅ Filters fix
  const filteredMentors = mentorsList.filter((mentor) => {
    const matchesCategory =
      selectedCategory === "All" ||
      mentor.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesOnlineStatus =
      selectedOnlineStatus === "All" ||
      (selectedOnlineStatus === "Online now" && mentor.online) ||
      (selectedOnlineStatus === "Offline" && !mentor.online);

    const matchesPrice =
      mentor.price >= priceRange[0] && mentor.price <= priceRange[1];

    return matchesCategory && matchesOnlineStatus && matchesPrice;
  });

  return (
    <Layout activePage="Mate">
      {/* Incoming Call Alert - when mate calls the user */}
      {incomingCall && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-purple-600 text-3xl animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Incoming Call
              </h3>
              <p className="text-gray-600 mb-6">{incomingCall.callerName}</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    handleAcceptCall(incomingCall.callSessionId);
                  }}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600"
                >
                  <FaPhone /> Accept
                </button>
                <button
                  onClick={() => setIncomingCall(null)}
                  className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-red-600"
                >
                  <FaPhoneSlash /> Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 bg-white border px-6 py-4 rounded-2xl"
          >
            <FaFilter />
            Filters
          </button>

          {showFilters && (
            <div className="mt-4 bg-white p-4 rounded-xl">
              <button onClick={() => setShowFilters(false)}>
                <FaTimes />
              </button>

              <div className="mt-4">
                <label>
                  Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Content */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 lg:px-0">
          <img
            className="w-full h-auto lg:block hidden object-cover mb-10 "
            src={banner}
            alt="Mentor Banner"
          />
          <img
            className="w-full h-auto lg:hidden object-cover mb-10 "
            src={banners}
            alt="Mentor Banner"
          />
        </div>
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : error ? (
            <div className="text-center py-10">{error}</div>
          ) : filteredMentors.length === 0 ? (
            <div className="text-center py-10">No mates found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={mentor.img}
                      className="w-full h-48 object-contain bg-gray-100"
                    />
                    <span
                      className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${mentor.isBusy ? "bg-yellow-500 text-white" : mentor.isAvailable ? "bg-green-500 text-white" : "bg-pink-400 text-white"}`}
                    >
                      {mentor.isBusy
                        ? "Busy"
                        : mentor.isAvailable
                          ? "Online"
                          : "Offline"}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="font-bold text-lg capitalize">
                        {mentor.name}
                      </h3>
                      {isAuthenticated && (
                        <p className="text-purple-600 font-bold">
                          {mentor.priceDisplay}
                        </p>
                      )}
                    </div>
                    <h3 className="text-purple-600  text-lg capitalize">
                      {mentor.language}
                    </h3>
                    <h3 className="text-black mt-2  text-md capitalize">
                      {mentor.bio}
                    </h3>
                    <div>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center mt-4">
                        <button
                          onClick={async () => {
                            if (!isAuthenticated) {
                              alert("Please login first to make a call!");
                              navigate("/Signup");
                              return;
                            }
                            setCallType("video");
                            setSelectedMentorId(mentor.userId);

                            // Call the initiate API
                            try {
                              const token = localStorage.getItem("authToken");
                              console.log(
                                "Auth token for call:",
                                token ? "Present" : "Missing",
                              );

                              const callData = {
                                receiverId: mentor._id,
                                callType: "VIDEO",
                              };
                              console.log(
                                "Initiating video call with data:",
                                callData,
                              );
                              const result = await apiPost(
                                "/calls/initiate",
                                callData,
                              );
                              console.log("Call initiation result:", result);

                              if (result.success && result.data?.roomId) {
                                // Build dynamic call URL with roomId from API
                                const videoUrl = `${VIDEO_CALL_BASE_URL}${result.data.roomId}`;
                                console.log("Video call URL:", videoUrl);

                                setCallUrl(videoUrl);
                                setCallSessionId(
                                  result.data.callSessionId ||
                                    result.data._id ||
                                    "",
                                );
                                setShowCallModal(true);
                              } else {
                                alert(
                                  "Minimum wallet balance of 10 Rs is required to initiate a call.",
                                );
                              }
                            } catch (error) {
                              console.error("Error initiating call:", error);
                              alert(
                                "Minimum wallet balance of 10 Rs is required to initiate a call.",
                              );
                            }
                          }}
                          className="
                          w-full flex items-center justify-center gap-2
                          bg-purple-500 rounded-lg
                          text-white font-semibold py-2.5 px-4
                        "
                        >
                          <FaVideo className="text-lg" />
                          <span>Video</span>
                        </button>

                        <button
                          onClick={async () => {
                            if (!isAuthenticated) {
                              alert("Please login first to make a call!");
                              navigate("/Signup");
                              return;
                            }
                            setCallType("audio");
                            setSelectedMentorId(mentor._id);

                            // Call the initiate API
                            try {
                              const token = localStorage.getItem("authToken");
                              console.log(
                                "Auth token for call:",
                                token ? "Present" : "Missing",
                              );

                              const callData = {
                                receiverId: mentor._id,
                                callType: "AUDIO",
                              };
                              console.log(
                                "Initiating audio call with data:",
                                callData,
                              );
                              const result = await apiPost(
                                "/calls/initiate",
                                callData,
                              );
                              console.log("Call initiation result:", result);

                              if (result.success && result.data?.roomId) {
                                // Build dynamic call URL with roomId from API
                                const audioUrl = `${AUDIO_CALL_BASE_URL}${result.data.roomId}`;
                                console.log("Audio call URL:", audioUrl);
                                setCallUrl(audioUrl);
                                setCallSessionId(
                                  result.data.callSessionId ||
                                    result.data._id ||
                                    "",
                                );
                                setShowCallModal(true);
                              } else {
                                alert(
                                  "Failed to initiate call. Please try again.",
                                );
                              }
                            } catch (error) {
                              console.error("Error initiating call:", error);
                              alert(
                                "Failed to initiate call. Please try again.",
                              );
                            }
                          }}
                          className="
                          w-full flex items-center justify-center gap-2
                          bg-purple-500 rounded-lg
                          text-white font-semibold py-2.5 px-4
                        "
                        >
                          <FaWhatsapp className="text-lg  " />
                          <span>Audio</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="bg-purple-600 p-4 flex justify-between items-center">
              <h3 className="text-white text-lg font-bold">
                {callType === "video" ? "Video Call" : "Audio Call"}
              </h3>
              <button
                onClick={async () => {
                  // Call end API when closing modal
                  if (callSessionId) {
                    try {
                      await apiPost("/calls/end", { callSessionId });
                      console.log("Call ended successfully");
                    } catch (error) {
                      console.error("Error ending call:", error);
                    }
                  }
                  setShowCallModal(false);
                  setCallUrl("");
                  setCallSessionId("");
                  // Show feedback modal after call ends
                  setShowFeedbackModal(true);
                }}
                className="text-white hover:text-gray-200"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Iframe */}
            <div className="w-full h-[calc(100%-60px)]">
              <iframe
                src={
                  callUrl ||
                  (callType === "video"
                    ? VIDEO_CALL_BASE_URL
                    : AUDIO_CALL_BASE_URL)
                }
                allow="camera; microphone; fullscreen; speaker; display-capture"
                className="w-full h-full border-0"
                title={callType === "video" ? "Video Call" : "Audio Call"}
              />
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Rate Your Experience
              </h3>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackRating(star)}
                  className="focus:outline-none"
                >
                  <FaStar
                    className={`text-3xl ${
                      star <= feedbackRating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Share your feedback
              </label>
              <textarea
                value={feedbackDescription}
                onChange={(e) => setFeedbackDescription(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowFeedbackModal(false);
                  setFeedbackRating(0);
                  setFeedbackDescription("");
                  setSelectedMentorForFeedback(null);
                }}
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Skip
              </button>
              <button
                onClick={async () => {
                  setShowFeedbackModal(false);
                  if (feedbackRating === 0) {
                    alert("Please select a rating");
                    return;
                  }
                  try {
                    // Submit feedback to API
                    await apiPost("/feedback/submit", {
                      callSessionId: callSessionId,
                      rating: feedbackRating,
                      description: feedbackDescription,
                      mentorId: selectedMentorForFeedback?._id,
                    });
                    alert("Thank you for your feedback!");
                    setShowFeedbackModal(false);
                    setFeedbackRating(0);
                    setFeedbackDescription("");
                    setSelectedMentorForFeedback(null);
                  } catch (error) {
                    console.error("Error submitting feedback:", error);
                    alert("Failed to submit feedback. Please try again.");
                  }
                }}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  );
}

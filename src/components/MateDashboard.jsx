import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaPhone,
  FaVideo,
  FaHistory,
  FaUser,
  FaSignOutAlt,
  FaWallet,
  FaHeadset,
  FaPhoneSlash,
  FaCircle,
} from "react-icons/fa";
import logo from "../img/logo- final.png";
import { apiPost } from "../utils/api";
import { initializeFCM, getFCMToken } from "../utils/fcm";
// Video/Audio call base URLs - roomId will be appended dynamically
const VIDEO_CALL_URL =
  `${import.meta.env.VITE_VIDEO_CALL_BASE_URL || "https://mateandmentors.yourvideo.live/"}`;
const AUDIO_CALL_URL =
  `${import.meta.env.VITE_AUDIO_CALL_BASE_URL || "https://matenmentor.yourvideo.live/"}`;

function MateDashboard() {
  const navigate = useNavigate();
  const { user, logout, walletBalance, refreshWalletBalance } = useAuth();
  const [callHistory, setCallHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [incomingCall, setIncomingCall] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [showCallIframe, setShowCallIframe] = useState(false);
  const [callUrl, setCallUrl] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const audioRef = useRef(null);
  const [isRingtonePlaying, setIsRingtonePlaying] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
console.log(receiverId,"this is reciverId")
  // Fetch user online status on component mount


  // Toggle online/offline status
 

  // Play ringtone when incoming call notification appears
  const playRingtone = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play().catch((error) => {
        console.log("Error playing ringtone:", error);
      });
      setIsRingtonePlaying(true);
    }
  };

  // Stop ringtone
  const stopRingtone = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsRingtonePlaying(false);
    }
  };

  // Fetch call history from API
  useEffect(() => {
    const fetchCallHistory = async () => {
      try {
        const token = user?.token || localStorage.getItem("authToken");
        const headers = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL || "https://api.mateandmentors.com/mateandmentors"}/calls/history?page=${currentPage}&limit=10`,
          {
            method: "GET",
            headers,
          },
        );

        const result = await response.json();

        if (result.success && result.data) {
          // Transform API response to match our display format
          const formattedHistory = result.data.map((call) => {
            // Calculate duration in minutes
            let duration = "0 min";
            if (call.startTime && call.updatedAt) {
              const start = new Date(call.startTime);
              const end = new Date(call.updatedAt);
              const minutes = Math.round((end - start) / 60000);
              duration = minutes > 0 ? `${minutes} min` : "<1 min";
            }

            // Determine the other party (mentor)
            const isCaller = call.callerId?._id === user?._id;
            const mentorName = isCaller
              ? call.receiverId?.name
              : call.callerId?.name;

            return {
              id: call._id,
              mentorName: mentorName || "Unknown",
              type: call.callType?.toLowerCase() || "video",
              duration: duration,
              date: new Date(call.createdAt).toLocaleDateString("en-GB"),
              status: call.callStatus?.toLowerCase() || "unknown",
            };
          });

          setCallHistory(formattedHistory);

          // Store receiverId from the first call in history
          if (result.data.length > 0 && result.data[0].receiverId?._id) {
            setReceiverId(result.data[0].receiverId._id);
          }

          // Update pagination info
          if (result.pagination) {
            setTotalPages(
              Math.ceil(result.pagination.total / result.pagination.limit),
            );
          }
        }
      } catch (error) {
        console.error("Error fetching call history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCallHistory();
  }, [user, currentPage]);

  // Fetch wallet balance from API on load
  useEffect(() => {
    refreshWalletBalance();
  }, []);
 const toggleOnlineStatus = async () => {
    setIsUpdatingStatus(true);
    try {
      const token = user?.token || localStorage.getItem("authToken");
      const headers = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      console.log("User object for status update:", user);
      console.log("User ID:", user?._id || user?.id);
      
      const newStatus = !isOnline;
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || "https://api.mateandmentors.com/mateandmentors"}/users/update?userId=${receiverId}`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({ isAvailable: newStatus }),
        },
      );

      const result = await response.json();
      
      if (result.success) {
        setIsOnline(newStatus);
        console.log(`User is now ${newStatus ? "Online" : "Offline"}`);
      } else {
        console.error("Failed to update status:", result.message);
        alert("Failed to update status. Please try again.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status. Please try again.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };
  // Initialize FCM for push notifications
  useEffect(() => {
    try {
      // Get and store FCM token
      getFCMToken();

      // Initialize foreground message listener with custom handler
      initializeFCM((payload) => {
        console.log("Custom FCM message handler:", payload);
        console.log("📬 FCM Push Notification Received:", payload);
        console.log("📬 Notification Data:", payload.data);
        console.log("📬 Notification Event:", payload.data?.event);

        // Handle incoming call from push notification
        // Support multiple formats: type=incoming_call, event=RINGING
        const isIncomingCall =
          payload.data?.type === "incoming_call" ||
          payload.data?.event === "RINGING" ||
          payload.data?.event === "incoming_call";

        if (isIncomingCall) {
          console.log("📞 Incoming Call Detected!");
          console.log("📞 Call Session ID:", payload.data.callSessionId);
          console.log("📞 Caller Name:", payload.data.callerName);
          console.log("📞 Call Type:", payload.data.callType);
          console.log("📞 Room ID:", payload.data.roomId);

          setIncomingCall({
            callSessionId: payload.data.callSessionId,
            callerName: payload.data.callerName || "Someone",
            callType: (payload.data.callType || "video").toLowerCase(),
            roomId: payload.data.roomId || null,
          });
          // Play ringtone when incoming call is detected
          playRingtone();
        }
      });
    } catch (error) {
      console.error("FCM setup error:", error);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAcceptCall = async (callSessionId, callType = "video", roomId = null) => {
    try {
      // Get token from user object in AuthContext
      const token = user?.token || localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || "https://api.mateandmentors.com/mateandmentors"}/calls/accept`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ callSessionId }),
        },
      );

      const result = await response.json();

      if (result.success) {
        // Build dynamic URL based on roomId from notification
        let url;
        if (roomId) {
          // Use roomId from notification - append to base URL
          url = callType === "audio" 
            ? `${AUDIO_CALL_URL}${roomId}`
            : `${VIDEO_CALL_URL}${roomId}`;
          console.log("Using dynamic room URL:", url);
        } else {
          // Fallback to static URLs
          url = callType === "audio" ? AUDIO_CALL_URL : VIDEO_CALL_URL;
          console.log("Using static fallback URL:", url);
        }
        setCallUrl(url);
        setShowCallIframe(true);
      } else {
        alert("Failed to accept call");
      }
    } catch (error) {
      console.error("Accept call error:", error);
      alert("Failed to accept call");
    }
  };
  const handleDeclineCall = async (callSessionId) => {
    try {
      // Get token from user object in AuthContext
      const token = user?.token || localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || "https://api.mateandmentors.com/mateandmentors"}/calls/reject`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ callSessionId }),
        },
      );

      const result = await response.json();

      if (!result.success) {
        alert("Failed to decline call");
      }
    } catch (error) {
      console.error("Decline call error:", error);
      alert("Failed to decline call");
    }
  };
  const handleEndCall = () => {
    setShowCallIframe(false);
    setCallUrl("");
  };
 
  const totalCalls = callHistory.length;
  const totalMinutes = callHistory.reduce((acc, call) => {
    return acc + parseInt(call.duration);
  }, 0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Ringtone Audio Element */}
      <audio ref={audioRef} preload="auto">
        <source src="/ringtone.mp3" type="audio/mpeg" />
      </audio>

      {/* Call Iframe Overlay */}
      {showCallIframe && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={handleEndCall}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
            >
              <FaPhoneSlash /> End Call
            </button>
          </div>
          <iframe
            src={callUrl}
            className="w-full h-full"
            allow="camera; microphone; fullscreen; display-capture"
            allowFullScreen
            title="Video Call"
          />
        </div>
      )}

      {/* Incoming Call Alert */}
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
              <p className="text-gray-600 mb-2">
                {incomingCall.callerName
                  ? `${incomingCall.callerName} is calling you`
                  : "Someone is calling you"}
              </p>
              <p className="text-sm text-purple-600 mb-6">
                📹{" "}
                {incomingCall.callType === "audio"
                  ? "Audio Call"
                  : "Video Call"}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    stopRingtone();
                    setIncomingCall(null);
                    handleAcceptCall(
                      incomingCall.callSessionId,
                      incomingCall.callType,
                      incomingCall.roomId,
                    );
                  }}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600"
                >
                  <FaPhone /> Accept
                </button>
                <button
                  onClick={() => {
                    stopRingtone();
                    setIncomingCall(null);
                    handleDeclineCall(incomingCall.callSessionId);
                  }}
                  className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-red-600"
                >
                  <FaPhoneSlash /> Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <img src={logo} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Mate Dashboard
                </h1>
              </Link>
            </div>
            <nav className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={toggleOnlineStatus}
                  disabled={isUpdatingStatus}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isOnline ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isOnline ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>

                <span
                  className={`text-xs sm:text-sm font-medium hidden sm:inline ${
                    isOnline ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1 sm:gap-2"
              >
                <FaSignOutAlt className="text-sm sm:text-base" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        {/* Welcome Message */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "Mate"}! 👋
          </h2>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            Here's your call history and activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Calls</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {totalCalls}
                </p>
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaPhone className="text-blue-600 text-lg sm:text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Minutes</p>
                <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                  {totalMinutes}
                </p>
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaHistory className="text-indigo-600 text-lg sm:text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Earning Balance</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  ₹{walletBalance}
                </p>
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaWallet className="text-green-600 text-lg sm:text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Call History Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-blue-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaHistory className="text-blue-600" />
              <span className="hidden sm:inline">Call History</span>
              <span className="sm:hidden">History</span>
            </h3>
          </div>

          {isLoading ? (
            <div className="p-6 sm:p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Loading call history...
              </p>
            </div>
          ) : callHistory.length === 0 ? (
            <div className="p-6 sm:p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <p className="text-gray-500 text-sm sm:text-base">
                No call history yet
              </p>
              <Link
                to="/mentors"
                className="inline-block mt-4 px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Find a Mentor
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                      Mentor
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden sm:table-cell">
                      Duration
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">
                      Date
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {callHistory.map((call) => (
                    <tr
                      key={call.id}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-blue-600 text-sm sm:text-base" />
                          </div>
                          <span className="font-medium capitalize text-gray-900 text-sm sm:text-base">
                            {call.mentorName}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span
                          className={`flex items-center gap-1 sm:gap-2 text-sm ${
                            call.type === "video"
                              ? "text-blue-600"
                              : "text-green-600"
                          }`}
                        >
                          {call.type === "video" ? <FaVideo /> : <FaPhone />}
                          <span className="capitalize hidden sm:inline">
                            {call.type}
                          </span>
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm hidden sm:table-cell">
                        {call.duration}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm hidden md:table-cell">
                        {call.date}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                          {call.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">&lt;</span>
            </button>
            <span className="text-gray-600 text-sm sm:text-base">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">&gt;</span>
            </button>
          </div>
        )}

        {/* Quick Actions */}
      </main>
    </div>
  );
}

export default MateDashboard;

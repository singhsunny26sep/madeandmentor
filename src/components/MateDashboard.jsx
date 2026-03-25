import { useState, useEffect } from "react";
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
const VIDEO_CALL_URL = "https://mateandmentors.yourvideo.live/host/NjljMGVkYTVlZTBiYTA1NzA2M2RiODUyLTY5YjdhN2Y2MDE3NDJjNWM5NTBiM2U4ZQ==";
const AUDIO_CALL_URL = "https://mateandmentors.yourvideo.live/69c0eda5ee0ba057063db852";

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

  // Fetch call history from API
  useEffect(() => {
    const fetchCallHistory = async () => {
      try {
        const token = user?.token || localStorage.getItem('authToken');
        const headers = {
          'Content-Type': 'application/json',
        };
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://mateandmentors.onrender.com/mateandmentors'}/calls/history?page=${currentPage}&limit=10`, {
          method: 'GET',
          headers,
        });
        
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
              date: new Date(call.createdAt).toLocaleDateString('en-GB'),
              status: call.callStatus?.toLowerCase() || "unknown",
            };
          });
          
          setCallHistory(formattedHistory);
          
          // Update pagination info
          if (result.pagination) {
            setTotalPages(Math.ceil(result.pagination.total / result.pagination.limit));
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

          setIncomingCall({
            callSessionId: payload.data.callSessionId,
            callerName: payload.data.callerName || "Someone",
            callType: (payload.data.callType || "video").toLowerCase(),
          });
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

  const handleAcceptCall = async (callSessionId, callType = 'video') => {
    try {
      // Get token from user object in AuthContext
      const token = user?.token || localStorage.getItem('authToken');
      
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
     

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://mateandmentors.onrender.com/mateandmentors'}/calls/accept`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ callSessionId }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Use iframe instead of navigating
        const url = callType === 'audio' ? AUDIO_CALL_URL : VIDEO_CALL_URL;
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
      const token = user?.token || localStorage.getItem('authToken');
      
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
     

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://mateandmentors.onrender.com/mateandmentors'}/calls/reject`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ callSessionId }),
      });
      
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
const toggleOnlineStatus = () => {
    setIsUpdatingStatus(true);

    // simulate API call
    setTimeout(() => {
      setIsOnline((prev) => !prev);
      setIsUpdatingStatus(false);
    }, 500);
  };

  const totalCalls = callHistory.length;
  const totalMinutes = callHistory.reduce((acc, call) => {
    return acc + parseInt(call.duration);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
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
                    setIncomingCall(null);
                    handleAcceptCall(incomingCall.callSessionId, incomingCall.callType);
                  }}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600"
                >
                  <FaPhone /> Accept
                </button>
                <button
                onClick={() => {
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
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3">
                  <img src={logo} />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Mate Dashboard
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
               <div className="flex items-center gap-3">
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
        className={`text-sm font-medium ${
          isOnline ? "text-green-600" : "text-gray-500"
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "Mate"}! 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Here's your call history and activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Calls</p>
                <p className="text-3xl font-bold text-blue-600">{totalCalls}</p>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Minutes</p>
                <p className="text-3xl font-bold text-indigo-600">
                  {totalMinutes}
                </p>
              </div>
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaHistory className="text-indigo-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Earning Balnace</p>
                <p className="text-3xl font-bold text-green-600">
                  ₹{walletBalance}
                </p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaWallet className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Call History Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="p-6 border-b border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaHistory className="text-blue-600" />
              Call History
            </h3>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-gray-500 mt-2">Loading call history...</p>
            </div>
          ) : callHistory.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <p className="text-gray-500">No call history yet</p>
              <Link
                to="/mentors"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Find a Mentor
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Mentor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
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
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-blue-600" />
                          </div>
                          <span className="font-medium capitalize text-gray-900">
                            {call.mentorName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center gap-2 ${call.type === "video" ? "text-blue-600" : "text-green-600"}`}
                        >
                          {call.type === "video" ? <FaVideo /> : <FaPhone />}
                          <span className="capitalize">{call.type}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {call.duration}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{call.date}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
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
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {/* Quick Actions */}
      </main>
    </div>
  );
}

export default MateDashboard;

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaPhone, FaVideo, FaHistory, FaUser, FaSignOutAlt, FaWallet, FaHeadset, FaPhoneSlash, FaCircle } from 'react-icons/fa';
import logo from "../img/logo- final.png"
import { apiPost } from '../utils/api';
import { initializeFCM, getFCMToken } from '../utils/fcm';
function MateDashboard() {
  const navigate = useNavigate();
  const { user, logout, walletBalance, refreshWalletBalance } = useAuth();
  const [callHistory, setCallHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [incomingCall, setIncomingCall] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Mock call history data - in production, this would come from an API
  useEffect(() => {
    // Simulate API call
    const mockCallHistory = [
      { id: 1, mentorName: 'Dr. Sarah Johnson', type: 'video', duration: '15 min', date: '2024-03-20', status: 'completed' },
      { id: 2, mentorName: 'Mr. John Smith', type: 'audio', duration: '10 min', date: '2024-03-18', status: 'completed' },
      { id: 3, mentorName: 'Ms. Emily Davis', type: 'video', duration: '20 min', date: '2024-03-15', status: 'completed' },
      { id: 4, mentorName: 'Dr. Michael Brown', type: 'audio', duration: '12 min', date: '2024-03-12', status: 'completed' },
      { id: 5, mentorName: 'Mrs. Lisa Wilson', type: 'video', duration: '18 min', date: '2024-03-10', status: 'completed' },
    ];
    
    setCallHistory(mockCallHistory);
    setIsLoading(false);
  }, []);

  // Fetch wallet balance from API on load
  useEffect(() => {
    refreshWalletBalance();
  }, []);

  // Initialize FCM for push notifications
  useEffect(() => {
    const setupFCM = async () => {
      try {
        // Get FCM token and send to server
        const fcmToken = await getFCMToken();
        if (fcmToken) {
          console.log('MateDashboard FCM Token:', fcmToken);
          // Send token to server for push notifications
          await apiPost('/mates/fcm-token', { fcmToken });
        }
        
        // Initialize foreground message listener with custom handler
        initializeFCM((payload) => {
          console.log('Custom FCM message handler:', payload);
          
          // Handle incoming call from push notification
          if (payload.data?.type === 'incoming_call') {
            setIncomingCall({
              callSessionId: payload.data.callSessionId,
              callerName: payload.data.callerName || 'Someone'
            });
          }
        });
      } catch (error) {
        console.error('FCM setup error:', error);
      }
    };

    setupFCM();
  }, []);

  // Poll for incoming calls every 10 seconds
  useEffect(() => {
    const checkIncomingCalls = async () => {
      try {
        const result = await apiPost('/calls/pending', {});
        if (result.success && result.data) {
          setIncomingCall(result.data);
        }
      } catch (error) {
        // Silent fail - no pending calls
      }
    };

    const interval = setInterval(checkIncomingCalls, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAcceptCall = async (callSessionId) => {
    try {
      const result = await apiPost('/calls/accept', { callSessionId });
      if (result.success) {
        // Navigate to video call with session info
        navigate('/video-call', { 
          state: { 
            callSessionId, 
            roomId: result.data?.roomId,
            token: result.data?.callerToken 
          } 
        });
      } else {
        alert('Failed to accept call');
      }
    } catch (error) {
      console.error('Accept call error:', error);
      alert('Failed to accept call');
    }
  };

  const toggleOnlineStatus = async () => {
    setIsUpdatingStatus(true);
    try {
      const newStatus = !isOnline;
      await apiPost('/mates/status', { isOnline: newStatus });
      setIsOnline(newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const totalCalls = callHistory.length;
  const totalMinutes = callHistory.reduce((acc, call) => {
    return acc + parseInt(call.duration);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Incoming Call Alert */}
      {incomingCall && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-purple-600 text-3xl animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Incoming Call</h3>
              <p className="text-gray-600 mb-6">
                {incomingCall.callerName ? `${incomingCall.callerName} is calling you` : 'Someone is calling you'}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    setIncomingCall(null);
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

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3">
                 <img src={logo}/>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Mate Dashboard
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
           
             
              <button
                onClick={toggleOnlineStatus}
                disabled={isUpdatingStatus}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-colors ${
                    isOnline ? 'translate-x-6 bg-green-500' : 'translate-x-1 bg-gray-400'
                  }`}
                />
              </button>
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
            Welcome back, {user?.name || 'Mate'}! 👋
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
                <p className="text-3xl font-bold text-indigo-600">{totalMinutes}</p>
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
                <p className="text-3xl font-bold text-green-600">₹{walletBalance}</p>
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
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mentor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {callHistory.map((call) => (
                    <tr key={call.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">{call.mentorName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-2 ${call.type === 'video' ? 'text-blue-600' : 'text-green-600'}`}>
                          {call.type === 'video' ? <FaVideo /> : <FaPhone />}
                          <span className="capitalize">{call.type}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{call.duration}</td>
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

        {/* Quick Actions */}
       
      </main>
    </div>
  );
}

export default MateDashboard;
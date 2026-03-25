import { requestFCMToken, onForegroundMessage } from "../firebase/firebase";

/**
 * Get FCM token and log it to console
 * Call this function when you want to get the FCM token for the user
 */
export const getFCMToken = async () => {
  const token = await requestFCMToken();
  if (token) {
    console.log("🎯 FCM Token:", token);
    console.log("📋 Copy this token for Firebase Cloud Messaging");
  }
  return token;
};

/**
 * Initialize foreground message listener with custom handler
 * @param {Function} onMessageCallback - Optional callback to handle incoming messages
 */
export const initializeFCM = (onMessageCallback) => {
  onForegroundMessage((payload) => {
    console.log("📬 Foreground message received:", payload);
    
    // If custom callback provided, call it
    if (onMessageCallback) {
      onMessageCallback(payload);
    }
    
    // Handle call notification specifically
    if (payload.data?.type === 'incoming_call') {
      console.log("📞 Incoming call notification:", payload.data);
    }
  });
  console.log("✅ FCM foreground listener initialized");
};

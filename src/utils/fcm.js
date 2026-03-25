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
 * Initialize foreground message listener
 */
export const initializeFCM = () => {
  onForegroundMessage();
  console.log("✅ FCM foreground listener initialized");
};

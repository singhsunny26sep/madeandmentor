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
    // Store FCM token in localStorage
    localStorage.setItem('fcmToken', token);
    console.log("✅ FCM Token stored in localStorage");
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
    
    // Play notification sound when message is received
    if (payload.notification || payload.data) {
      try {
        // Try to play notification sound
        const audio = new Audio("/notification-sound.mp3");
        audio.play().catch(err => {
          console.log("Notification sound not available, using browser notification");
          // Fallback to browser notification with sound
          if (Notification.permission === "granted") {
            new Notification(payload.notification?.title || "Notification", {
              body: payload.notification?.body || "You have a new message",
              sound: "default"
            });
          }
        });
      } catch (e) {
        console.log("Audio playback failed:", e);
      }
    }
    
    // If custom callback provided, call it
    if (onMessageCallback) {
      onMessageCallback(payload);
    }
    
    // Handle call notification specifically
    // Support multiple formats: type=incoming_call, event=RINGING, type=call, type=ringing
    const isCallNotification = 
      payload.data?.type === 'incoming_call' || 
      payload.data?.type === 'call' || 
      payload.data?.type === 'ringing' ||
      payload.data?.event === 'RINGING' ||
      payload.data?.event === 'incoming_call';
    
    if (isCallNotification) {
      console.log("📞 Incoming call notification:", payload.data);
    }
  });
  console.log("✅ FCM foreground listener initialized");
};

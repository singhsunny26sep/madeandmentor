// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDmsPUtnY-S9XJnvMxGUAi6zskrdyp-uo",
  authDomain: "mateandmentor-83864.firebaseapp.com",
  projectId: "mateandmentor-83864",
  storageBucket: "mateandmentor-83864.firebasestorage.app",
  messagingSenderId: "305523793072",
  appId: "1:305523793072:web:911391fdf9e4bd054e2f75",
  measurementId: "G-T3VEG8DTC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Messaging
const messaging = getMessaging(app);

// Function to get FCM token
export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BH8sadFA-qbhf1mokSo_shRxuWtFKt0WGDN_qZryGuquK7JdZwy9qnx0_vOlFR6Vk-5f6mjsxnLFUWJm_FqcDYo"
      });
      console.log("🎯 FCM Token:", token);
      return token;
    } else {
      console.log("Notification permission denied");
      return null;
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};

// Function to listen for foreground messages
export const onForegroundMessage = (callback) => {
  onMessage(messaging, (payload) => {
    console.log("Foreground message:", payload);
    
    // Play notification sound
    if (Notification.permission === "granted") {
      // Create and play notification sound
      try {
        const audio = new Audio("/notification-sound.mp3");
        audio.play().catch(err => console.log("Audio play failed:", err));
      } catch (e) {
        console.log("Audio not available");
      }
    }
    
    if (callback) {
      callback(payload);
    }
  });
};

export { messaging };
export default app;

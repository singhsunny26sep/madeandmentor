// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export default app;
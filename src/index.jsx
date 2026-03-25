import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactFacebookPixel from 'react-facebook-pixel';
import { getFCMToken, initializeFCM } from "./utils/fcm";

// Facebook Pixel Configuration
const pixelId = '4514046808881979';
ReactFacebookPixel.init(pixelId, {}, { debug: false, autoConfig: true });
ReactFacebookPixel.pageView();

// Initialize FCM
const initFCM = async () => {
  initializeFCM();
  await getFCMToken();
};
initFCM();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

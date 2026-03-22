import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import EmotionalCare from './components/EmotionalCare';
import Mentors from './components/Mentors';
import Mentor from './components/Mentor';
import KnowYourMateMentor from './components/KnowYourMateMentor';
import Login from './components/Login';
import Signup from './components/Signup';
import VideoCall from './components/VideoCall';
import Subscription from './components/Subscription';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mate" element={<Mentor />} />
          <Route path="/mentor" element={<Mentors />} />

          <Route path="/emotional-care" element={<EmotionalCare />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/know-your-mate-mentor" element={<KnowYourMateMentor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
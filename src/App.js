import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import Contact from './components/Contact';
import EmotionalCare from './components/EmotionalCare';
import Mentors from './components/Mentors';
import Mentor from './components/Mentor';



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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
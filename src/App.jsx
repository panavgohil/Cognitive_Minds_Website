import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Council from './pages/Council';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Recruitment from './pages/Recruitment'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/council" element={<Council />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recruitment" element={<Recruitment />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
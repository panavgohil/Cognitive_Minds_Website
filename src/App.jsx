import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Council from './pages/Council';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Recruitment from './pages/Recruitment';
import Competitions from './pages/Competitions';
import Archive from './pages/Archive';
import Rulebook from './pages/Rulebook';
import Gallery from './pages/Gallery';
import TournamentPhotos from './pages/TournamentPhotos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/council" element={<Council />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/rulebook" element={<Rulebook />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Dynamic route for specific tournament media */}
        <Route path="/gallery/:id" element={<TournamentPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
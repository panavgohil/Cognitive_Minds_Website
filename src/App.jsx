import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import Council from './pages/Council';
import Archive from './pages/Archive';
import Competitions from './pages/Competitions';
import Rulebook from './pages/Rulebook';
import Gallery from './pages/Gallery';
import TournamentPhotos from './pages/TournamentPhotos'; // Added this import
import Recruitment from './pages/Recruitment';
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard';

// Import your Auth Guard
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/rulebook" element={<Rulebook />} />
          
          {/* Gallery Routes */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<TournamentPhotos />} />
          
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard route */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
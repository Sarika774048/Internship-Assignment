import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f3f2ef] font-sans pb-10">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="*" element={<div className="p-20 text-center font-bold">404: Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
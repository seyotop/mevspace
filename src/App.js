import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminLogin from './pages/AdminLogin';
import UserPage from './pages/UserPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
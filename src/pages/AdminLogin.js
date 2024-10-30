import React, { useState } from 'react';
import '../styles/AdminLogin.css'; 
import logo from '../assets/logo.png';

const AdminLogin = () => {
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 

  const handleLogin = () => {
    if (password === 'haslo') { ('Zalogowano jako Admin!');
    } else {
      setError('Nieprawidłowe hasło'); 
    }
  };

  return (
    <div className="admin-login-page">
      <img src={logo} alt="Logo" className="logo" />
      <div className="admin-login-title">Administator</div>
      <input
        type="password"
        placeholder="Hasło"
        className="admin-login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div style={{ color: '#f73939', marginBottom: '10px' }}>{error}</div>}
      <button className="admin-login-button" onClick={handleLogin}>Zaloguj</button>
    </div>
  );
};

export default AdminLogin;
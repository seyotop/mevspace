import React, { useState } from 'react';
import '../styles/AdminLogin.css'; // Importuj plik CSS
import logo from '../assets/logo.png';

const AdminLogin = () => {
  const [password, setPassword] = useState(''); // Zmienna do hasła
  const [error, setError] = useState(''); // Zmienna do błędów

  const handleLogin = () => {
    // Tutaj możesz dodać logikę logowania admina
    if (password === 'haslo') { // Zmień na prawdziwe hasło
      alert('Zalogowano jako Admin!');
      // Przenieś do głównej strony lub dodaj logikę
    } else {
      setError('Nieprawidłowe hasło'); // Ustaw błąd
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
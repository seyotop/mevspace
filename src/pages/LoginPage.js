import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate z react-router-dom
import '../styles/LoginPage.css';
import logo from '../assets/logo.png'; 

// Lista użytkowników
const users = [
  { id: 1, firstName: "Szymon", lastName: "Kostrzewa" },
  { id: 2, firstName: "Bartosz", lastName: "Dzik" },
  { id: 3, firstName: "Michał", lastName: "Zdziarstek" },
  { id: 4, firstName: "Michał", lastName: "Łubiński" },
  { id: 5, firstName: "Kacper", lastName: "Łada" },
  { id: 6, firstName: "Jakub", lastName: "Rytelewski" },
  { id: 7, firstName: "Brajan", lastName: "Łubgan" },
  { id: 8, firstName: "Hubert", lastName: "Kukwa" },
  { id: 9, firstName: "Dominik", lastName: "Pyśk" },
  { id: 10, firstName: "Piotr", lastName: "Kulesza" },
  { id: 11, firstName: "Mateusz", lastName: "Wójcik" },
  { id: 12, firstName: "Kamil", lastName: "Dytrych" },
];


function LoginPage() {
  const navigate = useNavigate(); // Zainicjalizuj useNavigate

// Funkcja logowania
const handleLogin = (user) => {
  // Zapisz wybranego użytkownika w localStorage
  localStorage.setItem('loggedUser', JSON.stringify({
    id: user.id,
    name: user.firstName + ' ' + user.lastName // Zapisywanie pełnego imienia i nazwiska
  }));
  // Przekierowanie do strony użytkownika
  navigate(`/user/${user.id}`);
};

  // Funkcja do logowania jako admin
  const handleAdminLogin = () => {
    navigate('/admin'); // Przekieruj na stronę logowania admina
  };

  return (
    <div className="login-page">
      <img src={logo} alt="Logo" className="logo" />
      <header className="login-header"> 
        <div className="select-user">Witaj! Wybierz użytkownika</div>
      </header>

      <div className="user-grid">
  {users.map((user) => (
    <div
      key={user.id}
      className="user-tile"
      onClick={() => handleLogin(user)} // Zaktualizowane, aby wywołać handleLogin
    >
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
    </div>
  ))}
</div>

      {/* Konto Admin w prawym dolnym rogu */}
      <div className="admin-account" onClick={handleAdminLogin}>
        Admin
      </div>
    </div>
  );
}

export default LoginPage;

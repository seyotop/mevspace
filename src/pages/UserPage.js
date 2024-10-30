import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserPage.css';

const UserPage = () => {
  const { id } = useParams(); // Pobierz id użytkownika z parametrów URL
  const user = JSON.parse(localStorage.getItem('loggedUser')); // Odczytaj wybranego użytkownika z localStorage
  const [activeRectangle, setActiveRectangle] = useState(null); // Stan do zarządzania aktywnym prostokątem

  if (!user) {
    return <h1>Brak danych użytkownika</h1>; // Zwróć informację o braku danych
  }

  // Funkcja do obsługi kliknięcia w kafelek
  const handleOptionClick = (option) => {
    setActiveRectangle(option); // Ustaw aktywny prostokąt na podstawie klikniętej opcji
  };

  return (
    <div className="user-page">
      {/* Kafelki */}
      <div className="options">
        <div className="option" onClick={() => handleOptionClick('Magazyn')}>Magazyn</div>
        <div className="option" onClick={() => handleOptionClick('RMA')}>RMA</div>
        <div className="option" onClick={() => handleOptionClick('Inne')}>Inne</div>
      </div>

      {/* Kontener dla prostokątów */}
      <div className="rectangle-container">
        {/* Prostokąt po lewej stronie */}
        <div className="sidebar" />
        
        {/* Wyświetlanie głównego prostokąta w zależności od klikniętej opcji */}
        <div className="rectangle">
          {activeRectangle ? `Prostokąt ${activeRectangle}` : 'Wybierz opcję z kafelków'}
        </div>
      </div>

      {/* Napis w lewym dolnym rogu */}
      <div className="footer">
        Zalogowany jako: {user.name}
      </div>
    </div>
  );
};

export default UserPage;
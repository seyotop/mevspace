import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserPage.css';

const UserPage = () => {
  const { id } = useParams(); 
  const user = JSON.parse(localStorage.getItem('loggedUser')); 
  const [activeRectangle, setActiveRectangle] = useState(null); 

  if (!user) {
    return <h1>Brak danych użytkownika</h1>; 
  }

  
  const handleOptionClick = (option) => {
    setActiveRectangle(option); 
  };

  return (
    <div className="user-page">
      <div className="options">
        <div className="option" onClick={() => handleOptionClick('Magazyn')}>Magazyn</div>
        <div className="option" onClick={() => handleOptionClick('RMA')}>RMA</div>
        <div className="option" onClick={() => handleOptionClick('Inne')}>Inne</div>
      </div>

      <div className="rectangle-container">
        <div className="sidebar" />
        <div className="rectangle">
          {activeRectangle ? `Prostokąt ${activeRectangle}` : 'Wybierz opcję z kafelków'}
        </div>
      </div>

      <div className="footer">
        Zalogowany jako: {user.name}
      </div>
    </div>
  );
};

export default UserPage;
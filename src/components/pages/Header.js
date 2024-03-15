import React from 'react';
import './Header.css'; // Import CSS file for styling
import logo from './logo.png'; // Import your logo image

const Header = ({ username, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        My App
      </div>
      <div className="user">
        <span>{username}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
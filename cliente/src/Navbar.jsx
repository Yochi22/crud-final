import React, { useState } from 'react';
import './navbar.css';
import logo from './assets/logo.png'

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleClick = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <a  title="Videoclub" href="/"><img className="logo"src={logo} alt="Logo" /></a>
        <button className="navbar-toggle" onClick={handleClick}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className={menuAbierto ? 'navbar-collapse open' : 'navbar-collapse'}>
        <ul className="nav">
          <li className="nav-item"><a href="/">Inicio</a></li>
          <li className="nav-item"><a href="addmovie">Agregar Película</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
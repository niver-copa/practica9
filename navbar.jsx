import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/habitaciones">Habitaciones</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

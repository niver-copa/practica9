// Nav.jsx
import React from 'react';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import './Nav.css';
import UserProfile from '../userprofile/UserProfile';
import useNavLogic from '../navlogic/NavLogic'; // Importa el nuevo hook

const Nav = () => {
  const {
    isExpanded,
    showUserProfile,
    toggleNav,
    openUserProfile,
    closeUserProfile,
  } = useNavLogic(); // Usa el hook personalizado

  return (
    <nav className={`navigation ${isExpanded ? 'expanded' : ''}`}>
      <div className="nav-toggle" onClick={toggleNav}>
        <FaUser />
      </div>
      <ul>
        <li><a href="/"><FaHome /> Inicio</a></li>
        <li><a href="#" onClick={openUserProfile}><FaUser /> Perfil</a></li>
        <li><a href="/buscar"><FaSearch /> Buscar</a></li>
      </ul>
      {showUserProfile && (
        <div className="modal">
          <div className="modal-content">
            <UserProfile onClose={closeUserProfile} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

// UserProfile.jsx
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ onClose }) => {
  return (
    <div className="user-profile-modal">
      <div className="user-profile-content">
        <h2 className="user-profile-title">Perfil de Usuario</h2>
        <p className="user-profile-description">
          Información y contenido relacionado con el usuario.
        </p>
        <button className="user-profile-close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

import React from 'react';

const Stays = ({ stays }) => {
  return (
    <div className="stays">
      <h2>Estancias Disponibles</h2>
      <ul>
        {stays.map((stay, index) => (
          <li key={index}>
            <h3>{stay.name}</h3>
            <p>{stay.description}</p>
            <p>Precio por noche: ${stay.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stays;

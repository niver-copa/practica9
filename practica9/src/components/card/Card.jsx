import React from 'react';
import './Card.css'; 

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

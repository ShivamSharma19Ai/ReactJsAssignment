// src/components/Card/Card.js
import React from 'react';
import './Card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <img className="card-image" src={"https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"} alt="User" />
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-actions">
        <button className="exclamation-button">
            {/* Your exclamation icon or text */}
            !
        </button>
        <button className="tag-button">
        {ticket.tag}
        </button>
        </div>
    </div>
  );
};

export default Card;

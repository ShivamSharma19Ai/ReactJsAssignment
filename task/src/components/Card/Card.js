import React from 'react';
import './Card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-body">
        <p>Status: {ticket.status}</p>
        <p>User: {ticket.user}</p>
        <p>Priority: {ticket.priority}</p>
        {/* Add other ticket details as needed */}
      </div>
    </div>
  );
};

export default Card;

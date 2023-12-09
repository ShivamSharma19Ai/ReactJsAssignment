// src/components/Controls/Controls.js
import React from 'react';
import './Controls.css';

const Controls = ({ onGroupingChange, onSortChange }) => {
  return (
    <div className="controls">
      <div className="dropdown">
        <label>Display:</label>
        <select onChange={(e) => {
          const value = e.target.value;
          if (value === "group-by" || value === "order-by") {
            e.target.value = ''; // reset selection when choosing a new category
          }
          if (value.startsWith("group")) {
            onGroupingChange(value.split('-')[1]);
          } else if (value.startsWith("order")) {
            onSortChange(value.split('-')[1]);
          }
        }}>
          <option value="">Select...</option>
          <optgroup label="Group By">
            <option value="group-status">Status</option>
            <option value="group-user">User</option>
            <option value="group-priority">Priority</option>
          </optgroup>
          <optgroup label="Order By">
            <option value="order-priority">Priority</option>
            <option value="order-title">Title</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default Controls;

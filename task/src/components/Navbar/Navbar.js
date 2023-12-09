// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onGroupingChange, onSortChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = (option, isGrouping) => {
    if (isGrouping) {
      onGroupingChange(option);
    } else {
      onSortChange(option);
    }

    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Display
        </button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <div onClick={() => handleItemClick('status', true)}>Group By Status</div>
            <div onClick={() => handleItemClick('user', true)}>Group By User</div>
            <div onClick={() => handleItemClick('priority', true)}>Group By Priority</div>
            <div className="divider"></div>
            <div onClick={() => handleItemClick('priority', false)}>Order By Priority</div>
            <div onClick={() => handleItemClick('title', false)}>Order By Title</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

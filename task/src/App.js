// src/App.js
import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import Controls from './components/Controls/Controls';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets));
  }, []);

  const handleGroupingChange = option => {
    setGroupingOption(option);
  };

  const handleSortChange = option => {
    setSortOption(option);
  };

  return (
    <div className="app">
      <Controls onGroupingChange={handleGroupingChange} onSortChange={handleSortChange} />
      <Board tickets={tickets} groupingOption={groupingOption} sortOption={sortOption} />
    </div>
  );
};

export default App;

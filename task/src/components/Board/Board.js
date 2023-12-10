// src/components/Board/Board.js
import React from 'react';
import Card from '../Card/Card';
import './Board.css';

const Board = ({ tickets, groupingOption, sortOption }) => {
  const groupTickets = () => {
    switch (groupingOption) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return [];
    }
  };

  const sortTickets = (groupedTickets) => {
    switch (sortOption) {
      case 'priority':
        return sortByPriority(groupedTickets);
      case 'title':
        return sortByTitle(groupedTickets);
      default:
        return [];
    }
  };

  const groupByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket.status;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: groupKey, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const groupByUser = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket.userId;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: groupKey, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const groupByPriority = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey = `Priority ${ticket.priority}`;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: groupKey, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const sortByPriority = (groupedTickets) => {
    return groupedTickets.sort((a, b) => b.name.split(' ')[1] - a.name.split(' ')[1]);
  };

  const sortByTitle = (groupedTickets) => {
    return groupedTickets.sort((a, b) => a.name.localeCompare(b.name));
  };

  const groupedAndSortedTickets = sortTickets(Object.values(groupTickets()));

  return (
    <div className="board">
      {groupedAndSortedTickets.length > 0 ? (
        groupedAndSortedTickets.map((group) => (
          <div key={group.name} className="group">
            <div className="group-heading">
              <img src="https://cdn-icons-png.flaticon.com/512/1985/1985474.png" alt="" className="group-icon" />
              <span className="row-name">{group.name}</span>
              <button className="add-button">+</button>
              <button className="options-button">...</button>
            </div>
            <div className="cards">
              {group.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No tickets to display.</p>
      )}
    </div>
  );
};

export default Board;

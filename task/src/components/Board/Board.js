// src/components/Board/Board.js
import React from 'react';
import Card from '../Card/Card';
import './Board.css';

const Board = ({ tickets, groupingOption, sortOption }) => {
  const groupTickets = () => {
    // Implement the logic to group tickets based on the grouping option
    // In this case, we'll group by the selected option (status, user, priority)
    // You can customize this logic based on your requirements

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

  const sortTickets = groupedTickets => {
    // Implement the logic to sort tickets based on the sort option (priority, title)
    // You can customize this logic based on your requirements

    switch (sortOption) {
      case 'priority':
        return sortByPriority(groupedTickets);
      case 'title':
        return sortByTitle(groupedTickets);
      default:
        return [];
    }
  };

  const groupByStatus = tickets => {
    // Implement logic to group tickets by status
    // Return an array of objects, where each object represents a group
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket.status;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: groupKey, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const groupByUser = tickets => {
    // Implement logic to group tickets by user
    // Return an array of objects, where each object represents a group
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket.userId;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: groupKey, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const groupByPriority = tickets => {
    // Implement logic to group tickets by priority
    // Return an array of objects, where each object represents a group
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket.priority;
      if (!groups[groupKey]) {
        groups[groupKey] = { name: `Priority ${groupKey}`, tickets: [] };
      }
      groups[groupKey].tickets.push(ticket);
      return groups;
    }, {});
  };

  const sortByPriority = groupedTickets => {
    // Implement logic to sort grouped tickets by priority
    // Return the sorted array of groups
    return groupedTickets.sort((a, b) => b.name - a.name);
  };

  const sortByTitle = groupedTickets => {
    // Implement logic to sort grouped tickets by title
    // Return the sorted array of groups
    return groupedTickets.sort((a, b) => a.name.localeCompare(b.name));
  };

  const groupedAndSortedTickets = sortTickets(Object.values(groupTickets()));

  return (
    <div className="board">
      {/* Render tickets based on the grouped and sorted data */}
      {groupedAndSortedTickets.length > 0 ? (
        groupedAndSortedTickets.map(group => (
          <div key={group.name} className="group">
            <h2>{group.name}</h2>
            <div className="cards">
              {group.tickets.map(ticket => (
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
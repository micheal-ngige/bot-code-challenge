// components/BotFilterSort.js
import React from 'react';

const BotFilterSort = ({ filterBy, sortBy, onFilterChange, onSortChange }) => {
  return (
    <div className="bot-filter-sort">
      <label htmlFor="filter">Filter by Class:</label>
      <select
        id="filter"
        value={filterBy}
        onChange={(e) => onFilterChange(e.target.value)}
        multiple
      >
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Witch">Witch</option>
        <option value="Defender">Defender</option>
        <option value="Assault">Assault</option>
      </select>

      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default BotFilterSort;

import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, i) => (
          <li key={i}>
            <button
              onClick={() => {
                onFilterChange(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

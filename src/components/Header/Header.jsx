import React from 'react';
import styles from './Header.module.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, i) => (
          <li key={i}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } `}
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

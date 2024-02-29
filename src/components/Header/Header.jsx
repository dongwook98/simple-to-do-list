import React from 'react';
import styles from './Header.module.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../../context/DarkModeContext';
import { changeListKorean } from '../../utils/translation';

export default function Header({
  filters,
  filter: selectedFilter,
  onFilterChange,
}) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode ? (
          <MdDarkMode className={styles.darkMode} />
        ) : (
          <MdLightMode className={styles.lightMode} />
        )}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                selectedFilter === filter && styles.selected
              } `}
              onClick={() => {
                onFilterChange(filter);
              }}
            >
              {changeListKorean(filter)}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

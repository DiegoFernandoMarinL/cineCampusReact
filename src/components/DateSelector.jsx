import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const DateSelector = ({ selectedDay, setSelectedDay }) => {
  const days = ['Fri 17', 'Sat 18', 'Sun 19', 'Mon 20', 'Tue 21'];

  return (
    <div className={styles.dateSelector}>
      {days.map((day) => (
        <button
          key={day}
          className={`${styles.day} ${selectedDay === day ? styles.active : ''}`}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DateSelector;

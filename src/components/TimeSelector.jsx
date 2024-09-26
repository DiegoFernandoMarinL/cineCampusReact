import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const times = ['13:00', '15:45', '18:50', '20:30'];

  return (
    <div className={styles.timeSelector}>
      {times.map((time) => (
        <button
          key={time}
          className={`${styles.time} ${selectedTime === time ? styles.active : ''}`}
          onClick={() => setSelectedTime(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;

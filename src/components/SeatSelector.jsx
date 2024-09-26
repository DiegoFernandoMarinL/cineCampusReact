import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const SeatSelector = ({ seats, reservedSeats, selectedSeat, onSeatClick }) => {
  return (
    <div className={styles.seatSelector}>
      {seats.map((row, rowIndex) => (
        <div className={styles.seatRow} key={rowIndex}>
          {row.map((seat) => (
            <button
              key={seat}
              className={`${styles.seat} ${reservedSeats.includes(seat) ? styles.reserved : selectedSeat === seat ? styles.selected : styles.available}`}
              onClick={() => !reservedSeats.includes(seat) && onSeatClick(seat)}
              disabled={reservedSeats.includes(seat)}
            >
              {seat}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;

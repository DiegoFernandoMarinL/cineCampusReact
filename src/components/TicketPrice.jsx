import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const TicketPrice = ({ price }) => {
  return (
    <div className={styles.ticketPrice}>
      <p>Price</p>
      <h2>{price}</h2>
      <button className={styles.buyButton}>Buy ticket</button>
    </div>
  );
};

export default TicketPrice;

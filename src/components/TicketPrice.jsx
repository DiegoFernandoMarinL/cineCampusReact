import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const TicketPrice = ({ price }) => {
  return (
    <div className={styles.ticketPrice}>
      <div>
        <p>Price</p>
        <h2>{price}</h2>
      </div>  
      <button className={styles.buyButton}><strong>Buy ticket</strong></button>
    </div>
  );
};

export default TicketPrice;

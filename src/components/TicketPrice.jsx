import React from 'react';
import styles from '../styles/ChooseSeat.module.css'

const TicketPrice = ({ id_funcion, selectedSeats, price }) => {
  const handleBuyTicket = async () => {
    try {
      const response = await fetch('http://localhost:5000/confirmSeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_funcion,
          selectedSeats,  // El array de asientos seleccionados
        }),
      });
  
      if (response.ok) {
        console.log('Asientos confirmados:', selectedSeats);
      } else {
        console.error('Error al confirmar los asientos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  return (
    <div className={styles.ticketPrice}>
      <div>
        <p>Price</p>
        <h2>{price}</h2>
      </div>  
      <button className={styles.buyButton} onClick={handleBuyTicket}><strong>Buy ticket</strong></button>
    </div>
  );
};

export default TicketPrice;

import Header from './Header';
import screen from '../storage/img/screen.svg';
import styles from '../styles/ChooseSeat.module.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SeatSelector from './SeatSelector';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import TicketPrice from './TicketPrice';

const ChooseSeat = () => {
  const { id_funcion } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]); // Inicializado como array vacío
  const [selectedDay, setSelectedDay] = useState('Fri 17');
  const [selectedTime, setSelectedTime] = useState('13:00');
  const [seat, setSeat] = useState([]);

  const seats = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', "B7"],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'],
  ];

  useEffect(() => {
    // Creamos una función asíncrona dentro de useEffect
    const fetchSeat = async () => {
        try {
            const response = await fetch(`http://localhost:5000/seatOn/${id_funcion}`);
            const data = await response.json(); 
            setSeat(data); // Guarda los datos en el estado  
        } catch (error) {
            console.error('Error al obtener los asientos de la funcion:', error);
        }
    };
    fetchSeat(); // Ejecutamos la función
  }, [id_funcion]); 

  useEffect(() => {
    if (seat.length > 0) {
      console.log('Asientos actualizados:', seat);
    }
  }, [seat]);

  const reservedSeats = seat.length > 0 ? seat[0].asientos_ocupados : [];

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        // Si el asiento ya está seleccionado, lo quitamos
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        // Si no está seleccionado, lo añadimos
        return [...prevSelectedSeats, seat];
      }
    });
  };

  return (
    <div className={styles.seatBooking}>
      <Header text={"Choose Seat"} />
      <img src={screen} alt="Screen" />
      <SeatSelector 
        seats={seats} 
        reservedSeats={reservedSeats}  // Asegúrate de que reservedSeats siempre sea un array
        selectedSeats={selectedSeats} // Asegúrate de usar plural
        onSeatClick={handleSeatClick} 
      />
      <DateSelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <TicketPrice price="$24.99" />
    </div>
  );
};

export default ChooseSeat;

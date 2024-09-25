import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/MoviesOn.module.css';

export const MoviesOn = ({id, caratula, titulo, genero}) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirige al detalle de la película usando el id
    navigate(`/CinemaSelection/${id}`);
  };   
  return (
    <div className={styles.container__movie} onClick={handleClick}>
        <img src={caratula ? caratula : 'Cargando...'}/>
        <div>
            <h3>{titulo ? titulo : 'Cargando...'}</h3>
            <span>{genero ? genero : 'Cargando...'}</span>
        </div>
    </div>
  )
}
export default MoviesOn

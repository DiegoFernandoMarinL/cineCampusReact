import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header'
import styles from '../styles/CinemaSelection.module.css'
import star from '../storage/img/star.png'

export const CinemaSelection = () => {
    const navigate = useNavigate();
    const { id, id_funcion } = useParams(); 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Simulación de una llamada a una API para obtener los detalles de la película
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/movie/${id}`);
                const data = await response.json();
                setMovie(data); // Guarda los detalles de la película en el estado
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    const handleClick = () => {
        // Redirige al detalle de la película usando el id
        navigate(`/ChooseSeat/${id_funcion}`);
    }; 

    if (!movie) {
        return <div style={{ color: 'white' }}>Cargando...</div>;
    }
  return (
    <div>
        <Header text={"Cinema Selection"}/>
        <div className={styles.container__image}>
            <img src={movie[0].caratula} alt="" />
        </div>
        <div className={styles.detail__movie}>
            <h1>{movie[0].titulo}</h1>
            <span>{movie[0].genero}</span>
            <p>{movie[0].sinopsis}</p>
            <div className={styles.container__ranking}>
                <img src={star} alt="" />
                <h3>{movie[0].ranking}</h3>
            </div>
        </div>
        <div className={styles.container__place}>
            <h4>Cinema</h4>
            <div className={styles.description__place}>
                <h4>Campuslands</h4>
                <span>Auditorium</span>
                <img src="" alt="" />
            </div>
        </div>
        <div className={styles.container__button} onClick={handleClick}>
            <button className={styles.link}>Book now</button>
        </div>
    </div>
  )
}
export default CinemaSelection
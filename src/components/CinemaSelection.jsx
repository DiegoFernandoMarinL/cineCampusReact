import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './header'
import styles from '../styles/CinemaSelection.module.css'
import movieTest from '../storage/img/logo1.png'
import star from '../storage/img/star.png'

export const CinemaSelection = () => {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Simulación de una llamada a una API para obtener los detalles de la película
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/movie/${id}`);
                const data = await response.json();
                console.log(data);
                setMovie(data); // Guarda los detalles de la película en el estado
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

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
        <div className={styles.container__button}>
            <Link className={styles.link}to="/ChooseSeat">Book now</Link>
        </div>
    </div>
  )
}
export default CinemaSelection
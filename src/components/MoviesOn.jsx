import React, { useEffect, useState } from 'react';
import styles from '../styles/MoviesOn.module.css'
import movie from '../storage/img/movie.jpg'

export const MoviesOn = () => {
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        // Creamos una función asíncrona dentro de useEffect
        const fetchPelicula = async () => {
            try {
                const response = await fetch('http://localhost:5000/movie'); // Llama a tu backend
                const data = await response.json();                
                setPelicula(data[0]); // Guarda los datos en el estado
            } catch (error) {
                console.error('Error al obtener los datos de la película:', error);
            }
        };
        fetchPelicula(); // Ejecutamos la función
    }, []); 
  return (
    <div className={styles.section__movies}>
        <div className={styles.container__movie}>
            <img src={pelicula ? pelicula.caratula : 'Cargando...'}/>
            <div>
                <h3>{pelicula ? pelicula.titulo : 'Cargando...'}</h3>
                <span>{pelicula ? pelicula.genero : 'Cargando...'}</span>
            </div>
        </div>
        <div className={styles.container__movie}>
            <img src={movie}/>
            <div>
                <h3>Name Movie</h3>
                <span>Adventure</span>
            </div>
        </div>
        <div className={styles.container__movie}>
            <img src={movie}/>
            <div>
                <h3>Name Movie</h3>
                <span>Adventure</span>
            </div>
        </div>
        <div className={styles.container__movie}>
            <img src={movie}/>
            <div>
                <h3>Name Movie</h3>
                <span>Adventure</span>
            </div>
        </div>
    </div>
  )
}
export default MoviesOn

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesOn from './MoviesOn'
import styles from '../styles/Homeapp.module.css'
import bell from '../storage/img/bell.svg'
import profile from '../storage/img/profile.svg'
import lupa from '../storage/img/lupa.svg'

export const Homeapp = () => {
  const location = useLocation();
  const { nombre, apellido } = location.state || {}; 
  const [peliculas, setPelicula] = useState([]);

    useEffect(() => {
      // Creamos una función asíncrona dentro de useEffect
      const fetchPelicula = async () => {
          try {
              const response = await fetch('http://localhost:5000/movie'); // Llama a tu backend
              const data = await response.json(); 
              setPelicula(data); // Guarda los datos en el estado             
            } catch (error) {
              console.error('Error al obtener los datos de la película:', error);
            }
          };
          fetchPelicula(); // Ejecutamos la función
    }, []); 
  return (
    <div className={styles.container__main}>
      <section className={styles.section__greeting}>
        <img src={profile}/>
        <div className={styles.container__greeting}>
          <h5>Hi, {nombre} {apellido}!  </h5>
          <p>Let’s watch movie together!</p>
        </div>
        <img src={bell} />
      </section>
      <section className={styles.section__search}>
        <img src={lupa}/>
        <input type="text" placeholder='Search movie, cinema, genre...'/>
      </section>
      <section className={styles.section__movies}>
        <div className={styles.container__text}>
          <h4>Now playing</h4>
          <p>See all</p>
        </div>
        <div className={styles.section__moviesOn}>
          {peliculas.map((pelicula) => (
              <MoviesOn
              id={pelicula.peliculaId}
              caratula={pelicula.caratula}
              titulo={pelicula.titulo}
              genero={pelicula.genero}
              id_funcion={pelicula._id}
              />
          ))}
        </div>
      </section>
      <section className={styles.section__coming_soon}>
        <div className={styles.container__text}>
          <h4>Coming soon</h4>
          <p>See all</p>
        </div>
        {/* componente movies proximamente */}
      </section>
    </div>
  )
}

export default Homeapp

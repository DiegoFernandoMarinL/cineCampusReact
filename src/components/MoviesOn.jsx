import React from 'react';
import styles from '../styles/MoviesOn.module.css'

export const MoviesOn = ({caratula, titulo, genero}) => {    
  return (
    <div className={styles.container__movie}>
        <img src={caratula ? caratula : 'Cargando...'}/>
        <div>
            <h3>{titulo ? titulo : 'Cargando...'}</h3>
            <span>{genero ? genero : 'Cargando...'}</span>
        </div>
    </div>
  )
}
export default MoviesOn

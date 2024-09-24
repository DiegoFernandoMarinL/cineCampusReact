import React from 'react'
import styles from '../styles/MoviesOn.module.css'
import movie from '../storage/img/movie.jpg'

export const MoviesOn = () => {
  return (
    <div className={styles.section__movies}>
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

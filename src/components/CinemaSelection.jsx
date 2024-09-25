import React from 'react'
import Header from './header'
import styles from '../styles/CinemaSelection.module.css'
import movieTest from '../storage/img/logo1.png'
import star from '../storage/img/star.png'

export const CinemaSelection = () => {
  return (
    <div>
        <Header />
        <div className={styles.container__image}>
            <img src={movieTest} alt="" />
        </div>
        <div className={styles.detail__movie}>
            <h1>name</h1>
            <span>genero</span>
            <p>sinopsis</p>
            <div className={styles.container__ranking}>
                <img src={star} alt="" />
                <h3>ranking</h3>
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
    </div>
  )
}
export default CinemaSelection
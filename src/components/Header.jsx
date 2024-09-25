import React from 'react'
import styles from '../styles/Header.module.css'
import back from '../storage/img/back.svg'
import points from '../storage/img/points.svg'

export const Header = () => {
  return (
    <div className={styles.container__header}>
        <img src={back} alt="" />
        <h4>Cinema Selection</h4>
        <img src={points} alt="" />
    </div>
  )
}
export default Header
import React from 'react'
import styles from '../styles/Header.module.css'
import back from '../storage/img/back.svg'
import points from '../storage/img/points.svg'

export const Header = ({text}) => {
  return (
    <div className={styles.container__header}>
        <img src={back} alt="" />
        <h4>{text}</h4>
        <img src={points} alt="" />
    </div>
  )
}
export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../storage/img/logo1.png'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main>
        <section className={styles.section__imagen}>
            <div className={styles.section__container}>
                <img src={logo}/>
            </div>
            <div className={styles.section__text}>
                <small>Cinema is magic that unfolds on screen.</small>
            </div>
        </section>
        <section className={styles.section__button}>
            <Link className={styles.link}to="/LogIn">Sign In</Link>
            <Link className={styles.link}to="/SignUp">Create account</Link>
        </section>
    </main>
  )
}

export default Home

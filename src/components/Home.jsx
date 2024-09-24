import React from 'react'
import { Link } from 'react-router-dom'
import Illustration from '../storage/img/Illustration.svg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main>
        <section className={styles.section__imagen}>
            <div className={styles.section__container}>
                <img src={Illustration}/>
            </div>
            <div className={styles.section__text}>
                <h1>Explore the app</h1>
                <small>Now your finances are in one place and always under control</small>
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

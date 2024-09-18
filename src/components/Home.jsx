import React from 'react'
import { Link } from 'react-router-dom'
import Illustration from '../storage/img/Illustration.svg'
import '../styles/Home.css'

const Home = () => {
  return (
    <main>
        <section className="section__imagen">
            <div className="section__container">
                <img src={Illustration}/>
            </div>
            <div className="section__text">
                <h1>Explore the app</h1>
                <small>Now your finances are in one place and always under control</small>
            </div>
        </section>
        <section className="section__button">
            <Link className="link"to="/LogIn">Sign In</Link>
            <Link className="link"to="/SignUp">Create account</Link>
        </section>
    </main>
  )
}

export default Home

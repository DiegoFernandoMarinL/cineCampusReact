import React from 'react'
import Illustration from '../storage/img/Illustration.svg'
import '../styles/Home.css'

const Home = () => {
  return (
    <main>
        <section class="section__imagen">
            <div class="section__container">
                <img src={Illustration}/>
            </div>
            <div class="section__text">
                <h1>Explore the app</h1>
                <small>Now your finances are in one place and always under control</small>
            </div>
        </section>
        <section class="section__button">
            <a href="./views/log-In-1.html">Sign In</a>
            <a href="./views/sign-Up-3.html">Create account</a>
        </section>
    </main>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Star from '../storage/img/Star.svg'
import '../styles/SignUp.css'

const SignUp = () => {
  return (
    <>
      <header>
            <div className="header__logo">
                <img src={Star}/>
            </div>
        </header>
        <main>
            <section className="section__form">
                <h1>Create account</h1>
                <form action="" method="post" className="login">
                    <label for="">Username</label>
                    <input type="text" placeholder="Your username"/>
                    <label for="">Email</label>
                    <input type="email" placeholder="Your email"/>
                    <label for="">Password</label>
                    <input type="password" value="123456789"/>
                    <span>I accept the terms and privacy policy</span>
                    <div className="button">
                        <Link className="link" to="/LogIn">Log in</Link>
                    </div>
                </form>
            </section>
        </main>
    </>
  )
}

export default SignUp

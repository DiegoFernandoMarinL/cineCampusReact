import React from 'react'
import Star from '../storage/img/Star.svg'
import '../styles/SignUp.css'

const SignUp = () => {
  return (
    <>
      <header>
            <div class="header__logo">
                <img src={Star}/>
            </div>
        </header>
        <main>
            <section className="section__form">
                <h1>Create account</h1>
                <form action="" method="post" class="login">
                    <label for="">Username</label>
                    <input type="text" placeholder="Your username"/>
                    <label for="">Email</label>
                    <input type="email" placeholder="Your email"/>
                    <label for="">Password</label>
                    <input type="password" value="123456789"/>
                    <span>I accept the terms and privacy policy</span>
                    <input type="submit" value="Log in"/>
                </form>
            </section>
        </main>
        <footer>
            <p>Don’t have an account? <b>Sign up</b></p>
        </footer>
    </>
  )
}

export default SignUp

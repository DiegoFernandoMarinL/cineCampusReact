import React from 'react'
import Facebook from '../storage/img/Facebook.svg'
import Google from '../storage/img/Google.svg'
import Apple from '../storage/img/Apple.svg'
import Star from '../storage/img/Star.svg'
import '../styles/LogIn.css'

const LogIn = () => {
  return (
    <>
        <header>
            <div className="header__logo">
                <img src={Star}/>
            </div>
        </header>
        <main>
            <section className="section__form">
                <h1>Log in</h1>
                <form action="" method="post" class="login">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="helloworld@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="123456789"/>
                    <span>Forgot password?</span>
                    <input type="submit" placeholder="Log in"/>
                </form>
            </section>
            <section>
                <div className="section__line">
                    <span>Or Login with</span>
                </div>
                <div className="section__social">
                    <button><img src={Facebook}/></button>
                    <button><img src={Google}/></button>
                    <button><img src={Apple}/></button>
                </div>
            </section>
        </main>
        <footer>
            <p>Don’t have an account? <b>Sign up</b></p>
        </footer>
    </>
    
  )
}

export default LogIn

import React from 'react'

const LogIn = () => {
  return (
    <>
        <header>
            <div className="header__logo">
                <img src="../storage/img/Star.svg"/>
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
                    <button><img src="../storage/img/Facebook.svg"/></button>
                    <button><img src="../storage/img/Google.svg"/></button>
                    <button><img src="../storage/img/Apple.svg"/></button>
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

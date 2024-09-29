import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Facebook from '../storage/img/Facebook.svg'
import Google from '../storage/img/Google.svg'
import Apple from '../storage/img/Apple.svg'
import logo from "../storage/img/logo1.png"
import styles from '../styles/LogIn.module.css'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:5000/validar-login?email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`, {
          method: 'GET',
        });
        const data = await response.json();
  
        // Limpia el formulario después de enviar
        setEmail('');
        setPass('');
        if (data.valido == true){
          const fechaExpiracion = new Date();
          fechaExpiracion.setTime(fechaExpiracion.getTime() + (10 * 60 * 1000)); // Expira en 10 minutos
          document.cookie = `usuario=${data.nombre}; expires=${fechaExpiracion.toUTCString()}; path=/`;

          navigate('/Homeapp/', {state: {nombre: data.nombre, apellido: data.apellido}});
        }else{
          alert(data.message);  
        }
      } catch (error) {
        console.error('Error al crear usuario:', error);
      }        
    };  
    return (
    <>
        <header>
            <div className={styles.header__logo}>
                <img src={logo}/>
            </div>
        </header>
        <main>
            <section className={styles.section__form}>
                <h1>Log in</h1>
                <form action="" method="post" className={styles.login} onSubmit={handleSubmit}>
                    <label For="">Email address</label>
                    <input 
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label For="">Password</label>
                    <input 
                        type="password"
                        placeholder="Your password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    <span>Forgot password?</span>
                    <div>
                        <button type="submit" className={styles.link}>Log in</button>
                    </div>
                </form>
            </section>
            <section>
                <div className={styles.section__line}>
                    <span>Or Login with</span>
                </div>
                <div className={styles.section__social}>
                    <button><img src={Facebook}/></button>
                    <button><img src={Google}/></button>
                    <button><img src={Apple}/></button>
                </div>
            </section>
        </main>
        <footer>
            <p>Don’t have an account? <b><Link to="/SignUp">Sign up</Link></b></p>
        </footer>
    </>
    
  )
}

export default LogIn

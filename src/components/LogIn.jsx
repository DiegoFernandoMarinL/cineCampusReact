import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../storage/img/Facebook.svg'
import Google from '../storage/img/Google.svg'
import Apple from '../storage/img/Apple.svg'
import Star from '../storage/img/Star.svg'
import styles from '../styles/LogIn.module.css'

const LogIn = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      const usuario = {
        nombre,
        email,
        pass,
      };
  
      try {
        const response = await fetch('http://localhost:5000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
  
        const data = await response.json();
        console.log('Usuario creado:', data);
  
        // Limpia el formulario después de enviar
        setNombre('');
        setEmail('');
        setPass('');
        navigate('/LogIn');
      } catch (error) {
        console.error('Error al crear usuario:', error);
      }        
    };  
    return (
    <>
        <header>
            <div className={styles.header__logo}>
                <img src={Star}/>
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
                        onBlur={validarCorreo}
                        required
                    />
                    <label For="">Password</label>
                    <input 
                        type="password"
                        placeholder="Your password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        onBlur={validarPassword}
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

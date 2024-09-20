import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { validarCorreo, validarNombre, validarPassword } from '../utils/validators'
import Star from '../storage/img/Star.svg'
import '../styles/SignUp.css'

const SignUp = () => {
  const navigate = useNavigate();
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
                <div className="header__logo">
                    <img src={Star}/>
                </div>
            </header>
            <main>
              <section className="section__form">
                <h1>Create account</h1>
                <form className="login" onSubmit={handleSubmit}>
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Your username"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    onBlur={validarNombre}
                    required
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validarCorreo}
                    required
                  />

                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Your password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onBlur={validarPassword}
                    required
                  />

                  <span>I accept the terms and privacy policy</span>

                  <div className="button">
                    <button type="submit" className="link">Log in</button>
                  </div>
                </form>
              </section>
            </main>
        </>
    )
}

export default SignUp

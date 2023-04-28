import React from 'react'
import './Header.css'
import img1 from '../assets/header/img1.png'


const Header1 = () => {
  return (
    <header className='hero'>
          <div className='hero__navegation'>
            <figure className='logo'>
              <h2>RAFAEL LAGUNAS</h2>
            </figure>
            <nav className='hero__nav'>  
              <ul className='nav__links'>
                <li className='nav__link a1'><a href="">Inicio</a></li>
                <li className='nav__link a2'><a href="">Paquetes</a></li>
                <li className='nav__link a3'><a href="">Contacto</a></li>
                <li className='nav__link admi'><a href="https://administrador-de-clientes-eta.vercel.app">Administrador</a></li>
              </ul>
            </nav>
          </div>
          <div className='hero__container'>
            <div className='content'>
              <h2>Despega tu negocio con nosotros</h2>
              <p>Simplifica tu negocio y mejora la relación con tus clientes con nuestros servicios
                para la gestión de clientes. Ahorra tiempo y esfuerzo en la administración de tu negocio.
                Contáctanos hoy
              </p>
            </div>
        </div>

    </header>
  )
}

export default Header1
